import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RespProps } from '@/contentful/contentful'
import { dateConvert } from '@/contentful/date'

interface RespCardsProps {
    Post: RespProps
}
const PostCards = ({ Post }: RespCardsProps) => {
    const { image, author, slug, time, title } = Post || {}
    
    if (!Post) {
        // Handle the case where Post is undefined
        return <div>Loading...</div>;
    }
    
    return (
        <Link href={`/Blog/${slug}`}
            className='w-72 h-[360px] space-y-2 overflow-hidden rounded shadow-lg dark:bg-gray-800'>
            <div className='w-full h-56 relative overflow-hidden'>
                <Image
                    alt='blogpost'
                    src={`https://${image.fields.file.url}`}
                    fill={true}
                    priority
                    style={{ objectFit: "cover" }} />
            </div>
            <div className='space-y-2 px-2 flex flex-col'>
                <span className='text-sm bg-skin rounded px-4 py-2 !w-fit'>Technology</span>
                <h6 className='text-sm line-clamp-2'>{title}</h6>
                <div className='flex items-center gap-4 text-gray-400 text-sm mt-auto'>
                    <div className='w-8 h-8 rounded-full bg-white relative overflow-hidden'>
                        <Image
                            alt={`image of ${author.fields.authorName} author`}
                            src={`https://${author.fields.authorPicture.fields.file.url}`}
                            fill={true}
                            priority
                            style={{ objectFit: "cover" }} />
                    </div>
                    <span>{author.fields.authorName}</span>
                    <span className='text-xs'>
                        {
                            dateConvert(time)
                        }
                    </span>
                </div>
            </div>
        </Link >
    )
}

export default PostCards