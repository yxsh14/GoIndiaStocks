import React from 'react'
import { FaBell, FaUser } from "react-icons/fa6"
import SidebarLink from './SidebarLink';
import { HiChatBubbleBottomCenterText, HiMiniCurrencyDollar } from "react-icons/hi2";
import { IoMdArrowDropright } from 'react-icons/io';


const sidebarLinks = [
  {
    id: 1,
    name: "Sentiment",
    link: "/sentiment"
  },
  {
    id: 2,
    name: "Market",
    link: "/market"
  },
  {
    id: 3,
    name: "Sector",
    link: "/sector"
  },
  {
    id: 4,
    name: "Watchlist",
    link: "/watchlist"
  },
  {
    id: 5,
    name: "Events",
    link: "/events"
  },
  {
    id: 6,
    name: "News/Interview",
    link: "/news"
  }
]

type SidebarProps = {
  toggleSidebar: () => void
}

function Sidebar({toggleSidebar}: SidebarProps) {

  return (
    <div className='bg-richblue-900 font-semibold text-lg sm:w-6/12 w-1/2 min-w-fit md:static absolute min-h-screen'>
      <div className='flex justify-between items-center p-5 pr-10 gap-20 border-b mb-5'>
        <div className='flex items-center gap-5 min-w-fit text-nowrap'>
          <FaUser size={30} className='rounded-full'/>
          <h1 className='text-2xl'>Hello, User</h1>
        </div>
        <div className='relative'>
          <FaBell size={30}/>
          <span className='bg-red-700 aspect-square w-2.5 border border-blue-950 absolute top-1 right-1.5 rounded-full'/>
        </div>
      </div>
      <div>
        <ul>
          <SidebarLink icon={HiChatBubbleBottomCenterText} name='Discussion Forum' link='/discussion-forum' />
          <SidebarLink icon={HiMiniCurrencyDollar}  name='Market Stories' link='/market-stories' />
          {
            sidebarLinks.map((link) => (
              <SidebarLink key={link.id} name={link.name} link={link.link} />
            ))
          }
        </ul>
      </div>

      <div className="bg-[#1e375f] py-10 cursor-pointer overflow-hidden w-5 absolute top-1/2 -right-5 -translate-y-1/2" onClick={toggleSidebar}>
        <IoMdArrowDropright size={20} />
      </div>
      
      
    </div>
  )
}

export default Sidebar