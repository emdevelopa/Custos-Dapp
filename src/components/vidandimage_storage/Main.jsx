import SideBar from '@/components/vidandimage_storage/SideBar';
import React from 'react';
import Header from '@/components/vidandimage_storage/Header';
import UploadOrRecord from '@/components/vidandimage_storage/UploadOrRecord';
import BackNavigation from './BackNavigation';

const Main = () => {
  return (
    <div
      className="flex flex-col lg:flex-row h-auto lg:h-screen text-white font-sans bg-inherit"
      style={{
        backgroundImage: 'url(/path-to-your-background.jpg)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex flex-col w-full lg:w-3/4 h-auto lg:h-screen bg-opacity-70 text-white px-4 sm:px-6 lg:px-8 py-4 lg:py-0">
        <Header />
        <div className="mt-4">
          <BackNavigation />
          <div className="mt-6">
            <UploadOrRecord />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
