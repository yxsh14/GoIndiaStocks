import Image from 'next/image';
import React from 'react'

type MarketStoriesCardProps = {
    data:MarketStoriesData;
}

function MarketStoriesCard({data}:MarketStoriesCardProps) {
  return (
    <div className='border-x border-t'>
      <div className='p-1'>
        <Image src={'/images/placeholder-img.jpg'} width={400} height={300} alt='' className='w-full max-h-60 h-auto object-cover' loading='lazy'/>
      </div>
      <div className='p-5 flex flex-col gap-3'>
        <h3 className='text-2xl font-semibold text-gray-800'>{data.title}</h3>
        <p className='text-gray-500'>{data.description}</p>
      </div>
    </div>
  )
}

export default MarketStoriesCard