'use client'
import React, { useEffect, useRef } from 'react'
import cropsList from '@/lib/data'
import ProductGaleryCards from './ProductGalleryCards'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Filter } from '../Icons/Icons';

const ProductGalery: React.FC = () => {

const scrollintoRef = useRef<HTMLDivElement>(null) 

useEffect(()=>{
if (scrollintoRef.current) {
    scrollintoRef.current.scrollIntoView({behavior : 'smooth'})
}
}, [])

    return (
        <section className='w-full px-4 min-h-screen  text-gray-900 dark:text-white space-y-8 py-8' ref={scrollintoRef}>
            <div className='sm:mx-auto mt-8' >
                <h3 className='text-2xl font-semibold sm:text-3xl text-center'>fresh organic supply direct </h3>
                <h3 className='text-2xl font-semibold sm:text-3xl text-center'>from the farmer to home</h3>
            </div>
        
                <form className='w-60 h-8 flex gap-2 items-center flex-nowrap mx-auto'>
                    <Filter />
                    <select id="price" name='pricelevel' className='h-8 px-4 rounded bg-skin'>
                        <option value="" id="price">filter by price</option>
                        <option value="0-20$" id="pricelevel-01">0-20$</option>
                        <option value="21-40$" id="pricelevel-02">21-40$</option>
                        <option value="41$ - more" id="pricelevel-03">41$ - more</option>
                    </select>
                </form>
            
            <div className='flex justify-center gap-4 items-center flex-wrap'>
                {
                    cropsList.map((items) => {
                        return (
                            <ProductGaleryCards key={items.id} product={items} />
                        )
                    })
                }
            </div>
            <div className='w-full flex gap-4 justify-center'>
                <button className='w-8 h-8 bg-gray-200 text-skin rounded'><BiChevronLeft className='w-6 h-6' /></button>
                <button className='w-8 h-8 bg-gray-200 text-skin rounded'><BiChevronRight className='w-6 h-6' /></button>
            </div>
        </section>
    )
}

export default ProductGalery