import React from 'react'
import { responses } from '../constants'
import ResponseCard from './ResponseCard'

const Feedback = () => {
  return (
    <section className='bg-faint px-10 py-12 flex flex-col justify-center items-center'>
        <div className='text-center'>
            <h4 className='text-lg font-semibold'>Why you should choose us</h4>
            <h2 className='text-4xl font-semibold'>Our Clients Responses</h2>
        </div>
        <div className='flex justify-center max-sm:items-center flex-col md:flex-row gap-10 pt-10 w-full'>
            {responses.map((item) => (
                <ResponseCard key={item.id} name={item.name} text={item.text}/>
            ))}
        </div>
    </section>
  )
}

export default Feedback