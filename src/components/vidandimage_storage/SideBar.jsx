import React from 'react';
import { FileText, Video, Image as ImageIcon, Settings } from 'lucide-react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import SolarIcon from '../../../public/solar_minimize-square-minimalistic-linear.png'

const SideBar = () => {
  return (
    <div className="h-screen w-[230px] hidden lg:block w-1/4 bg-black text-white flex flex-col p-4">
      {/* Header */}
      <div className="flex items-center justify-between w-full p-4 gap-6 mb-8">
        <Image src = {logo} alt = "" width = {135} height = {55}/>
        <Image src={SolarIcon} alt = "" width = {55} height = {35}/>
      </div>

      {/* Menu Items */}
      <nav className="mt-4 flex flex-col gap-2 space-y-8 px-4">

        <a
          href="#"
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <FileText className="w-5 h-5 mr-3" />
          Agreement
        </a>

        <a
          href="#"
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <Video className="w-5 h-5 mr-3" />
          Videos
        </a>

        <a
          href="#"
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ImageIcon className="w-5 h-5 mr-3" />
          Images
        </a>

        <a
          href="#"
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </a>
      </nav>
    </div>
  );
};

export default SideBar;
