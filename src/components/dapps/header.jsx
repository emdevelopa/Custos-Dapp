import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import ConnectButtoncomponent from "@/components/connect";
import Button from "@/components/Button";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className=" flex  backdrop-filter backdrop-blur-[10px] w-full bg-[#ffffff0a] ">
      {/* Navbar Top Section */}
      <div className="flex items-center justify-between w-fit m-auto ">
        {/* Search Input with Icon */}
        <div className="relative w-fit justify-end align-middle items-end m-auto ">
          <input
            type="search"
            placeholder="Search"
            className="w-full pl-10  py-4 bg-[#3A3A3A] border rounded-[2em] focus:outline-none 
                       text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #EAF9FF, #8E9A9A)",
              WebkitBackgroundClip: "text",
              color: "contain",
            }}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Image src="/search-normal.svg" alt="Search" width={20} height={20} />
          </div>
        </div>

        {/* Dark Mode Toggle */}
        {/* <div className="flex items-baseline gap-4">
          <div onClick={toggleDarkMode} className="cursor-pointer">
            {darkMode ? (
              <Image src="/lightmode.svg" alt="Light Mode" width={30} height={20} />
            ) : (
              <Image src="/darkmodeicon.svg" alt="Dark Mode" width={30} height={20} />
            )}
          </div>

          
          <div className="cursor-pointer">
            <Image src="/bell.svg" alt="Notifications" width={30} height={20} />
          </div>
        </div> */}



      </div>

      {/* Navbar Bottom Section */}
      <div className="w-fit align-baseline items-baseline mr-3 flex pt-3 justify-end ">
        

        {/* Connect Wallet Button */}
        <ConnectButtoncomponent />
      </div>
    </div>
  );
};

export default Header;
