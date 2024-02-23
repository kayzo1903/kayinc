import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import { LoadPost, RespProps } from '@/contentful/contentful'
import { dateConvert } from '@/contentful/date'
import Link from 'next/link'
import Richtext from '@/contentful/RichText'


const BlogPostPage = async ({ params }: any) => {
    const data = await LoadPost()
    const slugParam = decodeURIComponent(params.slug)
    const filterdData = data.filter((item: any) => item.fields.slug.trim() === slugParam)
    const postaData = filterdData.map((item : any) => (
        item.fields
    ))
    const {author , body , image ,slug ,time ,title} = postaData[0] as RespProps

    if (postaData.length < 0) {
        return <div className='my-4'>
            <h1 className='text-2xl'>Ops something went wrong </h1>
            <Link href={'/BLog'} className='my-4 bg-skin px-4 py-2 text-white'>
                Blog
            </Link>
        </div>
    }

    return (
        <section className='w-full min-h-screen'>
            <div className='w-full h-[50vh] relative'>
                <Navbar />
                <Image
                    alt='blog post image'
                    src={`https://${image.fields.file.url}`}
                    fill={true}
                    priority
                    style={{ objectFit: "cover", zIndex: "-10" }} />
                <div className='absolute space-y-2 -bottom-10 z-10 left-4 px-4 py-4 rounded w-[95%] h-fit bg-white shadow-lg dark:bg-gray-900'>
                    <h3 className='text-xl'>{title}</h3>
                    <div className='w-full h-12 py-2 flex items-center gap-2 flex-nowrap'>
                        <div className='w-10 h-10 relative overflow-hidden rounded-full text-gray-600 dark:text-gray-400'>
                            <Image
                                alt={`image of ${author.fields.authorName} author`}
                                src={`https://${author.fields.authorPicture.fields.file.url}`}
                                fill={true}
                                priority
                                style={{ objectFit: "cover" }} />
                        </div>
                        <p>{author.fields.authorName}</p>
                        <span>{
                            dateConvert(time)
                        }</span>
                    </div>
                </div>
            </div>
            <div className='w-full !h-fit mt-24 mb-8 space-y-4 px-4'>
                <Richtext content={body}/>
            </div>
        </section>
    )
}

export default BlogPostPage