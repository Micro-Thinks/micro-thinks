"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            imgSrc: "/Home.webp",
            title: (
                <>
                    <span className='text-[#1F2456] font-extrabold'>Your Brand, </span>
                    <span className=' text-[#808EAB] '>Our Strategy, </span> <br />
                    <span className=' text-[#F89522]    font-extrabold mt-10 block'>Ultimate Growth</span>
                </>
            ),
            description: "Boost your brand's online presence with our comprehensive digital marketing services. We tailor strategies to meet your business goals."
        },
        {
            title: (
                <>
                    <span className='text-[#1F2456] font-extrabold'>Google Ads </span>
                    <span className='text-[#F89522]'>Management</span>
                </>
            ),
            description: "We specialize in managing Google Ads campaigns for hotels, driving targeted traffic and increasing direct bookings. Our tailored strategies maximize ROI and enhance visibility across search and display networks."
        },
        {
            imgSrc: "/OTA.webp",
            title: (
                <>
                    <span className='text-[#1F2456] font-extrabold'>OTA Listing </span>
                    <span className='text-[#F89522]'>Management</span>
                </>
            ),
            description: "We specialize in optimizing OTA (Online Travel Agency) listings to enhance visibility, increase bookings, and maximize revenue for hotels. Our targeted strategies ensure your property stands out in a competitive marketplace."
        },
        {
            title: (
                <>
                    <span className='text-[#1F2456] font-extrabold'>Custom Web </span>
                    <span className='text-[#F89522]'>Design</span>
                </>
            ),
            description: "We create tailored web designs that reflect your brand’s unique identity, ensuring a seamless user experience. From concept to launch, we build websites that captivate and convert."
        },
    ];

    const handleButtonClick = (index) => {
        setCurrentSlide(index); 
    };

    return (
        <div className="relative h-[90vh] overflow-hidden">

            <div className="absolute p-8     inset-0 ">
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`h-full  text-start space-y-6 items-start flex  flex-col ${currentSlide === index ? 'block' : 'hidden'}`} 
                    >
                        <div className =' flex flex-row justify-end items-center   '>
                            <div className='space-y-10'>
                                
                        <h1 className='font-extrabold tracking-wider text-5xl font-sans  '>
                            <span className='text-[#1F2456]'>{slide.title}</span>
                        </h1>

                        <p className='w-96  font-semibold text-md '>{slide.description}</p>
                        <div>

                        <button className='bg-[#F89522] w-32 mt-16 px-5  block py-2 rounded-3xl'>Let's Start</button>
                        </div>
                            </div>
                        {slide.imgSrc && ( <Image src={slide.imgSrc} className=' ml-64' alt='image' height={500} width={500}/>)
                        }
                        </div>
                    </div>
                ))}
            </div>

            {/* Button Container */}
            <div className='w-full flex absolute bottom-10  justify-center '>
                <button className='bg-[#1F2456] w-96 text-white px-4 py-4' onClick={() => handleButtonClick(0)}>Digital Marketing</button>
                <button className='bg-[#F89522] w-96 text-white px-4 py-4' onClick={() => handleButtonClick(1)}>Google Ads Campaign</button>
                <button className='bg-[#808EAB] w-96 text-white px-4 py-4' onClick={() => handleButtonClick(2)}>OTA Listing Management</button>
                <button className='bg-[#1F2456] w-96 text-white px-4 py-4' onClick={() => handleButtonClick(3)}>Custom Web Design</button>
            </div>

        </div>
    );
};

export default Hero;
