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
                    <div className="collapse-content bg-[#ffffff0a] p-4">
                      {/* Launch Dapps Content */}
                      <div className="space-y-4">
                        <a href="/agreement" className="block p-4 rounded-lg bg-[#ffffff0a] hover:bg-[#015A9B] transition-colors duration-200">
                          <p className="flex items-center text-xl font-semibold text-white">
                            <FaPlus className="mr-2" />
                            Create Agreement
                          </p>
                          <p className="text-gray-300 text-sm mt-2 ml-7">
                            Custos ensures that agreements are securely stored.
                          </p>
                        </a>
                        <a href="/crimerecorder" className="block p-4 rounded-lg bg-[#ffffff0a] hover:bg-[#015A9B] transition-colors duration-200">
                          <p className="flex items-center text-xl font-semibold text-white">
                            <FaVideo className="mr-2" />
                            Record Video
                          </p>
                          <p className="text-gray-300 text-sm mt-2 ml-7">
                            Custos ensures that evidence is securely stored.
                          </p>
                        </a>
                      </div>
                    </div>
                  </li>

                  {/* Company Section */}
                  <li className="collapse bg-[#00000098] rounded-lg overflow-hidden">
                    <input type="radio" name="my-accordion-2" className="w-full" />
                    <div className="collapse-title text-xl font-medium text-white p-4">
                      Company
                    </div>
                    <div className="collapse-content bg-[#ffffff0a] p-4">
                      {/* Company Links */}
                      <div className="space-y-4">
                        <Link href="/about" className="block p-4 rounded-lg bg-[#ffffff0a] hover:bg-[#015A9B] transition-colors duration-200">
                          <div className="flex items-center gap-4">
                            <Image
                              src="/about.svg"
                              width={32}
                              height={32}
                              alt="about"
                              className="rounded-lg p-1"
                            />
                            <div>
                              <p className="text-white font-semibold">About Us</p>
                              <p className="text-gray-300 text-sm">Get to know the team behind Custos</p>
                            </div>
                          </div>
                        </Link>

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