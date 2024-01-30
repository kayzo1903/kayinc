import React from 'react'
import cereals from '../../../../public/cereals.jpg'
import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import RelatedPost from '@/components/Blog/relatedPost'

const BlogPostPage = () => {
    return (
        <section className='w-full min-h-screen'>
            <div className='w-full h-[50vh] relative'>
                <Navbar navLinks={[]} />
                <Image
                    alt='blog post'
                    src={cereals}
                    fill={true}
                    priority
                    style={{ objectFit: "cover", zIndex: "-10" }} />
                <div className='absolute space-y-2 -bottom-10 z-10 left-4 px-4 py-4 rounded w-[95%] h-fit bg-white shadow-lg dark:bg-gray-900'>
                    <h3 className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Nobis consectetur ratione inventore incidunt suscipit distinctio</h3>
                    <div className='w-full h-12 py-2 flex items-center gap-2 flex-nowrap'>
                        <div className='w-10 h-10 relative overflow-hidden rounded-full text-gray-600 dark:text-gray-400'>
                            <Image
                                alt='author-name'
                                src={cereals}
                                fill={true}
                                priority
                                style={{ objectFit: "cover" }} />
                        </div>
                        <p>Kayzo Mmary</p>
                        <span>29 - january - 2024</span>
                    </div>
                </div>
            </div>
            <div className='w-full !h-fit mt-24 mb-8 space-y-4 px-4'>
                <div className='space-y-2'>
                    <h6 className='text-xl font-medium'>Introduction</h6>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id perspiciatis aut ipsa magnam, obcaecati sed sint adipisci laboriosam fugit autem cupiditate
                        beatae iste quis rem natus enim fugiat blanditiis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, laboriosam quod delectus nihil quidem repellat veniam facere amet excepturi at obcaecati ipsam
                         totam exercitationem nulla nesciunt! Perspiciatis veniam aperiam aut.</p>
                </div>
                <div className='space-y-2'>
                    <h6 className='text-xl font-medium'>first point</h6>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id perspiciatis aut ipsa magnam, obcaecati sed sint adipisci laboriosam fugit autem cupiditate
                        beatae iste quis rem natus enim fugiat blanditiis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, laboriosam quod delectus nihil quidem repellat veniam facere amet excepturi at obcaecati ipsam
                         totam exercitationem nulla nesciunt! Perspiciatis veniam aperiam aut.</p>
                </div>
                <div className='space-y-2'>
                    <h6 className='text-xl font-medium'>second point</h6>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id perspiciatis aut ipsa magnam, obcaecati sed sint adipisci laboriosam fugit autem cupiditate
                        beatae iste quis rem natus enim fugiat blanditiis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, laboriosam quod delectus nihil quidem repellat veniam facere amet excepturi at obcaecati ipsam
                         totam exercitationem nulla nesciunt! Perspiciatis veniam aperiam aut.</p>
                </div>
                <div className='space-y-2'>
                    <h6 className='text-xl font-medium'>Conclusion</h6>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id perspiciatis aut ipsa magnam, obcaecati sed sint adipisci laboriosam fugit autem cupiditate
                        beatae iste quis rem natus enim fugiat blanditiis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, laboriosam quod delectus nihil quidem repellat veniam facere amet excepturi at obcaecati ipsam
                         totam exercitationem nulla nesciunt! Perspiciatis veniam aperiam aut.</p>
                </div>
            </div>
            <div className='w-full'>
                <RelatedPost />
            </div>
        </section>
    )
}

export default BlogPostPage