"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBell } from "react-icons/fa";
import Section from "./macbookScroll"; // Section component with animations
// import "./stimport { TextFade } from "./textFade";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import FAQAccordion from "./faq";
import TestimonialSlider, { InfiniteMovingCardsDemo } from "./testimonial";

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
      <Section id="agreement-doc" headerText="CREATE AGREEMENTS">
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
          <div className="w-full  p-4">
            <a href="/agreement">
              <Image
                src="/macbook_screen.svg"
                alt="Card Image"
                width={100}
                height={800}
                className="w-full h-full fade-in-image"
              />
            </a>
          </div>
        </div>
      </Section>

      {/* Section 2: Launch Dapps */}
      {/* <Section id="launch-dapps" headerText="Launch Dapps">
        <div className="flex justify-center items-center mb-12">
          {showLaunchDapps && (
            <ShowLaunchDapps closeModal={toggleLaunchDapps} />
          )}
          <div
            className="w-fit backdrop-blur-[10px] border-gradient2 cursor-pointer p-[2px] rounded-[100px] max-md-[400px]:w-[80%] "
            onClick={toggleLaunchDapps}
          >
            <a href="/agreement">
            <div className=" text-white  max-md-[400px]:py-[20px]  py-2 px-4 rounded-[100px] hover:bg-gradient-to-r from-[#19B1D2] to-[#0094FF] transition-colors duration-300 ease-in-out max-md-[400px]:w-full  max-md-[400px]:bg-gradient-to-bl max-md-[400px]:from-[#0094FF] max-md-[400px]:to-[#19B1D2]">
              <p className="text-center m-auto text-lg max-md-[400px]:text-[24px]  flex   items-center w-fit">
                {" "}
                Launch Dapp <FaLongArrowAltRight className="ml-1" />
              </p>
            </div>
            <button className="relative max-w-sm br text-white p-3 shadow-lg transform hover:scale-105 transition-transform duration-300 border-gradient bg-opacity-50 mb-5 backdrop-filter backdrop-blur-lg flex items-center justify-center overflow-clip">

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
          </button>
            </a>
          </div>
        </div>
      </Section> */}

      {/* Section 3: Paid Gas Fee */}
      {/* <Section id="paid-gas-fee">
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

            <button className="relative max-w-sm br text-white p-3 shadow-lg transform hover:scale-105 transition-transform duration-300 border-gradient bg-opacity-50 mb-5 backdrop-filter backdrop-blur-lg flex items-center justify-center overflow-clip">

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
          </button>
          </div>
        </div>
      </Section> */}

      {/* Section 4: Crime Recorder */}
      <Section id="crime-recorder" headerText="CRIME RECORDER">
        <div className="text-center p-8 bg-transparent rounded shadow-lg text-white">
          <p className="text-[1em] mb-4 max-w-md mx-auto">
            The Crime Recording App transforms the way individuals contribute to
            societal safety by providing an advanced platform for documenting
            and sharing crime events securely and transparently.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full p-4">
            <a href="/crimerecorder">
              <Image
                src="/mackbook_crimerecorder.svg"
                alt="Crime Recorder Image"
                width={1000}
                height={800}
                className="w-full h-full fade-in-image"
              />
            </a>
          </div>
        </div>
      </Section>

      <Section id="ai-lawyer" headerText="AI LAWYER">
        <div className="flex justify-center">
          <div
            // onClick={() => toggleLaunchDapps()}
            className="flex items-center w-fit h-fit bg-[#2749629b] py-2 px-4 rounded-full cursor-pointer z-20
             transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg hover:bg-[#274962d0] group"
          >
            <div className="sh"></div>
            <span
              className="flex items-center text-white transition-transform duration-300 ease-out 
               group-hover:translate-x-1 group-hover:scale-105"
            >
              Coming Soon
            </span>
          </div>
        </div>
        <div className="text-center p-8 bg-transparent rounded shadow-lg text-white">
          <p className="text-[1em] mb-4 max-w-md mx-auto">
            An AI lawyer in your pocket. Draft agreements from scratch,
            summarize long legal docs, and catch hidden loopholes before they
            catch you.
          </p>
          <div className="flex justify-center mb-4">
            <HoverBorderGradient
              containerClassName="rounded-full group"
              as="button"
              className="dark:bg-black bg-[#0495F8] px-8 py-3 text-[white] dark:text-white flex items-center space-x-2 
                       transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
            >
              <span>Notify Me</span>
              <FaBell className="ml-1 rotate-[-35deg] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:rotate-0" />
            </HoverBorderGradient>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <video
              // controls
              autoPlay={true}
              loop={true}
              muted={true}
              className="w-full rounded-lg shadow-lg"
            >
              <source src="./ai-lawyer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Section>

      <Section id="faqs" headerText="FAQS">
        <div className="text-center p-8 bg-transparent rounded shadow-lg text-white">
          <p className="text-[1em] mb-4 max-w-md mx-auto">
            See frequently asked questions.
          </p>
        </div>
        <FAQAccordion />
        {/* <div className="flex justify-center items-center">
           
        </div> */}
      </Section>
      {/* <div> */}
      <InfiniteMovingCardsDemo />
      {/* <TestimonialSlider /> */}
      {/* </d>/ */}

      {/* Section 5: Shape Component */}
      {/* <Section id="elipse" headerText="">
        <div className="w-full">
          <Shape />
        </div>
      </Section> */}

      {/* Section 6: Our Pledge */}
      {/* <Section id="our-pledge" headerText="Our Pledge">
        <div className="text-center p-8 bg-transparent rounded shadow-lg text-white">
          <p className="text-[1em] mb-4 max-w-md mx-auto">
            We are dedicated to revolutionizing safety and security through
            innovative protocol platforms. Our mission is to provide solutions
            that empower individuals and communities to effectively address
            crime scene witnessing and streamline agreement systems.
          </p>
        </div>
      </Section> */}

      {/* Section 7: Connect Wallet */}
      {/* <Section>
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
      </Section> */}
    </main>
  );
};

export default Agree;
