"use client";
import React, { useState } from "react";
import Uploads from "./components/Uploads";
import Image from "next/image";

const page = () => {
  const [selectedMedia, SetSelectedMedia] = useState("")
  return (
    <>
      {" "}
      {!selectedMedia && (
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h2 className="text-[#EAFBFF] text-[24px] md:text-[28px]">
            What media do you want to keep on-chain?
          </h2>
          <p className="">
            You can keep your pictures and images here. No molt or rust can
            touch it.
          </p>
          <div className="space-y-4 md:space-x-4 md:space-y-0 mt-8 flex flex-col md:flex-row">
            {/* Card 1: AI Lawyer */}
            <div
              onClick={() => handleAgreementSelection("C")}
              className="cursor-pointer"
            >
              <div
                className="w-full md:w-[268px] h-[360px] bg-[radial-gradient(13.75%_27.94%_at_50%_50%,_rgba(39,_73,_98,_0.1)_0%,_rgba(45,_72,_92,_0.2)_100%)] 
          rounded-[20px] flex flex-col items-center justify-center p-4 
          border-[2px] border-[transparent] 
          group transition-all duration-300 ease-in-out relative"
              >
                <div className="w-[80px] h-[80px] z-30 flex items-center justify-center">
                  {/* You can use an AI icon or a placeholder image */}
                  <Image
                    src="/picmedia.svg"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-t-[20px]"
                    alt="AI Lawyer"
                  />
                </div>
                <div className="flex z-20 flex-col justify-center items-center w-full h-[50%] rounded-b-[20px] p-4">
                  <p className="text-[#EAFBFF] text-[20px] font-[500] mb-2 mt-12 text-center">
                    I want to save pictures
                  </p>
                  <p className="text-[#EAFBFF] text-[14px] font-[400] text-center">
                    You can take your pictures or upload from your device
                  </p>
                </div>
                <div className="group-hover:bg-[radial-gradient(13.75%_27.94%_at_50%_50%,_rgba(39,_73,_98,_0.2)_0%,_rgba(45,_72,_92,_0.4)_100%)] w-full h-full absolute inset-0 rounded-[20px] transition-all duration-300 ease-in-out"></div>
              </div>
            </div>
            {/* Card 2: Template */}
            <div
              // onClick={() => handleAgreementSelection("A")}
              className="cursor-pointer"
            >
              <div
                className="w-full md:w-[268px] h-[360px] bg-[radial-gradient(13.75%_27.94%_at_50%_50%,_rgba(39,_73,_98,_0.1)_0%,_rgba(45,_72,_92,_0.2)_100%)] 
                  rounded-[20px] flex flex-col items-center justify-center p-4 
                  border-[2px] border-[transparent] 
                  group transition-all duration-300 ease-in-out relative"
              >
                <div className="w-[80px] h-[80px] z-30">
                  <Image
                    src="/vidmedia.svg"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-t-[20px]"
                  />
                </div>
                <div className="flex z-20 flex-col justify-center items-center w-full h-[50%]  rounded-b-[20px] p-4">
                  <p className="text-[#EAFBFF] text-[20px] font-[500] mb-2 mt-12">
                    I want to save videos
                  </p>
                  <p className="text-[#EAFBFF] text-[14px] font-[400]">
                    You can record a video or upload from your device.
                  </p>
                </div>
                <div className="group-hover:bg-[radial-gradient(13.75%_27.94%_at_50%_50%,_rgba(39,_73,_98,_0.2)_0%,_rgba(45,_72,_92,_0.4)_100%)] w-full h-full absolute inset-0 rounded-[20px] transition-all duration-300 ease-in-out"></div>
              </div>
            </div>

          
          </div>
        </div>
      )}

      {selectedMedia === "A" && <Record/> }
      {/* // <Uploads /> */}
    </>
  );
};

export default page;
