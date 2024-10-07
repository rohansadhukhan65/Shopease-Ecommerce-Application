import React from 'react'
import './ProductCard.css'
import { Product } from '@/interface/productInterface'
import Image from 'next/image'


interface Iprops {
    productData : Product
}
const ProductCard : React.FC<Iprops> = ({productData}) => {
    console.log(productData)
  return (
    <div className='border rounded-md shadow-md p-5 w-full'>
        <div className='h-[241px] w-[241px]'>
            <Image src={productData.thumbnail} className='h-[241px] w-[241px]' height={241} width={241} alt={productData.title}/>
        </div>
        <p className='py-2'>{productData.title}</p>
        <p className='py-2'>$ {productData.price}</p>
        <button className='bg-primary text-white w-full py-2 rounded-md'>Add to Cart</button>
    </div>
  )
}

export default ProductCard
