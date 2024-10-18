"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const togglevisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", togglevisibility);
    return () => window.removeEventListener("scroll", togglevisibility);
  }, []);
  return (
    <div
      className={` fixed lg:bottom-10 lg:right-10 bottom-4 right-4  z-50 ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } duration-300 ease-in-out `}
    >
      {visible && (
        <Link href="https://wa.me/+923316361916" target="_blank">
          <FaWhatsapp
            className=" h-12 w-12 lg:h-16 lg:w-16 "
            color="#25D366"
            height={100}
            width={100}
          />
        </Link>
      )}
    </div>
  );
};

export default WhatsAppButton;
