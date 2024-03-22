import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { SingleProductPage } from '../../Store/Slices/FilterSlice';

const ProductCard = ({ id, name, img, text, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  function handleClick() {
    dispatch(SingleProductPage(id));
  }

  return (
    <Link to={`/filter/${type}/${id}`}>
      <div
        key={id}
        className='p-4 hover:text-black flex flex-col justify-between h-full'
        onClick={handleClick}
      >
        <div className='relative h-[250px] md:h-[300px] lg:h-[350px]'>
          <img src={img} alt={name} className='h-full w-full object-cover' />
        </div>
        <div className='mt-3'>
          <h1 className='text-lg md:text-xl lg:text-2xl hover:text-black font-bold text-red-500'>{name}</h1>
        </div>
        <p className='text-sm md:text-base font-sans text-red-900'>{text}</p>
        <p className='mt-2 text-black-400 font-sans font-bold'>₹{price}</p>
        <div className='flex items-center'>
          {colors.map((color, index) => (
            <div
              key={index}
              className='rounded-full mr-2 md:mr-4 mt-2 shadow-md shadow-black'
              style={{ backgroundColor: color, width: '20px', height: '20px' }}
            ></div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

