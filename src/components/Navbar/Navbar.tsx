'use client'
import React, { useState } from 'react'
import { QueList } from '../Icons/Icons'
import ThemeSwitch from '../ui/Darkmode-toogle'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'


const Navbar = () => {
    const [isNavOpen, setNavOpen] = useState(false)

    return (
        <header className='flex gap-2 justify-between px-4 pt-4 items-center h-14 bg-black bg-opacity-10 py-4 '>
            <span className='text-2xl font-semibold'>
                kayInc
            </span>
            <nav className='hidden md:block font-semibold text-white space-x-4'>
                <Link href={'/'} className='text-base hover:text-skin'>Home</Link>
                <Link href={'/About'} className='text-base hover:text-skin'>Why us</Link>
                <Link href={'/Product'} className='text-base hover:text-skin'>Product</Link>
                <Link href={'/Blog'} className='text-base hover:text-skin'>NewsFeed</Link>
                <Link href={'/Contacts'} className='text-base hover:text-skin'>Contact</Link>
            </nav>
            <div className='flex gap-4 items-center '>
                <ThemeSwitch />
                <button onClick={() => setNavOpen((prev) => !prev)} className='md:hidden'>
                    <QueList />
                </button>
            </div>

            {/* side navbar */}
            <div className={`md:hidden w-full h-screen text-gray-950 dark:text-white bg-white dark:bg-gray-950 absolute ${isNavOpen ? "left-0" : "-left-[100%]"} top-0 z-10`}>
                <div className='w-full relative flex justify-center items-center mt-8'>
                    <button className='absolute top-4 right-4' onClick={() => setNavOpen(false)}>
                        <FaTimes className='h-10 w-10 hover:text-skin' />
                    </button>
                    <nav className='px-4 py-8 flex flex-col gap-4'>
                        <Link href={'/'} onClick={() => setNavOpen(false)} className='text-2xl hover:text-skin'>Home</Link>
                        <Link href={'/About'} onClick={() => setNavOpen(false)} className='text-2xl hover:text-skin'>Why us</Link>
                        <Link href={'/Product'} onClick={() => setNavOpen(false)} className='text-2xl hover:text-skin'>Product</Link>
                        <Link href={'/Blog'} onClick={() => setNavOpen(false)} className='text-2xl hover:text-skin'>News feeds</Link>
                        <Link href={'/Contacts'} onClick={() => setNavOpen(false)} className='text-2xl hover:text-skin'>Contact</Link>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Navbar