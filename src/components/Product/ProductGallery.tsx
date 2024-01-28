import React from 'react'
import cropsList from '@/lib/data'
import ProductGaleryCards from './ProductGalleryCards'
import { Pagination } from "@nextui-org/react";
import { BiChevronLeft, BiChevronRight, BiFilter, BiSearch } from 'react-icons/bi';
import { Filter, Search } from '../Icons/Icons';

const ProductGalery: React.FC = () => {
    return (
        <section className='w-full px-4 min-h-screen  text-gray-900 dark:text-white space-y-8 py-8'>
            <div className='sm:mx-auto mt-8' >
                <h3 className='text-2xl font-semibold sm:text-3xl text-center'>fresh organic supply direct </h3>
                <h3 className='text-2xl font-semibold sm:text-3xl text-center'>from the farmer to home</h3>
            </div>
            <div className='mx-auto w-60 mt-8'>
                <form className='w-60 h-6 flex gap-2 items-center flex-nowrap'>
                    <Filter />
                    <select id="price" name='pricelevel' className='h-8 px-4 rounded'>
                        <option value="" id="price">filter by price</option>
                        <option value="0-20$" id="pricelevel-01">0-20$</option>
                        <option value="21-40$" id="pricelevel-02">21-40$</option>
                        <option value="41$ - more" id="pricelevel-03">41$ - more</option>
                    </select>
                </form>
            </div>
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