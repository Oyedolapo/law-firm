import React from 'react'
import { attorney } from '../assets'

const About = () => {
  return (
    <section className='my-12 lg:my-[10rem] w-full px-4'>
        <div className='flex justify-center md:items-center gap-10 flex-col lg:flex-row'>
            <div className='min-w-28 h-[400px] relative'>
                <div className="absolute -bottom-3 -right-3 w-full h-full bg-customBrown -z-10"></div>
                <img src={attorney} alt="Attorney" className='w-full h-full object-cover shadow-lg'/>
            </div>
            <div className='lg:w-[40%] '>
                <div className='flex gap-3 items-center px-5 justify-center lg:justify-normal'>
                    <h3 className='text-xl pb-3 font-semibold'>About Us</h3>
                    <span className='h-1 w-[20%] bg-black'><hr /></span>
                </div>
                <div className='lg:max-w-5xl font-medium max-lg:text-center'>
                    <h2 className='text-4xl font-bold pb-5 w-full'>Welcome to Prime Law Partners</h2>
                    <p className='pb-4'>Our clients' bottom line is our top priority. We are in constant communication with the people we serve and are committed to advancing the immediate needs and wants of our clients.</p>
                    <p>Our team works around the clock to provide the necessary services and support that each client needs from us.</p>
                    <p>Excellent legal services we take pride in helping people from all walks of life achieve the justice and peace they deserve.</p>
                    <button className='bg-customBrown mt-5 lg:mt-[4.5rem] py-2 px-10 rounded-md text-white hover:bg-transparent border hover:text-customBrown border-customBrown'>Know More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About