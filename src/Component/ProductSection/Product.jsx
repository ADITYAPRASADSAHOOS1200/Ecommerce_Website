import React from 'react'
import ProductSection from './ProductSection'


const Product = () => {
  return (
    <div className='h-[150vh] '>
      <div className='h-10 w-[500px] rounded-lg  mx-auto mt-10 bg-orange-300 '>
      <h1 className=' translate-x-[200px] translate-y-[10px] text-black font-bold'> Sales 50% off</h1>
      </div>
      <div >
        <ProductSection/>
      </div>
    </div>
  )
}

export default Product
