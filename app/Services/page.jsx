import Image from "next/image";
import React from "react";

const Services = () => {
  const services = [
    {
      ImgSrc: "/images/Web-Design.webp",
      title: "Custom Web Design",
      description:
        "It offers a personalized online experience for your visitors and helps you stand out.",
    },
    {
      ImgSrc: "/images/OTA-Listing.webp",
      title: "OTA Listing Management",
      description:
        "An OTA (Online Travel Agency) allows users to book travel services like flights, hotels, and car rentals online..",
    },
    {
      ImgSrc: "/images/Commercial.webp",
      title: "Social Media Marketing",
      description:
        "It involves creating and sharing valuable content that resonates with your target audience.",
    },
    {
      ImgSrc: "/images/Google.webp",
      title: "Google Ads Management",
      description:
        "Optimize your ad spend with expert Google Ads management for higher ROI and targeted traffic.",
    },
    {
      ImgSrc: "/images/Property.webp",
      title: "Property Management System",
      description:
        "We provide property management solutions to streamline operations and enhance your property's performance.",
    },
    {
      ImgSrc: "/images/Profit.webp",
      title: "Revenue Management System",
      description:
        "optimizes pricing strategies and inventory distribution to maximize a hotel's profitability by analyzing data and market demand.",
    },
  ];

  return (
    <div id="services" className="bg-white mt-64 lg:mt-1 p-8">
      <h2 className="text-3xl font-bold text-[#1F2456] mb-8 ">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1F2456] rounded-lg text-center p-4 flex flex-col items-center justify-center mx-auto max-w-sm md:max-w-md lg:max-w-lg"
          >
            {/* Image */}
            <div className="flex items-center justify-center mb-4">
              <Image
                src={service.ImgSrc}
                height={100}
                width={100}
                alt="Commercial Image"
                priority
              />
            </div>

            {/* Icon */}
            <div className="text-4xl mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-white text-lg font-semibold mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm text-center px-4 pb-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
