import React from 'react'
import wheat from '../../../public/wheatfarm.jpg'
import Image from 'next/image'
import Link from 'next/link'


const PostCards = () => {
    return (
        <Link href={'/Blog/check+whats+they+post'} className='w-96 h-[420px] space-y-2 overflow-hidden rounded shadow-lg dark:bg-gray-800'>
            <div className='w-full h-64 relative overflow-hidden'>
                <Image
                    alt='blogpost'
                    src={wheat}
                    fill={true}
                    priority
                    style={{ objectFit: "cover" }} />
            </div>
            <div className='space-y-2 px-4'>
                <span className='text-sm bg-skin rounded px-4 py-2'>Technology</span>
                <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sint deleniti eius facilis modi vitae</h6>
                <div className='flex items-center gap-4 text-gray-400 text-sm'>
                    <div className='w-8 h-8 rounded-full bg-white relative overflow-hidden'>
                        <Image
                            alt='blogpost'
                            src={wheat}
                            fill={true}
                            priority
                            style={{ objectFit: "cover" }} />
                    </div>
                    <span>Kayzo Mmari</span>
                    <span>
                        29 january 2024
                    </span>
                </div>
            </div>
        </Link >
    )
}

export default PostCards