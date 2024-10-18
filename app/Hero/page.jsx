"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileView from "./MobileView";
import Link from "next/link";

const Hero = ({slidetoContactForm}) => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      
      imgSrc: "/images/Home.webp",
      title: (
        <>
          <span className="text-[#1F2456] font-extrabold">Your Brand, </span>
          <span className="text-[#808EAB]">Our Strategy, </span> <br />
          <span className="text-[#F89522] font-extrabold  block">
            Ultimate Growth
          </span>
        </>
      ),
      description:
        "At our hospitality marketing company, we believe that the journey to ultimate success begins with a strong collaboration. Your hotel’s unique identity and vision are at the forefront of our strategic approach.",
    },
    {
      imgSrc: "/images/googleads.webp",
      title: (
        <>
          <span className="text-[#1F2456] font-extrabold">Google Ads </span>
          <span className="text-[#F89522]">Management</span>
        </>
      ),
      description:
        "We specialize in managing Google Ads campaigns for hotels, driving targeted traffic and increasing direct bookings. Our tailored strategies maximize ROI and enhance visibility across search and display networks.",
    },
    {
      imgSrc: "/images/OTA.webp",
      title: (
        <>
          <span className="text-[#1F2456] font-extrabold">OTA Listing </span>
          <span className="text-[#F89522]">Management</span>
        </>
      ),
      description: `"Maximize your hotel’s engagement and booking with our expert Google ads management services. Let us help you drive maximum traffic to your website through our unique Google Ads strategy"`,
    },
    {
      imgSrc: "/images/webdesign.webp",
      title: (
        <>
          <span className="text-[#1F2456] font-extrabold">Custom Web </span>
          <span className="text-[#F89522]">Design</span>
        </>
      ),
      description:
        "Our master group understands that your website serves as a digital gateway to your hotel. Our web development services are designed to highlight your hotel’s identity and values, ensuring a highly optimized and user-friendly website for your customers.",
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const handleButtonClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div id="home" className="relative h-[100vh]  overflow-hidden">
      <div className="absolute hidden lg:block p-8 inset-0">
        <AnimatePresence>
          {slides.map(
            (slide, index) =>
              currentSlide === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="h-full space-y-6  flex flex-row items-center"
                >
                  {/* Image for mobile on top, for desktop next to content */}
                  {slide.imgSrc && (
                    <motion.div
                      className="lg:ml-64 lg:order-2 w-full lg:w-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <Image
                        src={slide.imgSrc}
                        alt="image"
                        height={500}
                        width={500}
                        className="ml-1 mt-1 w-full h-[50vh] object-contain"
                      />
                    </motion.div>
                  )}
                  <div className="space-y-4 text-left lg:order-1 lg:ml-16">
                    <motion.h1
                      className="font-extrabold tracking-wider mt-1 xl:mt-4 w-full  text-5xl font-sans"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="text-[#1F2456] text-md w-96"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.7 }}
                    >
                      {slide.description}
                    </motion.p>
                    <Link href="#contact-form" > {/* Make sure to add scroll={false} */}
  <button onClick={slidetoContactForm} className="bg-[#F89522] px-5 py-2 rounded-3xl">
    Let&lsquo;s Start
  </button>
</Link>

                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Mobile view slider */}
      <MobileView slidetoContactForm={slidetoContactForm} />

      {/* Button Container for large screens */}
      <div className="hidden lg:flex w-full absolute bottom-0 justify-center">
        <button
          className="bg-[#1F2456] w-96 text-white px-4 py-4"
          onClick={() => handleButtonClick(0)}
        >
          Digital Marketing
        </button>
        <button
          className="bg-[#F89522] w-96 text-white px-4 py-4"
          onClick={() => handleButtonClick(1)}
        >
          Google Ads Campaign
        </button>
        <button
          className="bg-[#808EAB] w-96 text-white px-4 py-4"
          onClick={() => handleButtonClick(2)}
        >
          OTA Listing Management
        </button>
        <button
          className="bg-[#1F2456] w-96 text-white px-4 py-4"
          onClick={() => handleButtonClick(3)}
        >
          Custom Web Design
        </button>
      </div>
    </div>
  );
};

export default Hero;
