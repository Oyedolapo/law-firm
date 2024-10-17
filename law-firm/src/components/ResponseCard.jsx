import React from 'react'
import { quote } from '../assets'

const ResponseCard = ({ name, text}) => {
  return (
    <div className='flex flex-col items-center bg-white max-w-[250px] p-6 min-h-[350px] shadow-lg hover:shadow-customShadow'>
        <div className='pb-5'>
            <img src={quote} alt="quote" />
        </div>
        <div className='text-center mb-10'>
            <p>{text}</p>
        </div>
        <div className='w-full flex items-center gap-1 justify-end text-customBrown'>
            <div className='bg-customBrown h-0.5 w-2 rounded-md'></div>
            <h3 className='italic'>{name}</h3>
        </div>
    </div>
  )
}

export default ResponseCard