// components/ProductCard.tsx
import React from 'react';
import { CropsProduct } from '@/lib/data';
import Image from 'next/image';

interface ProductCardProps {
  product: CropsProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { imageSrc, category, title, price } = product;

  return (
    <div className="max-w-96 h-[400px] bg-gray-100 dark:bg-gray-500  shadow-md rounded-lg w-full space-y-4">
      <div className="block relative w-full h-72 overflow-hidden rounded-t-md ">
           <Image
            alt='crops'
            src={imageSrc}
            fill={true}
            priority
            style={{ objectFit: 'cover' }}
             />
      </div>
      <div className="flex flex-col justify-start px-4">
        <h3 className="text-gray-500 dark:text-white text-xs tracking-widest mb-1">{category}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
        <p className="mt-1">{`$${price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
