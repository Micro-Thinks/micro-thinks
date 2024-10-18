"use client";
import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "../Sidebar/page";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navbar = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about-us" },
    { name: "OTA Platforms", sectionId: "OTA" },
    { name: "Services", sectionId: "services" },
    { name: "Contact", sectionId: "contact-form" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false);
  };
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="fixed top-0 w-full bg-white z-50 flex items-center p-6 justify-between  border-b-[2] border-b-gray-600 shadow-lg">
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="text-2xl">
          ☰
        </button>
      </div>
      {/* Logo Section */}
      {/*Logo for dsektop  */}
      <div className="logo cursor-pointer hidden md:block">
        <Image
          onClick={() => scrollToSection("home")}
          src="/images/microthinks-logo.webp"
          alt="microthinks-logo"
          width={100}
          height={100}
        />
      </div>
      {/* Logo for mobile */}
      <div className="logo cursor-pointer block lg:hidden absolute left-32">
        <Image
          onClick={() => scrollToSection("home")}
          src="/images/microthinks-logo.webp"
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

      <div className="hidden md:block bg-[#F89522]  px-3 py-2 rounded-3xl">
        <button onClick={() => scrollToSection("contact-form")}>Get Started</button>
      </div>

      {isSidebarOpen && (
        <Sidebar
          navbar={navbar}
          closeSidebar={() => setIsSidebarOpen(false)}
          scrollToSection={scrollToSection}
        />
      )}
    </div>
  );
};

export default Navbar;
