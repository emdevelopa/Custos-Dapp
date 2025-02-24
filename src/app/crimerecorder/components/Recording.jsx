"use client";
import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useMemo,
  useLayoutEffect,
} from "react";
import bg from "../../../../public/Rectangle.png";
import icon3 from "../../../../public/rotate.png";
import Icons from "./Icons";
import { useRouter } from "next/navigation";
import { WalletContext } from "../../../components/walletprovider";
import { useNotification } from "../../../context/NotificationProvider";
import { GlobalStateContext } from "../../../context/GlobalStateProvider";
import stopIcon from "../../../../public/record.png";
import icon2 from "../../../../public/picture.png";
import Modal from "react-modal";
import { useModal } from "../../../context/ModalProvider";
import {
  executeCalls,
  fetchAccountCompatibility,
  fetchAccountsRewards,
  fetchGasTokenPrices,
} from "@avnu/gasless-sdk";
import { Account, byteArray, CallData, RpcProvider, Signer } from "starknet";
import SuccessScreen from "./Success";
import ErrorScreen from "./error";
import Filename from "./nameModal";
import Image from "next/image";
import { publicProvider, useAccount } from "@starknet-react/core";

const NFT_STORAGE_TOKEN = process.env.NEXT_PUBLIC_IPFS_KEY;

export const Recording = ({ text, icon1, imgText, category }) => {
  const [uri, setUri] = useState("");
  const { openModal, closeModal } = useModal();
  const options = { baseUrl: "https://starknet.api.avnu.fi" };
  const calls = [
    {
      entrypoint: "crime_record",
      contractAddress:
        "0x020bd5ec01c672e69e3ca74df376620a6be8a2b104ab70a9f0885be00dd38fb9",
      calldata: CallData.compile([
        byteArray?.byteArrayFromString(String(uri)),
        0,
      ]),
    },
  ];

  const { openNotification } = useNotification();
  const { connection: account, connectorData } = useContext(WalletContext);
  const { showModal, setShowModal } = useContext(GlobalStateContext);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [currentFacingMode, setCurrentFacingMode] = useState("environment");
  const [isRecording, setIsRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [paymasterRewards, setPaymasterRewards] = useState([]);
  const [gasTokenPrices, setGasTokenPrices] = useState([]);
  const [gasTokenPrice, setGasTokenPrice] = useState();
  const [gaslessCompatibility, setGaslessCompatibility] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const callRef = useRef(null);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const recordedVideoRef = useRef(null);
  const photoRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  const route = useRouter();

  useEffect(() => {
    if (uri !== "") {
      const calls = [
        {
          entrypoint: "crime_record",
          contractAddress:
            "0x020bd5ec01c672e69e3ca74df376620a6be8a2b104ab70a9f0885be00dd38fb9",
          calldata: CallData.compile([
            byteArray?.byteArrayFromString(String(uri)),
            0,
          ]),
        },
      ];
      callRef.current = JSON.stringify(calls, null, 2);
    }

    const triggerWallet = async () => {
      if (uri !== "") {
        setLoading(true);
        try {
          console.log("call ref is :", callRef.current);
          console.log("account is :", account);

          const transactionResponse = await executeCalls(
            account,
            JSON.parse(callRef.current),
            {},
            { ...options, apiKey: process.env.NEXT_PUBLIC_AVNU_KEY }
          );

          console.log("success", transactionResponse);
          openNotification("success", "Transaction successful", "");
          setLoading(false);
          openModal("success");
        } catch (error) {
          console.error("Transaction failed:", error);
          openNotification("error", "Transaction failed", `${error}`);
          setLoading(false);
          openModal("error");
        }
      }
    };
    if (uri !== "") triggerWallet();
  }, [uri]);

  useEffect(() => {
    if (!account) return;
    fetchAccountCompatibility(account.address, options).then(
      setGaslessCompatibility
    );
    fetchAccountsRewards(account.address, {
      ...options,
      protocol: "gasless-sdk",
    }).then(setPaymasterRewards);
  }, [account]);

  useEffect(() => {
    console.log(options);
    fetchGasTokenPrices(options).then(setGasTokenPrices);
  }, []);

  useEffect(() => {
    if (!account || !gasTokenPrice || !gaslessCompatibility) return;
    setErrorMessage(undefined);
  }, [account, gasTokenPrice, gaslessCompatibility]);

  const checkPermissions = async () => {
    try {
      const permissions = await navigator.permissions.query({ name: "camera" });
      console.log("Camera permission status:", permissions.state);
      if (permissions.state === "denied") {
        alert(
          "Camera permissions are denied. Please allow access in your browser settings."
        );
      }
    } catch (error) {
      openModal("error");
      console.warn(
        "Permissions API not supported in this browser:",
        error.message
      );
    }
  };
  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    route.push("/crimerecorders");
  };

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };
  const handleModalClose = (type) => {
    if (type === "success") {
      closeModal();
      route.push("/crimerecorders");
    } else if (type === "error") {
      closeModal();
    }
  };
  const startCamera = async () => {
    await checkPermissions();
    try {
      const constraints = {
        video: { facingMode: currentFacingMode },
        audio: true,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setMediaStream(stream);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.muted = true;
        videoRef.current.style.display = "block";
      }
    } catch (error) {
      console.error("Error accessing the camera", error);
      openNotification("error", "Camera Error", error.message);
    }
  };

  const stopCamera = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
        track.enabled = false;
      });
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setMediaStream(null);
    }
  };

  const handleFileNameSubmit = async (inputFileName) => {
    if (!inputFileName) {
      openNotification("error", "Error", "Filename is required");
      return;
    }

    const validFileName = inputFileName.replace(/[^a-zA-Z0-9-_]/g, '');
    const fileExtension = category === "video" ? ".webm" : ".png";
    const fullFileName = `${validFileName}${fileExtension}`;

    setFileName(fullFileName);
    setUploadModalOpen(false);

    try {
      await uploadToIPFS(recordedChunks, fullFileName);
    } catch (error) {
      openNotification("error", "Upload failed", error.message);
      setErrorMessage("Failed to upload file");
      openModal("error");
    }
  };

  async function uploadToIPFS(fileBlob, fileName) {
    if (!fileBlob || !fileName) {
      throw new Error("Missing file data or filename");
    }

    if (!account) {
      throw new Error("Wallet not connected");
    }

    setIsUploading(true);
    setLoading(true);

    try {
      const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB limit
      if (fileBlob.size > MAX_FILE_SIZE) {
        throw new Error("File size exceeds 50MB limit");
      }

      const formData = new FormData();
      formData.append("file", fileBlob, fileName);

      const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NFT_STORAGE_TOKEN}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Upload failed with status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.IpfsHash) {
        throw new Error("No IPFS hash received");
      }

      setUri(data.IpfsHash);
      openNotification("success", "Upload successful", "File uploaded to IPFS");

    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    } finally {
      setIsUploading(false);
      setLoading(false);
    }
  }

  const startRecording = async () => {
    await startCamera();
    if (!mediaStream) {
      console.error("Media stream not available");
      return;
    }

    const chunks = [];
    const recorder = new MediaRecorder(mediaStream);
    
    recorder.ondataavailable = (event) => chunks.push(event.data);
    recorder.onstop = async () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      setRecordedChunks(blob);
      stopCamera();
      setUploadModalOpen(true);
    };

    recorder.start();
    setIsRecording(true);
    setMediaRecorder(recorder);
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      setIsRecording(false);
    }
    stopCamera();
    setUploadModalOpen(true);
  };

  const takePicture = async () => {
    if (!videoRef.current || !canvasRef.current) {
      openNotification("error", "Error", "Camera not initialized");
      return;
    }

    try {
      const context = canvasRef.current.getContext("2d");
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(
        videoRef.current,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      const dataURL = canvasRef.current.toDataURL("image/png");
      const blob = await fetch(dataURL).then(res => res.blob());
      
      if (!blob) {
        throw new Error("Failed to capture image");
      }

      setRecordedChunks(blob);
      setUploadModalOpen(true);
    } catch (error) {
      console.error("Error taking picture:", error);
      openNotification("error", "Error", "Failed to capture image");
    } finally {
      stopCamera();
    }
  };

  const switchCamera = async () => {
    try {
      const newFacingMode = currentFacingMode === "user" ? "environment" : "user";
      setCurrentFacingMode(newFacingMode);

      // Stop current stream
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }

      // Start new stream with updated facing mode
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: newFacingMode },
        audio: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }

      setMediaStream(newStream);

      // Handle recording state
      if (isRecording && mediaRecorder) {
        const oldRecorder = mediaRecorder;
        oldRecorder.stop();

        const newRecorder = new MediaRecorder(newStream);
        const chunks = [];

        newRecorder.ondataavailable = (event) => chunks.push(event.data);
        newRecorder.onstop = async () => {
          const blob = new Blob(chunks, { type: "video/webm" });
          setRecordedChunks(blob);
        };

        newRecorder.start();
        setMediaRecorder(newRecorder);
      }

      setIsClicked(!isClicked);
    } catch (error) {
      console.error("Error switching camera:", error);
      openNotification("error", "Camera Error", "Failed to switch camera");
    }
  };

  const handleStopMedia = async () => {
    if (category === "video") {
      if (isRecording) {
        stopRecording();
      } else {
        startRecording();
      }
    } else if (category === "image") {
      takePicture();
    }
  };

  useEffect(() => {
    if (category === "video") {
      startRecording();
    } else if (category === "image") {
      startCamera();
    }

    return () => {
      stopCamera();
      if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
      }
    };
  }, []);

  const LoadingOverlay = () => (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur">
      <div className="flex flex-col items-center">
        <Image
          src="/logo.svg"
          alt="Loading"
          width={100}
          height={100}
          priority
        />
        <p className="text-white mt-4 text-lg">
          {isUploading ? "Uploading file to IPFS..." : "Sending transaction onchain..."}
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col mt-10 items-center gap-6">
      <Filename
        open={isUploadModalOpen}
        onClose={() => {
          setUploadModalOpen(false);
          stopCamera();
        }}
        onSubmit={handleFileNameSubmit}
      />
      
      <p className="text-white text-lg sm:text-xl">{text}</p>
      
      <div className="bg-gradient-to-r from-[#0094ff] to-[#A02294] w-full max-w-lg rounded-xl md:mb-5">
        <div
          className="w-full h-full flex flex-col justify-center items-center rounded-xl p-6 sm:p-10"
          style={{
            backgroundColor: "#1e2f37",
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "contain",
          }}>
          <div id="vid-recorder" className="w-full">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              id="web-cam-container"
              className="rounded-xl mb-6 w-full"
            >
              Your browser doesn&apos;t support the video tag
            </video>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              className={`switch-camera-button ${isClicked ? 'clicked' : ''}`}
              onClick={switchCamera}
              disabled={!mediaStream || isUploading}
            >
              <Icons
                icon={icon3}
                text="Switch Camera"
                isFlipped={isClicked}
              />
            </button>

            <button 
              onClick={handleStopMedia}
              disabled={isUploading}
            >
              <Icons
                icon={isRecording ? stopIcon : icon1}
                text={isRecording ? "Stop Recording" : imgText}
              />
            </button>
          </div>
        </div>
      </div>

      {(loading || isUploading) && <LoadingOverlay />}

      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeSuccessModal}
        contentLabel="Success Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <SuccessScreen onClose={closeSuccessModal} />
      </Modal>

      <Modal
        isOpen={isErrorModalOpen}
        onRequestClose={closeErrorModal}
        contentLabel="Error Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <ErrorScreen onClose={closeErrorModal} message={errorMessage} />
      </Modal>
    </div>
  );
};

export default Recording;