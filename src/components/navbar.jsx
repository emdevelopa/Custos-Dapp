"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronDown,
  FaArrowRight,
  FaPlus,
  FaVideo,
} from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ConnectButtoncomponent from "./connect";

const Navbar = () => {
  const [showLaunchDapps, setShowLaunchDapps] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLaunchDapps = () => {
    setShowLaunchDapps(!showLaunchDapps);
  };

  const toggleCompany = () => {
    setShowCompany(!showCompany);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeModal = () => {
    setShowLaunchDapps(false);
    setShowCompany(false);
  };

  return (
    <>
      {/* CSS Reset and Cross-browser styles */}
      <style jsx global>{`
        /* CSS Reset */
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Cross-browser button reset */
        button {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          border: none;
          background: transparent;
          cursor: pointer;
          font-family: inherit;
        }

        /* Cross-browser image rendering */
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        /* Fix for Safari mobile modal */
        .modal-overlay {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }

        /* Ensure consistent link styling */
        a {
          text-decoration: none;
          color: inherit;
          -webkit-tap-highlight-color: transparent;
        }

        /* Consistent backdrop blur across browsers */
        .backdrop-blur {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        /* Fix for Firefox backdrop opacity */
        @-moz-document url-prefix() {
          .bg-opacity-90 {
            background-color: rgba(0, 0, 0, 0.95);
          }
        }
      `}</style>

      <nav className="py-4 z-50 backdrop-blur fixed top-0 w-full bg-[#84c2f513] shadow-md">
        <div className="w-full mx-auto px-4">
          <div className="flex justify-around items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={250}
                  height={50}
                  className="rounded-lg"
                  priority
                />
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center">
              <ul className="flex gap-12 items-center">
                <li>
                  <button
                    onClick={toggleLaunchDapps}
                    className="text-white hover:text-[#c92eff] flex items-center transition-colors duration-200"
                  >
                    Launch Dapps
                    <FaChevronDown className="w-5 h-5 ml-1" />
                  </button>
                </li>

                <li>
                  <button
                    onClick={toggleCompany}
                    className="text-white hover:text-[#c92eff] transition-colors duration-200"
                  >
                    Company
                  </button>
                </li>
              </ul>
            </div>

            <div className="flex items-center space-x-4">
              <div className="lg:hidden">
                <button 
                  onClick={toggleMenu}
                  className="p-2 hover:bg-[#ffffff1a] rounded-lg transition-colors duration-200"
                >
                  {isMenuOpen ? (
                    <AiOutlineClose className="text-white w-6 h-6" />
                  ) : (
                    <AiOutlineMenu className="text-white w-6 h-6" />
                  )}
                </button>
              </div>
              <div className="hidden lg:block">
                <ConnectButtoncomponent />
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-[#000000ee] p-4 mt-4 rounded-lg modal-overlay">
              <div className="flex items-center justify-center mb-8">
                <ul className="flex flex-col space-y-4 w-full">
                  <li className="collapse bg-[#00000098] rounded-lg overflow-hidden">
                    <input type="radio" name="my-accordion-2" defaultChecked className="w-full" />
                    <div className="collapse-title text-xl font-medium text-white p-4">
                      Launch Dapps
                    </div>
                    <div className="collapse-content">
                      <div className="inset-0 z-50 flex items-center justify-center bg-[#00000098] bg-opacity-90 ">
                        <div className="relative rounded-lg shadow-lg w-full sm:flex md:flex-row h-full md:h-auto ">
                          <div className="flex p-3 flex-col justify-between bg-opacity-90">
                            <div>
                              <p className="mt-4 text-gray-300">
                                Decentralized apps help you leverage blockchain
                                technology to secure your evidence and legal
                                agreements.
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:gap-4  m-auto w-full sm:p-0 p-3 rounded-lg md:h-auto ">
                            <a
                              href="/agreement"
                              className="text-white mb-4 z-[100] w-full hover:bg-[#015A9B] p-3 rounded-lg cursor-pointer "
                            >
                              <p className="flex items-center text-xl font-semibold">
                                <FaPlus className="mr-2" />
                                Create Agreement
                              </p>
                              <p className="text-gray-300 text-sm mt-1 ml-7">
                                Custos ensures that agreements are securely
                                stored.
                              </p>
                            </a>
                            <a
                              href="/crimerecorder"
                              className="text-white mb-4 z-[100] hover:bg-[#015A9B] p-3 rounded-lg cursor-pointer "
                            >
                              <p className="flex items-center text-xl font-semibold text-white">
                                <FaVideo className="mr-2" />
                                Record Video
                              </p>
                              <p className="text-gray-300 text-sm mt-1 ml-7">
                                Custos ensures that agreements are securely
                                stored.
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Company Section */}
                  <li className="collapse bg-[#00000098] rounded-lg overflow-hidden">
                    <input type="radio" name="my-accordion-2" className="w-full" />
                    <div className="collapse-title text-xl font-medium text-white p-4">
                      Company
                    </div>
                    <div className="collapse-content">
                      <div className="inset-0 z-50 flex items-center justify-center bg-[#00000098] bg-opacity-90 ">
                        <div className="relative rounded-lg shadow-lg w-full sm:flex md:flex-row h-full md:h-auto ">  
                          <div className="flex p-3 flex-col justify-between bg-opacity-90">
                            <div>
                              <p className="text-2xl text-white">
                                Invulnerable
                              </p>
                              <p className="my-4 text-gray-300">
                                Custos Diretriz is mastering the art of
                                preservation and shielding on the blockchain.
                              </p>
                              <Link
                                href="https://t.me/+x1zr5LaAMbdjZWZk"
                                className="mt-4 z-[100] hover:bg-[#015A9B] flex items-center text-[#00bfff]"
                              >
                                Join the Community
                                <FaArrowRight className="ml-1" />
                              </Link>
                              <Link
                                href="https://t.me/+x1zr5LaAMbdjZWZk"
                                className="mt-2 z-[100] hover:bg-[#015A9B] flex items-center text-[#00bfff]"
                              >
                                Learn More About Custos
                                <FaArrowRight className="ml-1" />
                              </Link>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:gap-4 m-auto w-full p-0 rounded-lg md:h-auto]">
                            <Link
                              href="/about"
                              className="text-white z-[100] hover:bg-[#015A9B] rounded-lg w-full items-center p-2 bg-base-200"
                            >
                              <p className="flex sm:text-xl gap-4 sm:gap-6 h-full font-semibold text-white ">
                                <Image
                                  src="/about.svg"
                                  width={32}
                                  height={32}
                                  alt="about"
                                
                                  className="rounded-lg h-fit p-1 w-[2em]"
                            
                                />
                                <p className="flex flex-col ">
                                  About Us
                                  <p className="text-gray-300 text-[0.8em] mt-1 font-thin">
                                    Get to know the team behind Custos
                                  </p>
                                </p>
                              </p>
                            </Link>
                            <Link
                              href="#"
                              className="text-white z-[100] hover:bg-[#015A9B] rounded-lg w-full items-center p-2 bg-base-200"
                            >
                              <p className="flex sm:text-xl gap-4 sm:gap-6 h-full font-semibold text-white ">
                                <Image
                                  src="/careers.svg"
                                  alt="careers"
                                  width={50}
                                  height={50}
                                  className="rounded-lg h-fit w-[2em]"
                              
                                />
                                <p className="flex flex-col ">
                                  Careers
                                  <p className="text-gray-300 text-[0.8em] mt-1 font-thin">
                                    Find your dream role
                                  </p>
                                </p>
                              </p>
                            </Link>
                            <Link
                              href="#"
                              className="text-white z-[100] hover:bg-[#015A9B] rounded-lg w-full items-center p-2"
                            >
                              <p className="flex sm:text-xl gap-4 sm:gap-6 h-full font-semibold text-white ">
                                <Image
                                  src="/call.svg"
                                  alt="call"
                                  width={50}
                                  height={50}
                                  className="rounded-lg h-fit w-[2em]"
                                
                                />
                                <p className="flex flex-col ">
                                  Contact Us
                                  <p className="text-gray-300 text-[0.8em] mt-1 font-thin">
                                    Reach out to us for questions and
                                    clarifications
                                  </p>
                                </p>
                              </p>
                            </Link>
                          </div>
                        </div>

                        {/* Other company links... */}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-fit mx-auto">
                <ConnectButtoncomponent />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modals */}
      {showLaunchDapps && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 modal-overlay">
          <div className="bg-[#091219] rounded-lg shadow-lg border-gradient w-full max-w-4xl">
            {/* Modal content */}
          </div>
        </div>
      )}

      {showCompany && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 modal-overlay">
          <div className="bg-[#091219] rounded-lg shadow-lg border-gradient w-full max-w-4xl">
            {/* Modal content */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;