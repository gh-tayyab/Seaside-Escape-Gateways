'use client'
import { RiMenu3Line, } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link"

const Navbar = () => {
    const [mobileDrawerOpen,setmobileDrawerOpen]=useState(false)
    const toggleNavbar=()=>{
        setmobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
   <nav className='sticky top-0 z-50  py-3 bg-neutral-900'>
    <div className='container flex justify-between px-4 mx-auto relative text-sm'>
        <div className='flex items-center justify-center'>
            <div className='flex items-center flex-shrink-0 p'></div>
    <span className="text-3xl tracking-tight text-white">Experience</span>
        </div>
        <ul className="hidden lg:flex ml-14 space-x-14 items-center justify-center font-bold text-white">
           <Link href='/'> <li>Home</li></Link>
           <Link href='/Booking'> <li>Booking</li></Link>
           <Link href='/Rooms'> <li>Rooms</li></Link>
           <Link href='/Testimonials'> <li>Testimonials</li></Link>
        </ul>
        
        <div  className="lg:hidden md:flex flex-col justify-end  text-xl">
            <button onClick={toggleNavbar} className="py-3">{mobileDrawerOpen ? <RxCross2 className="text-white"/> :<RiMenu3Line className="text-white" />}</button>
        </div>
    </div>
    {
        mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-4 flex flex-col justify-center items-center lg:hidden text-white">
                 <ul className=" space-x-1">
           <Link href='/'> <li>Home</li></Link>
           <Link href='/Booking'> <li>Booking</li></Link>
           <Link href='/Rooms'> <li>Rooms</li></Link>
           <Link href='/Testimonials'> <li>Testimonials</li></Link>
        </ul>
            </div>

        )
    }
   </nav>
  )
}

export default Navbar