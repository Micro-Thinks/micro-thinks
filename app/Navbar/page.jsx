"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/page';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const navbar = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about-us" },
    { name: "Services", sectionId: "services" },
    { name: "Contact", sectionId: "contact" },
    { name: "OTA Platforms", sectionId: "OTA" },
  ];

  


const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if(section) {
    section.scrollIntoView({behavior:"smooth"})
  }
  setIsSidebarOpen(false)

}
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); 

  return (
    <div className="fixed top-0 w-full bg-white z-50 flex items-center  justify-between p-6 border-b-[2] border-b-gray-600 shadow-lg">
      {/* Logo Section */}
      <div className="logo cursor-pointer"
      >
        <Image
          
          onClick={()=> scrollToSection("home")}
          src="/microthinks-logo.webp"
          alt="microthinks-logo"
          width={100}
          height={100}
        />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex font-semibold text-md space-x-10">
      {navbar.map((nav, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(nav.sectionId)} 
            className="text-md hover:text-[#F89522] ease-in-out duration-300"
          >
            {nav.name}
          </button>
        ))}
      </div>

      <div className='hidden md:block bg-[#F89522] px-3 py-2 rounded-3xl'>
        <button>
          Get Started
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={toggleSidebar}>
          ☰ 
        </button>
      </div>

      {isSidebarOpen && (
        <Sidebar navbar={navbar} closeSidebar={() => setIsSidebarOpen(false)} scrollToSection={scrollToSection} />
      )}
    </div>
  );
};

export default Navbar;
