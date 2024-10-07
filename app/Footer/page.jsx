import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className=''>
         <footer className="bg-[#1F2456] text-white p-10 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mb-4 space-y-8 md:mb-0">
            <h1 className='text-xl font-semibold'>About Us</h1>
          <Image src='/microthinks-logo.webp' height={100} width={100} alt='microthinks-logo' />
          <p className='w-64'>
            MicroThinks drives hotel growth with tailored digital solutions and expert support to maximize your online presence and revenue.
          </p>
        </div>
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="text-lg font-semibold  mb-2">Services</h3>
          <ul className='block space-y-2     mt-5'>
            <li>Website Development</li>
            <li>Google Ads Campaigns</li>
            <li>Property Management System</li>
            <li>Revenue Management System</li>
            <li>OTA Listing Management</li>
            <li>Social Media Marketing</li>
          </ul>
        </div>
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Get in touch</h3>
         <div className='block space-y-4  mt-4'>

          <p>+92 331 61 63 916</p>
          <p>info@microthinks.com</p>
          <h3 className="text-lg font-semibold mb-2">Office</h3>
          <p>Lawrence Road, Near China Chowk, Lahore, Punjab, Pakistan.</p>
          <p>Mon to Sat: 9am to 5pm</p>
         </div>
        </div>
      </div>
      <div className=" mt-12 border-t-2 p-4  ">
        <p className="text-sm  flex items-center justify-center text-center">© 2024 MicroThinks. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer