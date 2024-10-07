import React from 'react'
import './ProductCard.css'
import { Product } from '@/interface/productInterface'
import Image from 'next/image'


interface Iprops {
    productData : Product
}
const ProductCard : React.FC<Iprops> = ({productData}) => {
    
  return (
    <div className='border rounded-md shadow-md p-5 w-full'>
        <div>
            <Image src={productData.images[0]} height={241} width={241} alt={productData.title}/>
        </div>
      {productData.title}
    </div>
  )
}

export default ProductCard
