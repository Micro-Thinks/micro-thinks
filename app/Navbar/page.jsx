import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const navbar = [
    { name: "Home", path: "/Home" },
    { name: "About", path: "/About" },
    { name: "Services", path: "/Services" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <div className="flex items-center justify-between p-6 border-b-[2] border-b-gray-600 shadow-lg">
      {/* Logo Section */}
      <div className="logo">
        <Image
          src="/microthinks-logo.webp"
          alt="microthinks-logo"
          width={100}
          height={100}
        />
      </div>

      {/* Navigation Links */}
      <div className=" font-semibold text-md flex space-x-10">
        {navbar.map((nav, index) => (
          <Link key={index} href={nav.path}>
            <p>{nav.name}</p>
          </Link>
        ))}
      </div>
      <div className='bg-[#F89522] px-3 py-2 rounded-3xl'>
        <button>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
