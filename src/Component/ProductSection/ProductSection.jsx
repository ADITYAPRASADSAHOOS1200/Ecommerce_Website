
import React from 'react';
import { StoreData } from '../../asset/Data';
import { addtocart } from '../../Store/Slices/CartSlice';
import { useDispatch } from 'react-redux';


const ProductSection = () => {
  const dispatch = useDispatch();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-32 gap-4 mx-auto max-w-7xl px-4'>
      {StoreData.slice(0, 6).map((product, index) => (
        <div key={index} className='border border-gray-400 bg-white shadow-lg rounded-xl overflow-hidden'>
          <div className='relative'>
            <p className='absolute z-10 rotate-[300deg] text-red-700 mt-20 ml-1 text-2xl font-bold'>50% off sale</p>
            <img src={product.img} alt='' className='h-80 w-full object-cover bg-left' />
          </div>
          <div className='p-4'>
            <h1 className='font-bold text-xl text-gray-700'>{product.name}</h1>
            <div className='flex items-center mt-2'>
              <p className='font-bold mr-2'>Color:</p>
              <div className='h-5 w-5 rounded-full' style={{ backgroundColor: product.color[0] }}></div>
            </div>
            <div className='flex items-center mt-2'>
              <p className='font-bold mr-2'>Size:</p>
              <p>{product.size[0]}</p>
            </div>
            <button
              className='mt-4 bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-blue-gray-900 hover:scale-95 transition-all'
              onClick={() => {
                dispatch(
                  addtocart({
                    Color: product.color[0],
                    selectedSize: product.size[0],
                    ...product,
                  })
                );
               
              }}>
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;