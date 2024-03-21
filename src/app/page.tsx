'use client';
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import DiscussionForum from "./components/DiscussionForum/DiscussionForum";
import MarketStories from "./components/MarketStories/MarketStories";
import { IoMdArrowDropright } from "react-icons/io";


export default function Home() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [mobileDisplay, setMobileDisplay] = useState<'DiscussionForum' | 'MarketStories'>('DiscussionForum');


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <main className="">
      <div className="w-full flex justify-stretch min-h-screen relative bg-gray-200">

        {/* Sidebar */}
        <div className="text-gray-300 h-screen sticky top-0">
          {
            sidebarOpen && <Sidebar toggleSidebar={toggleSidebar}/>
          }
          <div className={` bg-richblue-900 py-10 cursor-pointer overflow-hidden w-5 absolute top-1/2 -translate-y-1/2  ${sidebarOpen && 'hidden'}`} onClick={toggleSidebar}>
            <IoMdArrowDropright size={20} />
          </div>
        </div>

        {/* Home */}
        <div className="w-full bg-white sm:ml-5">
          <div className="sm:hidden grid grid-cols-2 bg-richblue-900 text-gray-300 text-xl">
            <button type="button" onClick={() => setMobileDisplay('DiscussionForum')} className={`${mobileDisplay === 'DiscussionForum' && 'bg-richblue-950 border-b-2 border-red-700 p-4'}`}>
              Discussion Forum
            </button>
            <button type="button" onClick={() => setMobileDisplay('MarketStories')} className={`${mobileDisplay === 'MarketStories' && 'bg-richblue-950 border-b-2 border-red-700 p-4'}`}>
              Market Stories
            </button>
          </div>
          <div className="w-full flex">
            <div className={`sm:w-4/6 sm:block ${mobileDisplay === 'DiscussionForum' ? 'w-full' : 'w-0 hidden'}`}>
              <DiscussionForum />
            </div>
            <div className={`sm:w-2/6 sm:block ${mobileDisplay === 'MarketStories' ? 'w-full' : 'w-0 hidden'}`}>
              <MarketStories />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
