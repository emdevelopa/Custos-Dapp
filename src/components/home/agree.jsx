"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaLongArrowAltRight, FaPlus, FaVideo } from "react-icons/fa";
import Section from "./macbookScroll"; // Section component with animations
import ConnectButtoncomponent from "../connect";
import Shape from "./eclipse";
import Footer from "../footer";
// import "./stimport { TextFade } from "./textFade";
import FadeInSection from "../fadeInSection";
// const printAgreement = (agreement) => {
//   const printContent = `
//     <h1>${agreement.title}</h1>
//     <p>Second Party Address: ${agreement.secondPartyAddress}</p>
//     <p>Created by  : ${agreement.creatorName}</p>
//     <p>${agreement.content}</p>
//   `;
//   const printWindow = window.open('', '', 'width=800,height=600');
//   printWindow.document.write(printContent);
//   printWindow.document.close();
//   printWindow.print();
// };

const Agree = () => {
  const [showLaunchDapps, setShowLaunchDapps] = useState(false);

  const toggleLaunchDapps = () => {
    setShowLaunchDapps(!showLaunchDapps);
  };
  const closeModal = () => {
    setShowLaunchDapps(false);
  };

  return (
    <main className="mt-20 space-y-32">
      {/* Section 1: Agreement Documentation */}
      <Section id="agreement-doc" headerText="Agreement Documentation">
        <div className="text-center p-8 bg-transparent rounded shadow-lg text-white">
          <p className="text-[1em] mb-4 max-w-md mx-auto">
            Create new legal agreements by providing the agreement content, the
            address of the second party, and details about the first party.
          </p>
          {/* <TextFade
            direction="up"
            className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
          >
            <p className="text-[1em] mb-4">
              Create new legal agreements by providing the agreement content,
              the <br />
              address of the second party, and details about the first party.
            </p>
          </TextFade> */}
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl p-4">
            <a href="/agreement">
              <Image
                src="/hero.png"
                alt="Card Image"
                width={1000}
                height={800}
                className="w-full h-auto fade-in-image"
              />
            </a>
          </div>
        </div>
      </Section>

      {/* Section 2: Launch Dapps */}
      <Section id="launch-dapps" headerText="Launch Dapps">
        <div className="flex justify-center items-center mb-12">
          {showLaunchDapps && (
            <div className="sm:fixed absolute inset-0 z-50 flex items-center justify-center w-full bg-[#00000098] bg-opacity-90 ">
              <div className="relative bg-[#091219] rounded-lg shadow-lg border-gradient md:w-[50%] w-full sm:flex md:flex-row h-full md:h-auto ">
                <button
                  onClick={closeModal}
                  className="absolute top-0 right-0 flex items-center justify-center text-[3em] text-white w-12 h-12 rounded-full"
                  style={{ zIndex: 60 }}
                >
                  &times;
                </button>

                <div className=" flex p-6 flex-col justify-between bg-opacity-90 bg-[#091219] bg-[url('/Rectangle.png')] bg-cover bg-center bg-repeat">
                  <div>
                    <p className="text-3xl text-white">Launch Dapps</p>
                    <p className="mt-4 text-gray-300">
                      Decentralized apps help you leverage blockchain technology
                      to secure your evidence and legal agreements.
                    </p>
                  </div>
                  <Image
                    src="/group.png"
                    alt="group"
                    width={200}
                    height={100}
                    className="rounded-lg mt-8"
                  />
                </div>

                <div className="flex flex-col gap-4 sm:gap-4  m-auto w-full sm:p-0 p-4 rounded-lg md:h-auto bg-[#091219]">
                  <a
                    href="/agreement"
                    className="text-white mb-4 z-[100] w-full hover:bg-[#015A9B] sm:p-4 rounded-lg cursor-pointer"
                  >
                    <p className="flex items-center text-xl font-semibold">
                      <FaPlus className="mr-2" />
                      Create Agreement
                    </p>
                    <p className="text-gray-300 mt-1">
                      Custos ensures that agreements are securely stored.
                    </p>
                  </a>

                  <a
                    href="/crimerecorder"
                    className="text-white mb-4 z-[100] hover:bg-[#015A9B] sm:p-4 rounded-lg cursor-pointer"
                  >
                    <p className="flex items-center text-xl font-semibold text-white">
                      <FaVideo className="mr-2" />
                      Record Video
                    </p>
                    <p className="text-gray-300 mt-1">
                      Custos ensures that agreements are securely stored.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          )}
          <div
            className="w-fit backdrop-blur-[10px] border-gradient2 cursor-pointer p-[2px] rounded-[100px] max-md-[400px]:w-[80%] "
            onClick={toggleLaunchDapps}
          >
            {/* <a href="/agreement"> */}
            <div className=" text-white  max-md-[400px]:py-[20px]  py-2 px-4 rounded-[100px] hover:bg-gradient-to-r from-[#19B1D2] to-[#0094FF] transition-colors duration-300 ease-in-out max-md-[400px]:w-full  max-md-[400px]:bg-gradient-to-bl max-md-[400px]:from-[#0094FF] max-md-[400px]:to-[#19B1D2]">
              <p className="text-center m-auto text-lg max-md-[400px]:text-[24px]  flex   items-center w-fit">
                {" "}
                Launch Dapp <FaLongArrowAltRight className="ml-1" />
              </p>
            </div>
            {/* <button className="relative max-w-sm br text-white p-3 shadow-lg transform hover:scale-105 transition-transform duration-300 border-gradient bg-opacity-50 mb-5 backdrop-filter backdrop-blur-lg flex items-center justify-center overflow-clip">

            <span className="flex items-center">Launch Dapp</span>
            <svg
              className="ml-2 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </button> */}
            {/* </a> */}
          </div>
        </div>
      </Section>

      {/* Section 3: Paid Gas Fee */}
      <Section id="paid-gas-fee">
        <div className="w-full mt-[10%]  mx-auto flex justify-center transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-[80%]">
            <div className="text-[2em] whitespace-nowrap mb-2 sm:mb-0 bg-gradient-to-r from-[#0094FF] to-[#A02294] bg-clip-text text-transparent">
              <p>We paid the gas fee.</p>
            </div>
            <div className="w-fit text-[1em] hidden md:block text-left bg-gradient-to-r from-[#EAF9FF] to-[#8E9A9A] bg-clip-text text-transparent">
              <p>
                Custos lets you record your videos safely on the blockchain
                without paying a gas fee until you need your video back.
              </p>
              <br />
              <p>
                Whether It&apos;s a business contract, a rental agreement, or a
                partnership arrangement, Custos ensures that agreements are
                securely stored, easily accessible, and tamper-proof, fostering
                trust and accountability among parties.
              </p>
            </div>

            {/* <button className="relative max-w-sm br text-white p-3 shadow-lg transform hover:scale-105 transition-transform duration-300 border-gradient bg-opacity-50 mb-5 backdrop-filter backdrop-blur-lg flex items-center justify-center overflow-clip">

            <span className="flex items-center">Launch Dapp</span>
            <svg
              className="ml-2 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </button> */}
          </div>
        </div>
      </Section>

      {/* Section 4: Crime Recorder */}
      <Section id="crime-recorder" headerText="Crime Recorder">
        <div className="text-center p-8 bg-transparent rounded shadow-lg text-white">
          <p className="text-[1em] mb-4 max-w-md mx-auto">
            The Crime Recording App transforms the way individuals contribute to
            societal safety by providing an advanced platform for documenting
            and sharing crime events securely and transparently.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl p-4">
            <a href="/crimerecorder">
              <Image
                src="/crime-recorder.png"
                alt="Crime Recorder Image"
                width={1000}
                height={800}
                className="w-full h-auto fade-in-image"
              />
            </a>
          </div>
        </div>
      </Section>

      {/* Section 5: Shape Component */}
      <Section id="elipse" headerText="">
        <div className="w-full">
          <Shape />
        </div>
      </Section>

      {/* Section 6: Our Pledge */}
      <Section id="our-pledge" headerText="Our Pledge">
        <div className="text-center p-8 bg-transparent rounded shadow-lg text-white">
          <p className="text-[1em] mb-4 max-w-md mx-auto">
            We are dedicated to revolutionizing safety and security through
            innovative protocol platforms. Our mission is to provide solutions
            that empower individuals and communities to effectively address
            crime scene witnessing and streamline agreement systems.
          </p>
        </div>
      </Section>

      {/* Section 7: Connect Wallet */}
      <Section>
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#EAF9FF] to-[#8E9A9A] bg-clip-text text-transparent mb-[10rem]">
          <div className="text-center p-8 bg-transparent rounded shadow-lg mt-10">
            <p className="md:text-[50px] text-[30px] mb-2 bg-gradient-to-r from-[#0094FF] to-[#A02294] bg-clip-text text-transparent">
              Make better decisions
            </p>
            <p className="mb-4 max-w-[16rem] md:max-w-lg">
              We paid the price to keep your videos and legal agreements safe.{" "}
              <br /> Connect your wallet to get started.
            </p>
          </div>
          <ConnectButtoncomponent />
        </div>
      </Section>
    </main>
  );
};

export default Agree;
