import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DiscussionForumCard from './DiscussionForumCard';

function DiscussionForum() {

  const [discForumData, setDiscForumData] = useState([]);

  useEffect(() => {
    axios.get('/data/discussionForum.json')
      .then(response => {
        setDiscForumData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className='py-2 px-4'>
      <div className='sm:block hidden mb-10'>
        <h2 className='text-4xl font-semibold text-red-400 bg-gray-200 max-w-fit p-3 uppercase'>Discussion Forum</h2>
      </div>
      <div className='flex flex-col gap-20'>
        {
          discForumData.map((data: DiscussionForumData) => (
            <DiscussionForumCard key={data.id} data={data}/>
          ))
        }
      </div>

    </div>
  )
}

export default DiscussionForum