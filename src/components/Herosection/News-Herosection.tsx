import React from 'react'
import Navbar from '../Navbar/Navbar'

const Herosection = () => {
    return (
        <section className='w-full min-h-screen relative bg-newsfeed bg-center bg-cover text-white'>
            <Navbar />
            <div className='w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h3 className='text-4xl lg:text-5xl font-semibold capitalize leading-relaxed'>Read Our latest blog/stories</h3>
            </div>
        </section>
    )
}

export default Herosection