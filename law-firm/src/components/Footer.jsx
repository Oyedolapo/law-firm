import React from 'react'
import logo from '../assets/prime.png';
import { FaLocationDot, FaXTwitter, FaRegCopyright } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    const todayYear = new Date().getFullYear()
  return (
   <footer className='relative w-full md:flex flex-row flex-wrap justify-between  bg-deeper min-h-80 bg-cover px-5 gap-8 lg:gap-0 lg:px-10 xl:px-40 py-20'>
        <div className='mb-10 md:mb-0'>
            <div className='w-40 h-10 md:h-20'>
                <img src={logo} alt="Logo" className='w-full'/>
            </div>
        </div>
        <div className='mt-3 md:mt-0'>
            <h3 className='text-2xl md:text-3xl text-white pb-3 mt-3 md:mt-0'>Contact us</h3>
            <div>
                <span className='flex items-center gap-2 text-customBrown py-2'>
                    <FaLocationDot />
                    <h6>123, Anywhere st, Any City ST.12345</h6>
                </span>
                <span className='flex items-center gap-2 text-customBrown py-2'>
                    <FaPhoneAlt />
                    <h6>08000005412</h6>
                </span>
                <span className='flex items-center gap-2 text-customBrown py-2'>
                    <FaEnvelope />
                    <h6>primepartners@gmail.com</h6>
                </span>
            </div>
        </div>
        <div className='mt-3 md:mt-0'>
            <h3 className='text-2xl md:text-3xl text-white pb-3'>Office Hours</h3>
            <div className='md:text-center'>
                <span>
                    <p className='text-lg font-semibold'>Monday to Friday</p>
                    <p className='text-customBrown'>9:00 am - 6:00 pm</p>
                </span>
                <span>
                    <p className='text-lg font-semibold'>Saturday</p>
                    <p className='text-customBrown'>9:00 am - 12 noon</p>
                </span>
                <p className='font-semibold text-lg'>Closed on Sundays</p>
            </div>
        </div>
        <div className='mt-3 md:mt-0'>
            <h3 className='text-2xl md:text-3xl text-white pb-3'>Follow us</h3>
            <span className='flex items-center gap-2 text-customBrown py-2 font-bold'>
                <FaInstagram />
                <p>primepartners@instagram</p>
            </span>
            <span className='flex items-center gap-2 text-customBrown py-2 font-bold'>
                <FaXTwitter />
                <p>primepartners</p>
            </span>
            <span className='flex items-center gap-2 text-customBrown py-2 font-bold'>
                <FaFacebookF />
                <p>Primepartners</p>
            </span>
        </div>
        <div className='w-full flex items-center justify-center text-base text-white font-semibold mt-5'>Copyright {" "} <FaRegCopyright /> {todayYear}. All rights reserved.</div>
   </footer>
  )
}

export default Footer