import React from 'react'
import { Badge } from '../ui/badge';

const JobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-slate-50 border-blue-950 cursor-pointer hover:shadow-2xl shadow-blue-200 hover:p-3 '>
        <div>
        <h1 className='text-lg font-medium'>Company Name</h1>
        <p className='text-md text-gray-500'>India</p>
        
    </div>
    <div>
        <h2 className='font-bold text-lg my-2'>Job Title</h2>
        <p className='text-md text-gray-500'>Senior Software Engineer Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut laudantium esse veritatis quam? Amet dolore error fuga ab nam!</p>
    </div>
    <div className='flex gap-2 items-center mt-4'>
        <Badge className="text-white mx-3 bg-blue-900 rounded-md">10 Position</Badge>
        <Badge className="text-white mx-3 bg-red-900 rounded-md">20 LPA</Badge>
        <Badge className="text-white mx-3 bg-blue-900 rounded-md">Remote</Badge>
        <Badge className="text-white mx-3 bg-red-900 rounded-md">Full Time</Badge>
    </div>
    </div>
  )
}

export default JobCards;