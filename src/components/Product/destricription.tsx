"use client"
import React, { useEffect, useRef, useState } from 'react'
import bean from '../../../public/beans.jpg'
import Image from 'next/image'
import ProductAccordation from '../Accordion/productAccordation'
import LikelyProduct from './LikelyProduct'

const Destricription: React.FC = () => {

    const scrolltoRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrolltoRef.current) {
            scrolltoRef.current.scrollIntoView({ behavior: 'smooth' })
        }

    }, [])



    return (
        <div className='min-h-screen w-full py-16 px-4' ref={scrolltoRef}>
            <div className='w-full flex flex-wrap gap-8 items-center justify-center'>
                <div className='max-w-96 min-w-80 relative h-96'>
                    <Image
                        alt='product'
                        src={bean}
                        fill={true}
                        priority
                        style={{ objectFit: 'cover' }} />
                </div>
                <div className='max-w-96 min-w-80 space-y-4 py-4'>
                    <h3 className='text-xl'>Beans</h3>
                    <p className='text-sm'>
                        availabilty : in stock
                    </p>
                    <p className='text-gray-400 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit veniam at reiciendis possimus suscipit? Omnis,
                        a. Facere nemo quis fugit suscipit nesciunt.
                        Distinctio dolor nisi tempore explicabo iste beatae nostrum!
                    </p>
                    <p className='text-sm'>2$ per kilogram</p>
                    <div className='flex items-center flex-nowrap justify-between  border-b-[2px] border-skn py-2'>
                        <h6 className='text-gray-400'>Quantity(100kg)</h6>
                        <div className='flex items-center flex-nowrap gap-4'>
                            <input type="number" name="quantity" id="userquantityorder" placeholder='kg' min={1} className='focus:outline-none px-4 w-36 rounded-sm py-1'/>
                        </div>
                    </div>
                    <button className='bg-skin hover:shadow-lg hover:bg-transparent rounded capitalize py-1 px-4 w-full border-2 border-skin'>
                        place order
                    </button>
                </div>
            </div>
            <ProductAccordation />
            <LikelyProduct />
        </div>
    )
}
export default Destricription