"use client";

import React, { useContext, useEffect, useState } from "react";
import { UseReadContractData } from "../../../utils/fetchcontract";
import NoRecordScreen from "./NoRecordScreen";
import { WalletContext } from "../../../components/walletprovider";
import Image from "next/image";
import { ClipboardIcon } from "@heroicons/react/outline";
import { useNotification } from "../../../context/NotificationProvider";

const Uploads = () => {
  const { address, wallet } = useContext(WalletContext);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileData, setFileData] = useState([]);
  const [loading, setLoading] = useState(false);
  const PINATA_JWT = process.env.NEXT_PUBLIC_IPFS_KEY; // Renamed for clarity

  const { openNotification } = useNotification();
  const { fetchData } = UseReadContractData();

  const Retrieve = async () => {
    if (!address) return;
    setLoading(true);
    try {
      console.log("Fetching uploads for account:", address);
      const result = await fetchData("crime", "get_all_user_uploads", [address]);
      console.log("Raw result from contract:", result);

      // Properly handle array or object response from smart contract
      let files = [];
      if (Array.isArray(result)) {
        files = result.map((item) => ({
          id: item.toString(),
          timestamp: Date.now(),
        }));
      } else if (result && typeof result === "object") {
        files = Object.values(result).map((item) => ({
          id: item.toString(),
          timestamp: Date.now(),
        }));
      }

      console.log("Processed files:", files);
      setUploadedFiles(files);
    } catch (error) {
      console.error("Error in Retrieve:", error);
      openNotification("error", "", "Error fetching uploaded files");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (address) Retrieve();
  }, [address]);

  useEffect(() => {
    const userUploads = async () => {
      if (!uploadedFiles.length) return;
      setLoading(true);
      try {
        // First get URIs from blockchain
        const blockchainUris = await Promise.all(
          uploadedFiles.map(async (file) => {
            try {
              const uploadUri = await fetchData("crime", "get_token_uri", [file.id]);
              console.log(`URI for file ${file.id}:`, uploadUri);
              return { id: file.id, uri: uploadUri };
            } catch (error) {
              console.error(`Error fetching URI for file ${file.id}:`, error);
              return null;
            }
          })
        );

        // Filter out any failed URI fetches
        const validUris = blockchainUris.filter(Boolean);
        
        // Then fetch metadata from Pinata
        const response = await fetch("https://api.pinata.cloud/data/pinList", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${PINATA_JWT}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Pinata API error: ${response.status}`);
        }

        const metadata = await response.json();
        console.log("Pinata metadata received:", metadata);

        // Match blockchain URIs with Pinata metadata
        const matchedFiles = validUris
          .map(({ id, uri }) => {
            const pinataFile = metadata.rows.find(
              (file) => file.ipfs_pin_hash === uri
            );
            if (pinataFile) {
              return {
                id,
                uri,
                filename: pinataFile.metadata?.name || "Unnamed File",
                timestamp: new Date(pinataFile.date_pinned).getTime(),
              };
            }
            return null;
          })
          .filter(Boolean);

        console.log("Final matched files:", matchedFiles);
        setFileData(matchedFiles);
      } catch (error) {
        console.error("Error in userUploads:", error);
        openNotification("error", "", "Error fetching file metadata");
      } finally {
        setLoading(false);
      }
    };

    userUploads();
  }, [uploadedFiles]);

  // Rest of your component remains the same
  const isImageFile = (fileName) => /\.(jpg|jpeg|png|gif|bmp)$/i.test(fileName);
  const isVideoFile = (fileName) => /\.(mp4|webm|ogg|mov)$/i.test(fileName);

  const saveToDevice = (blob, fileName) => {
    const uniqueFileName = `${fileName}`;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = uniqueFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return (
      date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }) +
      ", " +
      date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
    );
  };

  const handleDownload = async (file) => {
    try {
      const response = await fetch(
        `https://gateway.pinata.cloud/ipfs/${file.uri}`
      );
      if (!response.ok) throw new Error('Download failed');
      const blob = await response.blob();
      saveToDevice(blob, file.filename);
    } catch (error) {
      console.error("Download error:", error);
      openNotification("error", "", "Error downloading the file");
    }
  };

  const handleShare = async (file) => {
    const fileLink = `https://gateway.pinata.cloud/ipfs/${file.uri}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: file.filename,
          text: `Check out this file: ${file.filename}`,
          url: fileLink,
        });
      } catch (error) {
        console.error("Sharing error:", error);
        openNotification("error", "", "Error sharing the file");
      }
    } else {
      try {
        await navigator.clipboard.writeText(fileLink);
        openNotification("success", "", "Link copied to clipboard!");
      } catch (error) {
        console.error("Clipboard error:", error);
        openNotification("error", "", "Error copying link to clipboard");
      }
    }
  };

  return (
    <div className="min-h-screen relative">
      {loading && (
        <div className="fixed inset-0 z-30 bg-gradient-to-r bg-opacity-70 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Image src="/logo.svg" alt="Loading" width={100} height={100} />
            <p className="text-white mt-4 text-lg">
              Loading your files, please wait...
            </p>
          </div>
          <style jsx>{`
            div {
              backdrop-filter: blur(10px);
            }
          `}</style>
        </div>
      )}

      <div className="p-2">
        {!fileData.length ? (
          <NoRecordScreen />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
            {fileData.map((file, index) => (
              <div
                key={index}
                className="relative text-sm whitespace-nowrap mb-2 sm:mb-0 bg-transparent rounded-lg backdrop-blur-lg p-10 shadow-lg"
              >
                {isImageFile(file.filename) ? (
                  <img
                    src={`https://gateway.pinata.cloud/ipfs/${file.uri}`}
                    alt={file.filename}
                    className="w-full h-auto rounded"
                  />
                ) : isVideoFile(file.filename) ? (
                  <video
                    src={`https://gateway.pinata.cloud/ipfs/${file.uri}`}
                    className="w-full h-auto rounded"
                    
                  />
                ) : (
                  <p className="text-red-500">Unsupported file type</p>
                )}

                <p className="text-[#0094FF] mt-4">{file.filename}</p>
                <p className="text-sm flex mt-4">
                  <span className="text-[#EAFBFF]">Time Stamp: </span>
                  <span className="text-[#19B1D2] ml-1">
                    {formatDate(file.timestamp)}
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-5 gap-4">
                  <div className="p-[2px] rounded-[100px] bg-gradient-to-r from-[#19B1D2] to-[#A02294]">
                    <button
                      className="flex items-center justify-center w-[200px] h-[48px] bg-[#030303] text-white text-sm py-3 px-6 rounded-[100px] transition-colors duration-300 ease-in-out"
                      onClick={() => handleShare(file)}
                    >
                      <ClipboardIcon className="w-4 h-4 mr-2" />
                      <span>Share</span>
                    </button>
                  </div>

                  <div className="p-[2px] rounded-[100px] bg-gradient-to-r from-[#19B1D2] to-[#A02294]">
                    <button
                      className="flex items-center justify-center w-[200px] h-[48px] bg-[#209af1] text-white text-sm py-3 px-6 rounded-[100px] transition-colors duration-300 ease-in-out"
                      onClick={() => handleDownload(file)}
                    >
                      {isVideoFile(file.filename)
                        ? "Download Video"
                        : "Download Image"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Uploads;