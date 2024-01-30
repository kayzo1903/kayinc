import React from 'react'
import cropsList from '@/lib/data'
import ProductGaleryCards from './ProductGalleryCards'

const LikelyProduct = () => {
  return (
    <div>
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

export default LikelyProduct