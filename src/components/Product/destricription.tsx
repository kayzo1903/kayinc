"use client"

import React, { useEffect, useRef, useState } from 'react'
import bean from '../../../public/beans.jpg'
import Image from 'next/image'
import { BiMinus, BiPlus } from 'react-icons/bi'
import ProductGaleryCards from './ProductGalleryCards'
import cropsList from '@/lib/data'

const Destricription: React.FC = () => {
    const [amount, setAmount] = useState(1)

    const decreaseAmount = () => {
        if (amount === 1) {
            setAmount(1)
        }
        else (
            setAmount(amount - 1)
        )
    }

    const increaseAmount = () => {
        setAmount(amount + 1)
    }
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
                            <button onClick={increaseAmount}>
                                <BiPlus />
                            </button>
                            <span>{amount < 10 ? `0${amount}` : amount}</span>
                            <button onClick={decreaseAmount}>
                                <BiMinus />
                            </button>
                        </div>
                    </div>
                    <button className='bg-skin hover:shadow-lg hover:bg-transparent rounded capitalize py-1 px-4 w-full border-2 border-skin'>
                        order now
                    </button>
                </div>
            </div>
            <div className='w-full py-8 space-y-4 mt-4'>
                <h6 className='text-xl font-semibold leading-relaxed capitalize'>you might also like</h6>
                <div className='flex justify-center lg:justify-start gap-4 items-center flex-wrap'>
                    {
                        cropsList.map((items) => {
                            return (
                                <ProductGaleryCards key={items.id} product={items} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Destricription