
import React from 'react'
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import sheeping from '../assets/shipping.png';
import csm from '../assets/cust_suppo.png';
const Footer = () => {
  return (
    <div className='grid items-center grid-cols-1 gap-[10px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-between mt-[70px] bg-[#FAF3EA] px-[100px] py-[100px]'>
      {/* 1 */}
    <div className='flex justify-start items-center gap-[15px]'>
    <HiOutlineTrophy size={60}/>

      <div className='flex flex-col justify-start '>
        <h1 className='font-bold  px-4 pt-4'>High Quality</h1>
        <p className='font-semibold px-4 pb-4'>crafted from top materials</p>
      </div>
    </div>


      {/* 2 */}
      <div className='flex justify-start items-center gap-[15px]'>
        <IoMdCheckmarkCircleOutline size={60}/>

      <div className='flex flex-col justify-start '>
        <h1 className='font-bold  px-4 pt-4'>Warranty Protection</h1>
        <p className='font-semibold  px-4 pb-4'>Over 2 years</p>
      </div>
    </div>


      {/* 3 */}
      <div className='flex justify-start items-center gap-[15px]'>
        <img className='w-[60px] h-[60px]' src={sheeping}/>
      <div className='flex flex-col justify-start items-start'>
        <h1 className='font-bold  px-4 pt-4'>Free Shipping</h1>
        <p className='font-semibold  px-4 pb-4'>Order over 150 $</p>
      </div>
    </div>


      {/* 4 */}
      <div className='flex justify-start items-center gap-[15px]'>
      <img className='w-[60px] h-[60px]' src={csm}/>
      <div className='flex flex-col justify-start items-start flex-wrap'>
        <h1 className='font-bold  px-4 pt-4'>24 / 7</h1>
        <p className='font-semibold  px-4 pb-4'>Dedicated support</p>
      </div>
    </div>

    </div>
  )
}

export default Footer

