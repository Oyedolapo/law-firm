import React from 'react'
import AreaCard from './AreaCard'
import { areas } from '../constants'

const Area = () => {
  return (
    <section className='flex flex-col justify-center bg-customBlue py-14 px-10 md:px-5'>
        <div className='flex justify-center items-center gap-1'>
            <div className='bg-white h-1 w-10 rounded-md'></div>
            <h3 className='text-white text-lg font-semibold'>What we offer</h3>
            <div className='bg-white h-1 w-10 rounded-md'></div>
        </div>
        <h2 className='text-center text-3xl pt-2 text-white'>Our Practice Areas</h2>
        <div className='flex items-center justify-center w-[100%] xl:w-[70%] xl:mx-auto flex-wrap gap-7 pt-8 pb-10'>
           {areas.map((item) => (
            <AreaCard key={item.id} imgUrl={item.imgUrl} title={item.title} text={item.text}  />
           ))}
        </div>
        <div className='flex justify-center cursor-pointer'>
            <button className='bg-customBrown text-white text-lg py-2 px-7 font-semibold hover:bg-transparent border hover:text-customBrown border-customBrown transition-all'>View all Practice</button>
        </div>
    </section>
  )
}

export default Area