"use client"

import { FaPaperPlane, FaLaptopCode, FaHouseChimney, FaNewspaper, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { Squash as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { useTheme } from 'next-themes'

export default function SideBar(){
    const [isOpen, setOpen] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <>
        <div className={` flex flex-col justify-between fixed top-16 left-0 w-24 h-auto inset-0 bg-gray-300 dark:bg-primary transition-all ease-in-out duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
            <div>  
            <SideBarIcon className={"hover:text-pastelBlue"} text={"Home"} icon={<FaHouseChimney size="28"/>} />
            <SideBarIcon className={"hover:text-pastelGreen"} text={"Projects"}icon={<FaLaptopCode  size="28"/>} />
            <SideBarIcon className={"hover:text-pastelYellow"} text={"Blogs"}icon={<FaNewspaper size="28"/>} />
            <SideBarIcon className={"hover:text-pastelPurple"} text={"Contact"}icon={<FaPaperPlane size="28"/>} />
            </div>       
            <div className=''>
            <SocialIcon className={"hover:text-pastelBlue"} icon={<FaGithub size="22"/>} />
            <SocialIcon  className={"hover:text-pastelGreen"} icon={<FaLinkedinIn size="20"/>} />
            
            </div>
            
        </div>
        <div className="z-40 w-screen dark:bg-primary h-16 fixed shadow-md m-auto bg-gray-300 transition-all ease-in-out duration-300">
        <div className=' absolute left-6 top-2'>
            
            <Hamburger toggled={isOpen} toggle={setOpen} color="rgb(107 114 128)" className="p-10"/>
            
        </div>
        <div className='absolute  right-6 top-3'>
        <ThemeToggle/>
            <img className="w-10 m-auto
                            rounded-3xl
                            border border-solid border-black dark:border-white
                             " src='./profilePicture.jpg' />
        </div>
        </div>
    </>
    )   
}

const SideBarIcon = ( {icon, text, className } ) => {
    return (
        <div className={`sidebar-icon group ${className}`}>
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
            </span>
        </div>
        
    )
}
const SocialIcon = ( {icon, className } ) => {
    return (
        <div className={`social-icon  ${className}`}>
            {icon}
        </div>
        
    )
}