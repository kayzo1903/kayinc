import { Span } from 'next/dist/trace'
import Link from 'next/link'
import React from 'react'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='w-full mt-16 pb-4 px-4 h-fit space-y-4'>
            <div className='flex gap-4 items-start justify-start sm:justify-center flex-wrap py-8'>
                <div className='w-40 py-2'>
                    <h3 className='text-3xl sm:text-4xl font-semibold text-gray-950 dark:text-white'>kayInc</h3>
                </div>
                <div className='space-y-2 w-40 py-2'>
                    <h6 className='text-xl text-skin'>Learn</h6>
                    <div className='flex flex-col gap-2 text-gray-400'>
                        <Link href={'/Company'}>Company</Link>
                        <Link href={'/Responsibility'}>Responsibility</Link>
                        <Link href={'/Whyus'}>Why us</Link>
                    </div>
                </div>
                <div className='space-y-2 w-40 py-2'>
                    <h6 className='text-xl text-skin'>Explore</h6>
                    <div className='flex flex-col gap-2 text-gray-400'>
                        <Link href={'/Prducts'}>Products</Link>
                        <Link href={'/Blog'}>Blog</Link>
                        <Link href={'/Review'}>Review</Link>
                    </div>
                </div>
                <div className='space-y-2 w-40 py-2'>
                    <h6 className='text-xl text-skin'>Collaborate</h6>
                    <div className='flex flex-col gap-2 text-gray-400'>
                        <Link href={'/Contact'}>Contacts</Link>
                        <Link href={'/Supplier'}>Become supplier</Link>
                        <Link href={'/Team'}>Our Team</Link>
                    </div>
                </div>
                <div className='space-y-2 w-40 py-2'>
                    <h6 className='text-xl text-skin'>Connect</h6>
                    <div className='flex flex-col gap-2 text-gray-400'>
                        <span>Uhuru Street</span>
                        <span>+255 111 111 111</span>
                        <span>Info@kayInc.co.tz</span>
                    </div>
                </div>
            </div>
            <div className='w-full h-[2px] bg-slate-200'></div>
            <div className='flex items-center justify-between'>
                <h3 className='capitalize text-gray-400'>© {year} kayInc.All right reserved</h3>
                <div className='flex justify-center items-center gap-2 text-xl text-gray-500'>
                   <BiLogoFacebook />
                   <BiLogoTwitter />
                   <BiLogoYoutube />
                   <BiLogoLinkedin />
                </div>
            </div>
        </footer>
    )
}

export default Footer