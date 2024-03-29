import React from 'react'
import ProductCard from './ProductCards'
import cropsList from '@/lib/data'
import { DoubleChevronRight } from '../Icons/Icons'
import Link from 'next/link'

const Product: React.FC = () => {
  const firstThreeItems = cropsList.slice(0, 3);

  return (
    <section className='w-full px-4 !h-fit  text-gray-900 dark:text-white space-y-8 pt-8'>
      <div className='sm:mx-auto mt-8'>
        <h3 className='text-2xl font-semibold sm:text-3xl text-center'>fresh organic supply direct </h3>
        <h3 className='text-2xl font-semibold sm:text-3xl text-center'>from the farmer to home</h3>
      </div>
      <div className='flex gap-4 justify-center sm:justify-start  lg:justify-between items-center flex-wrap'>
        {firstThreeItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <div>
        <Link href={'/Product'} className='flex gap-2 items-center text-skin'>
          view more <span><DoubleChevronRight /></span>
        </Link>
      </div>
    </section>
  );
}

export default Product;
