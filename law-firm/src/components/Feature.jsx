import React from 'react'
import { features } from '../constants'

const Feature = () => {
  return (
    <section className='relative -mt-10 md:-mt-5 z-10'>
        <div className='flex gap-4 justify-center flex-wrap lg:flex-nowrap'>
            {features.map((item) => (
                <div key={item.id} className='flex flex-wrap md:flex-nowrap gap-1 bg-customBlue py-7 px-3 w-[300px] h-[180px] rounded-md'>
                    <div className='w-7/12'>
                        <img src={item.imgUrl} alt={item.title} className=''/>
                    </div>
                    <div>
                        <h4 className='text-white font-semibold text-xl pb-2'>{item.title}</h4>
                        <p className='text-white text-sm'>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Feature