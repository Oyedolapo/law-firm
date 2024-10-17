import React, { useState } from 'react'
import logo from '../assets/prime.png';
import { navigation } from '../constants';
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <header className='relative w-full flex justify-between items-center px-5 md:px-10 py-10'>
        <div className='w-40 h-10 md:h-20'>
            <img src={logo} alt="Logo" className='w-full'/>
        </div>
        <nav className='hidden sm:flex flex-1 justify-center gap-5'>
            {navigation.map((item) => (
                <a key={item.id} href={item.url} className='font-roboto text-base text-white tracking-wider hover:text-customBrown'>{item.title}</a>
            ))}
        </nav>
        <div className='md:hidden'>
            <CiMenuFries fontSize={30} className='text-customBrown cursor-pointer' onClick={() => setToggle(true)}/>
        </div>
        {toggle && (
            <div className='flex flex-row-reverse gap-5 bg-customBrown absolute left-[40%] top-0'>
                <IoClose fontSize={40} className='text-black cursor-pointer mt-5' onClick={() => setToggle(false)}/>
                <nav className='flex flex-col p-10'>
                    {navigation.map((item) => (
                        <a key={item.id} href={item.url} className='font-roboto text-base text-white tracking-wider hover:text-customBrown py-5'>{item.title}</a>
                    ))}
                </nav>
            </div>
        )}
    </header>
  )
}

export default Navbar