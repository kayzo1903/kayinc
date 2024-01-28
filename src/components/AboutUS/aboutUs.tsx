import React from 'react'
import Tomato from "../../../public/Tomatoes.jpg";
import Image from 'next/image';

const AboutUs = () => {
    return (
        <article className='w-full py-8 mb-24 px-4 space-y-8'>
            <div className='w-full mt-8'>
                <h3 className='text-2xl font-semibold sm:text-3xl text-center'>About kayInc</h3>
            </div>
            <div className='w-full flex flex-wrap justify-center gap-y-12 gap-x-16'>
                <div className='bg-skin w-[340px] h-[420px] relative rounded-lg'>
                    <div className='absolute inset-4 w-[340px] h-[420px] rounded-md overflow-hidden'>
                        <Image
                            alt='tomatoes'
                            src={Tomato}
                            fill={true}
                            priority
                            style={{ objectFit: 'cover' }} />
                    </div>
                </div>
                <div className='max-w-[340px] h-[380px] space-y-4 text-gray-600 dark:text-gray-400'>
                    <p className="leading-relax  text-xl text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam
                        necessitatibus accusamus cumque, blanditiis incidunt nobis fugiat voluptatibus magni ex porro ducimus temporibus,
                        alias commodi est officiis rerum aliquid dolore?</p>
                    <p className="leading-relax text-xl text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam
                        necessitatibus accusamus cumque, blanditiis incidunt nobis fugiat voluptatibus magni ex porro ducimus temporibus,
                        alias commodi est officiis rerum aliquid dolore?</p>
                </div>
            </div>
        </article>
    )
}

export default AboutUs