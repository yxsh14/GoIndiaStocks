import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MarketStoriesCard from './MarketStoriesCard';

function MarketStories() {

  const [markStoriesData, setMarkStoriesData] = useState([]);

  useEffect(() => {
    axios.get('/data/marketStoriesData.json')
      .then(res => {
        setMarkStoriesData(res.data)
      })
      .catch(err => console.error(err))
  }, [])


  return (
    <div className='py-2 px-4'>
      <div className='sm:block hidden mb-10'>
        <h2 className='text-2xl font-semibold text-red-400 bg-gray-200 max-w-fit p-3 uppercase'>Market Stories</h2>
      </div>

      <div className='flex flex-col gap-10'>
        {
          markStoriesData.map((data: MarketStoriesData) => (
            <MarketStoriesCard key={data.id} data={data}/>
          ))
        }
      </div>

    </div>
  )
}

export default MarketStories