import React from 'react'

const AreaCard = ({ imgUrl, text, title}) => {
  return (
    <div className='flex justify-center gap-4 max-sm:min-w-[300px] md:w-[350px] bg-[#3C5B6F] border-b-4 border-customBrown rounded-md p-3 cursor-pointer'>
        <div className='w-32 h-32'>
            <img src={imgUrl} alt={title}/>
        </div>
        <div className='text-white'>
            <h4 className='font-bold text-xl'>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default AreaCard