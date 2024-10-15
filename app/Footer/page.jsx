"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  return (
    <div id="contact" className="">
      <footer className="bg-[#1F2456] text-white p-10">
        <div className="container mx-auto mt-4 flex flex-col md:flex-row justify-between">
          {/* Exclusive Offers Section */}
          <div className="flex flex-col mt-4 py-2 space-y-2  md:w-1/3">
            <h1 className="font-semibold text-xl">Exclusive Offers</h1>
            <p>Sign up to our newsletter to receive our latest offers</p>
            <div className="flex space-x-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                className="rounded-lg p-3 w-full md:w-auto"
              />
              <button className="bg-[#F89522] px-6 py-2 rounded-lg">
                Submit
              </button>
            </div>
          </div>

          {/* Need Help Section */}
          <div className=" space-y-6 md:w-1/3">
            <h1 className="font-semibold    text-2xl tracking-wider">
              Need Help?
            </h1>
            <p className="text-sm ">
              Manage Booking <br /> Support
            </p>
          </div>

          {/* Booking Section */}
          <div className=" space-y-3 mt-2 lg:mt-0 md:w-1/3">
            <h1 className="font-semibold text-xl tracking-wider">
              You want to Book?
            </h1>
            <Link
              href="https://wa.me/+923316163916"
              target="_blank"
              className="text-sm hover:text-[#F89522]  ease-in-out duration-300 "
            >
              +92 331 61 63 916
            </Link>
          </div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row justify-between mt-8">
          {/* About Us Section */}
          <div className="flex flex-col space-y-3 mb-4 md:mb-0 md:w-1/4">
            <h1 className="text-xl font-semibold">About Us</h1>
            <Image
              src="/images/Assets1.png"
              height={100}
              width={100}
              alt="microthinks-logo"
            />
            <p className="w-64">
              MicroThinks drives hotel growth with tailored digital solutions
              and expert support to maximize your online presence and revenue.
            </p>
          </div>

          {/* Services Section */}
          <div className="flex flex-col mb-4 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="block space-y-2">
              <li>Website Development</li>
              <li>Google Ads Campaigns</li>
              <li>Property Management System</li>
              <li>Revenue Management System</li>
              <li>OTA Listing Management</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="flex flex-col mb-4 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Get in touch</h3>
            <div className="block space-y-4">
              <Link
                href="mailto:info@microthinks.com   "
                className="hover:text-[#F89522] duration-300 ease-in-out"
              >
                info@microthinks.com
              </Link>
              <h3 className="text-lg font-semibold mb-2">Office</h3>
              <Link
                href="https://maps.app.goo.gl/tZvbk84Xks1YcW6G6"
                target="_blank"
                className="text-sm hover:underline hover:text-[#F89522] duration-300 ease-in-out"
              >
                Lawrence Road, Near China Chowk, Lahore, Punjab, Pakistan
              </Link>

              <p>Mon to Sat: 9am to 5pm</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t-2 p-4">
          <div className="text-white flex items-center justify-center space-x-4">
            <Image src="/images/fb.png" alt="icon" height={30} width={30} />
            <Image src="/images/insta.png" alt="icon" height={30} width={30} />
            <Image
              src="/images/linkedin.png"
              alt="icon"
              height={30}
              width={30}
            />
          </div>

          <div>
            <ul className="text-white flex flex-col lg:flex-row xl:flex-row lg:items-center xl:items-center space-y-2 justify-around mt-10 ">
              <li>T&Cs Adagio</li>
              <li>T&Cs</li>
              <li> Membership T&Cs </li>
              <li> Privacy Cookies</li>
              <li> Legal Notice </li>
              <li>Do Not Sell My Personal Information</li>
            </ul>
          </div>
          <div className=" mt-10">
            <span className="text-white text-sm  lg:text-xl xl:text-xl flex items-center ">
              Copyright © MicroThinks 2024 All rights reserved
            </span>
            <p className=" flex items-center text-center mt-6">
              *At Microthinks.com, we are deeply passionate about enhancing your
              hotel’s digital presence and revenue through our hotel marketing
              services. Our skilled team empowers hotel owners with modern
              digital solutions that streamline operations and enrich guest
              experiences. Acknowledging the distinct challenges of the
              hospitality industry, we assure you that your hotel stands out in
              the competitive marketplace through our exceptional hotel sales
              and marketing strategies.
            </p>
          </div>

          <div className=" mt-8 text-lg">
            <p className=" flex items-center  text-white justify-center ">
              Available 24/7.
              <button
  className="underline"
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    })
  }
>
  Back to the top
</button>

            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
