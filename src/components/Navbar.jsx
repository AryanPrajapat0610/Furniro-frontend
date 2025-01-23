import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaUserPen } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import logo from '../assets/Logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex justify-between items-center px-5 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo}  alt="Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">Furniro</h1>
      </div>

      {/* Navigation Links (Desktop Only) */}
      <div className="hidden md:flex items-center gap-12 font-medium text-base">
        <a href="#home" className="hover:text-gray-500 transition duration-300">
          Home
        </a>
        <a href="#shop" className="hover:text-gray-500 transition duration-300">
          Shop
        </a>
        <a href="#about" className="hover:text-gray-500 transition duration-300">
          About
        </a>
        <a
          href="#contact"
          className="hover:text-gray-500 transition duration-300"
        >
          Contact
        </a>
      </div>

      {/* Icons (Desktop Only) */}
      <div className="hidden md:flex gap-5">
        <FaUserPen size={24} className="cursor-pointer hover:text-gray-500" />
        <CiSearch size={24} className="cursor-pointer hover:text-gray-500" />
        <IoMdHeartEmpty
          size={24}
          className="cursor-pointer hover:text-gray-500"
        />
        <MdOutlineShoppingCart
          size={24}
          className="cursor-pointer hover:text-gray-500"
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <HiOutlineMenuAlt3
          size={28}
          className="cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Sliding Menu (Mobile) */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-white  z-1  transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative w-full h-full p-6 flex flex-col justify-start items-start">
          {/* Close Button */}
          <HiX
            size={28}
            className="absolute top-4 right-4 cursor-pointer text-black"
            onClick={toggleMenu}
          />
          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 mt-10 text-lg font-medium text-black">
            <a
              href="#home"
              className="hover:text-gray-400 border border-black  rounded-md p-3 "
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#shop"
              className="hover:text-gray-400 border border-black  rounded-md p-3 "
              onClick={toggleMenu}
            >
              Shop
            </a>
            <a
              href="#about"
               className="hover:text-gray-400 border border-black  rounded-md p-3 "
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#contact"
               className="hover:text-gray-400 border border-black  rounded-md p-3 "
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
          {/* Icons (Column Layout) */}
          <div className="flex flex-col gap-6 mt-6 text-black">
           <div className=" border border-black rounded-md  py-3 px-8">
           <FaUserPen
              size={24}
              className="cursor-pointer hover:text-gray-400"
            />
           </div>
           <div className=" border border-black rounded-md  py-3 px-8">
            <CiSearch size={24} className="cursor-pointer hover:text-gray-400" />
            </div>
            <div className=" border border-black rounded-md  py-3 px-8">
            <IoMdHeartEmpty
              size={24}
              className="cursor-pointer hover:text-gray-400"
            />
            </div>
            <div className=" border border-black rounded-md  py-3 px-8">
            <MdOutlineShoppingCart
              size={24}
              className="cursor-pointer hover:text-gray-400"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


















// import React from 'react'
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { CiSearch } from "react-icons/ci";
// import { FaUserPen } from "react-icons/fa6";



// const Navbar = () => {
//     return (
//         // <div className='max-w-[1440px] h-[100px] items-center border border-red-500 flex  justify-center '>

       
//         <div className=' w-full  flex justify-between items-center mx-auto    p-5'>
        
//         <div className='gap-[5px] flex'><img src='../src/assets/Logo.png'/>
//         <h1 className='text-[34px] font-bold w-[130px] h-[41px]'>Furniro</h1>
//         </div>

//         <div className='w-[430px] h-[24px] flex font-medium text-base list-none gap-[50px]'>
//             <li>Home</li>
//             <li>Shop</li>
//             <li>About</li>
//             <li>Contact</li>
//         </div>
//         <div className='flex gap-5 '>
//             <FaUserPen size={28}/>
//             <CiSearch   size={28}  />
//             <IoMdHeartEmpty size={28}/>
//             <MdOutlineShoppingCart size={28}/>
//         </div>
                
                
//                   </div>


//                 // </div>
//     )
// }

// export default Navbar
