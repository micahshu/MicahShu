"use client"

import { FaPaperPlane, FaLaptopCode, FaHouseChimney, FaNewspaper, FaGithub, FaLinkedinIn, FaWordpressSimple } from 'react-icons/fa6'
import { Squash as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function SideBar() {
    const [isOpen, setOpen] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    let hamburgerIcon;
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
        hamburgerIcon = 'white'
    } else {
        hamburgerIcon = 'black'
    }
    return (
        <>
        {/* side bar */}
            <div className={` z-50 flex flex-col justify-between fixed top-16 left-0 w-24 h-auto inset-0 bg-gray-300 dark:bg-neutral-600 transition-all ease-in-out duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                <div>
                    <Link className='scroll-smooth' href="#hero"><SideBarIcon className={"hover:text-sunYellow"} text={"Home"} icon={<FaHouseChimney size="28" />} /></Link>
                    <Link href="#landscape"><SideBarIcon className={"hover:text-poppyRed"} text={"WordPress"} icon={<FaWordpressSimple size="28" />} /></Link>
                   <Link href="#projects"> <SideBarIcon className={"hover:text-skyBlue"} text={"Full-Stack"} icon={<FaLaptopCode size="28" />} /></Link>
                   <Link href="#contact"><SideBarIcon className={"hover:text-limeGreen"} text={"Contact"} icon={<FaPaperPlane size="28" />} /></Link>
                </div>
                <div className=''>
                    <Link target='_blank' href="https://github.com/micahshu"><SocialIcon className={"hover:text-jetBlack"} icon={<FaGithub size="22" />} /></Link>
                   <Link target='_blank' href="https://www.linkedin.com/in/micah-shumaker/"> <SocialIcon className={"hover:text-skyBlue"} icon={<FaLinkedinIn size="20" />} /></Link>

                </div>

            </div>
            {/* Top Bar */}
            <div className="z-50 w-screen dark:bg-neutral-600 h-16 fixed shadow-md m-auto bg-gray-300 transition-all ease-in-out duration-300">
                <div className=' absolute left-6 top-2'>

                    <Hamburger toggled={isOpen} toggle={setOpen} color={hamburgerIcon} className="p-10" />

                </div>
                <div className='absolute  right-6 top-3'>
                    <ThemeToggle />
                    <img className="w-10 m-auto
                            rounded-3xl
                            border border-solid border-black dark:border-white
                             " src='./profilepic.jpeg' />
                </div>
            </div>
        </>
    )
}

const SideBarIcon = ({ icon, text, className, id }) => {
    return (
        <div className={`sidebar-icon group ${className}`}>
            <a href={id}>
                {icon}
            </a>
            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>

    )
}
const SocialIcon = ({ icon, className }) => {
    return (
        <div className={`social-icon  ${className}`}>
            {icon}
        </div>

    )
}