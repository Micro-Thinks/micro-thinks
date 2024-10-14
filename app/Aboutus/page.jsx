"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div
      id="about-us"
      className="flex flex-col lg:flex-row  h-[832px] sm:-mt-[15rem]  lg:-mt-0 relative overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative w-full lg:w-2/3">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex lg:relative"
        >
          {/* Image 1 */}
          <div className="absolute left-[7%] top-[6rem] lg:left-[47px] lg:top-[4rem] rounded-[150px] overflow-hidden">
            <Image
              src="/images/decorative-img1.webp"
              alt="section image"
              width={240}
              height={329}
              className="w-[160px] h-[310px] lg:w-[400px] lg:h-[500px]"
            />
          </div>

          {/* Image 2 */}
          <div className="absolute left-[12rem] top-[8rem] lg:left-[30rem] lg:top-[8rem] rounded-[150px] overflow-hidden">
            <Image
              src="/images/decorative-img2.webp"
              alt="section image"
              width={240}
              height={329}
              className="w-[160px] h-[310px] lg:w-[400px] lg:h-[500px]"
            />
          </div>

          {/* Image 3 */}
          <div className="absolute left-[4rem] top-[26rem] lg:left-[12rem] lg:top-[36rem]">
            <Image
              src="/images/people-with-logo.webp"
              alt="people image"
              width={80}
              height={108}
              className="w-[80px] h-[108px] lg:w-[115px] lg:h-[148px]"
            />
          </div>
        </motion.div>
      </div>

      {/* About Us Text */}
      <div className="relative w-full lg:w-1/3 lg:top-[18rem] lg:right-[2rem] px-4 lg:px-6 mt-8 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 w-full lg:space-y-12 flex flex-col justify-center items-center lg:items-start"
        >
          <h1 className="font-semibold text-3xl text-[#1F2456] lg:text-left">
            About Us
          </h1>

          <p className="text-[#1F2456] absolute top-[30rem] lg:top-[1rem] lg:right-[12rem]  font-light text-center lg:text-left">
            At Microthinks.com, we elevate your hotel’s online visibility with
            innovative and customized solutions to strengthen guest
            satisfaction.
          </p>
          <div className="flex justify-center   items-end lg:justify-start">
            <button className="bg-[#F89522] absolute top-[40em] lg:top-56  px-5 py-2 text-black rounded-xl">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutus;
