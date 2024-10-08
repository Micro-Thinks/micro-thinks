"use client";
import { motion } from 'framer-motion'; 
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const Sidebar = ({ navbar, closeSidebar }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeSidebar]);

  return (
    <motion.div
    ref={sidebarRef}
      initial={{ x: '-100%' }}  // Start from the left (off-screen)
      animate={{ x: 0 }}        // Animate to 0 (rest at the left side)
      exit={{ x: '-100%' }}      // Exit animation to the left
      transition={{ type: 'tween', duration: 0.5 }}
      className="fixed inset-0 h-full w-3/4 bg-[#1F2456] z-50 flex flex-col space-y-6 text-white p-8"
    >
      <div className="flex justify-end">
        <button onClick={closeSidebar} className="text-2xl">
          ✕ {/* Close Icon */}
        </button>
      </div>
      {navbar.map((nav, index) => (
        <Link key={index} href={nav.path}>
          <p onClick={closeSidebar} className="text-xl font-semibold">
            {nav.name}
          </p>
        </Link>
      ))}
      <button className="bg-[#F89522] px-4 py-2 rounded-3xl text-white w-full">
        Get Started
      </button>
    </motion.div>
  );
};

export default Sidebar;
