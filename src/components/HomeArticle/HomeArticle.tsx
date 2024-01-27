import React from 'react'
import { DoubleChevronRight } from '../Icons/Icons';
import Image from 'next/image';
import planting from '../../../public/planting.jpg'

const HomeArticle = () => {
    return (
        <section className="text-gray-600 body-font w-full min-h-fit py-8">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="sm:text-3xl text-2xl mb-4 font-medium text-gray-900 dark:text-white">
                        Fresh Produce Dirivery
                        <br className="hidden lg:inline-block" /> Farm-to-table Experience
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                    </p>
                    <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                    </p>
                    <button className='flex gap-2 center capitalize text-skin'>
                        read more
                        <span><DoubleChevronRight /></span>
                    </button>
                </div>
                <div className="lg:max-w-lg h-[480px] lg:w-full md:w-1/2 w-5/6 relative">
                    <Image
                        alt='article Image'
                        src={planting}
                        fill={true}
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeArticle
