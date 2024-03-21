import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiComment } from "react-icons/bi";
import { LuShare2 } from "react-icons/lu";
import Image from 'next/image';

type DiscussionForumCardProps = {
    data: DiscussionForumData
}

function DiscussionForumCard({data}: DiscussionForumCardProps) {
  return (
    <div className='flex py-5 gap-2 sm:pl-10 shadow-2xl border border-gray-200'>
        <div className='px-2'>
            <div className='w-10'>
                <Image src={'/images/man-placeholder.png'} alt='image' loading='lazy' width={40} height={40}/>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-6'>
                <h3 className='text-lg'>{data.name}</h3>
                <div className='rounded-l-full rounded-r-full w-fit bg-blue-700 text-gray-300 flex items-center justify-center'>
                    <p className='px-4'>Sector {data.sector}</p>
                </div>
            </div>
            <div className='text-gray-500'>
                <p className='text-lg'>{data.data}</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex md:flex-row flex-col gap-3 items-center sm:text-lg text-xs'>
                    <FaRegHeart size={20} />
                    <span>{data.likes}</span>
                </div>
                <div className='flex md:flex-row flex-col gap-3 items-center sm:text-lg text-xs'>
                    <MdOutlineRemoveRedEye size={20} />
                    <span>{data.views}</span>
                </div>
                <div className='flex md:flex-row flex-col gap-3 items-center sm:text-lg text-xs'>
                    <BiComment size={20} />
                    <span>{data.comments} Comments</span>
                </div>
                <div className='flex md:flex-row flex-col gap-3 items-center sm:text-lg text-xs'>
                    <LuShare2 size={20} />
                    <span>Share</span>
                </div>
            </div>
        </div>
        <div className='px-5 py-5'>
            <p className='text-nowrap text-blue-600 text-xs font-semibold'>{data.timing}</p>
        </div>
    </div>
  )
}

export default DiscussionForumCard