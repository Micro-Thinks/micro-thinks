import React, { useState, useEffect, useCallback } from "react"; // Import useCallback
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const { Fragment } = require("react");

const MobileView = () => {
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
  }, [slides.length]); // Include slides.length in dependencies

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleButtonClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <Fragment>
      <div id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 p-4 lg:p-8">
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
                    className="h-full flex flex-col lg:flex-row lg:items-center"
                  >
                    <div className="space-y-4 lg:text-left lg:order-1 lg:ml-16">
                      <motion.h1
                        className="font-bold tracking-wider text-3xl lg:text-5xl font-sans"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                      >
                        {slide.title}
                      </motion.h1>
                      {slide.imgSrc && (
                        <motion.div
                          className="mt-4 lg:mt-0 lg:ml-64 lg:order-2 w-full lg:w-auto"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.8 }}
                        >
                          <Image
                            src={slide.imgSrc}
                            alt="image"
                            height={400}
                            width={400}
                            className="w-full h-auto lg:w-full xl:h-[50vh] xl:w-full lg:h-[50vh] object-contain"
                          />
                        </motion.div>
                      )}
                      <motion.p
                        className="text-[#1F2456] text-sm lg:text-md w-full lg:w-96"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                      >
                        {slide.description}
                      </motion.p>
                      <button className="bg-[#F89522] px-5 py-2 rounded-full text-white w-full lg:w-auto">
                        Let's Start
                      </button>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileView;
