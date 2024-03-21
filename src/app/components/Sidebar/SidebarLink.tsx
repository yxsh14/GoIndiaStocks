import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { IconType } from 'react-icons';

type SidebarLinkProps = {
    icon?: IconType;
    name: string;
    link: string;
}

function SidebarLink({icon:Icon,name, link}: SidebarLinkProps) {

  const router = useRouter();

  return (
    <li className={`flex items-center justify-start gap-3 py-3 px-5 hover:bg-richblue-950 ${''}`}>
        
        <div className='w-8 aspect-square flex items-center justify-center'>
            { Icon && <Icon size={20} className='text-gray-300'/> }
        </div>
        
        <Link href={link}>{name}</Link>
    </li>
  )
}

export default SidebarLink