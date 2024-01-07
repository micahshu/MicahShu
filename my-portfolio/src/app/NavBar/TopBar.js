// ./src/app/NavBar/TopBar.js
"use client"
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'


export default function TopBar() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className=" w-screen bg-primary h-16 shadow-md m-auto">
            <div className='absolute left-5 top-2'>
                <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" className="p-10"/>

            </div>
        </div>
    )
}