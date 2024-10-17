import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <section className='relative w-full flex flex-col justify-center items-center bg-gradient md:h-[90vh] bg-cover bg-center'>
      <Navbar />
      <div className='flex justify-center flex-col items-center max-sm:px-1 max-sm:py-20 w-full md:w-8/12 h-full'>
        <h2 className='text-2xl md:text-4xl leading-tight font-semibold text-white text-center'>Committed to Exceptional and Trustworthy Client Representation</h2>
        <p className='text-center text-white font-normal py-3 w-9/12'>We believe that everyone deserves access to justice. Our commitment is to support clients from diverse backgrounds in their pursuit of fairness and peace.</p>
        <div className='my-3'>
          <button className='bg-customBrown text-white rounded-md py-3 px-7 mx-5'>Schedule Free</button>
          <button className='border border-customBrown rounded-md py-3 px-7 text-white'>Know more</button>
        </div>
      </div>
    </section>
  )
}

export default Hero