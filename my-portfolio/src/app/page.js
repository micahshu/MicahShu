
"use client"

import SideBar from "./NavBar/SideBar"
import TopBar from "./NavBar/TopBar"
import { ThemeProvider } from "next-themes"
import HomePage from "./Homepage/Homepage"
export default function Home() {
  return (
    <main className=''>
      <ThemeProvider enableSystem={true} attribute="class">
        <SideBar />
        <HomePage />
      </ThemeProvider>
      
        
    </main>
  )
}
