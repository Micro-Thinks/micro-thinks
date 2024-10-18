"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Sidebar = ({ navbar = [], closeSidebar, scrollToSection }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);

  return (
    <motion.div
      ref={sidebarRef}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed inset-0 h-3/4 w-3/4 top-32 bg-[#1F2456] z-50 flex flex-col space-y-6 text-white p-8"
    >
      <div className="flex justify-end">
        <button onClick={closeSidebar} className="text-2xl">
          ✕
        </button>
      </div>

      {Array.isArray(navbar) &&
        navbar.map((nav, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(nav.sectionId)}
            className="text-md hover:text-[#F89522] ease-in-out duration-300"
          >
            {nav.name}
          </button>
        ))}
      <button onClick={() => scrollToSection("contact-form")} className="bg-[#F89522] px-4 py-2 rounded-3xl text-white w-full">
        Get Started
        </button>
    </motion.div>
  );
};

export default Sidebar;