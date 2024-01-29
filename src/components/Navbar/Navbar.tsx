'use client'
import React, { useState } from 'react'
import { QueList } from '../Icons/Icons'
import ThemeSwitch from '../ui/Darkmode-toogle'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { NavLinks, navLinks } from '@/lib/data'

interface NavLinksProps {
    navLinks: NavLinks[]
}


const Navbar: React.FC<NavLinksProps> = () => {
    const [isNavOpen, setNavOpen] = useState(false)
    const pathname = usePathname()


    return (
        <header className='flex gap-2 justify-between px-4 pt-4 items-center h-14 bg-black bg-opacity-10 py-4 '>
            <span className='text-2xl font-semibold'>
                kayInc
            </span>
            <nav className='hidden md:block font-semibold text-white space-x-4'>
                {navLinks.map((item) => {
                    const { id, link, path } = item
                    return (
                        <Link href={link} className={`${pathname === link ? "text-skin" : "text-white"} hover:text-skin text-base`} key={id}>{path}</Link>
                    )
                })}
            </nav>
            <div className='flex gap-4 items-center '>
                <ThemeSwitch />
                <button onClick={() => setNavOpen((prev) => !prev)} className='md:hidden'>
                    <QueList />
                </button>
            </div>

            {/* side navbar */}
            <div className={`md:hidden w-full h-screen text-gray-950 dark:text-white bg-white dark:bg-gray-950 absolute ${isNavOpen ? "left-0" : "-left-[100%]"} top-0 z-20`}>
                <div className='w-full relative flex justify-center items-center mt-8'>
                    <button className='absolute top-4 right-4' onClick={() => setNavOpen(false)}>
                        <FaTimes className='h-10 w-10 hover:text-skin' />
                    </button>
                    <nav className='px-4 py-8 flex flex-col gap-4'>
                        {navLinks.map((item) => {
                            const { id, link, path } = item
                            return (
                                <Link href={link} onClick={() => setNavOpen(false)} className={`${pathname === link ? "text-skin" : "text-gray-950 dark:text-white"} hover:text-skin text-2xl`} key={id}>{path}</Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Navbar