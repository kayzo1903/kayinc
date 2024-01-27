import React from 'react'
import { QueList } from '../Icons/Icons'

const Navbar = () => {
    return (
        <header className='flex gap-2 justify-between px-4 pt-4 items-center'>
            <nav className='hidden md:block'>
                <ul className='flex gap-3 text-sm'>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        why us
                    </li>
                    <li>
                        Product
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
            <span className='text-2xl font-semibold'>
                kayInc
            </span>
            <nav>
                <ul className='flex gap-2 items-center'>
                    <li>lang</li>
                    <li>modeToggle</li>
                    <li><QueList /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar