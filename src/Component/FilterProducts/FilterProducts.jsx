import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filterByColor, filterByGender, filterbysize, searchFilterProducts, SortByPrice } from '../../Store/Slices/FilterSlice';
import ProductCard from './ProductCard';
import Error from '../Error';

const FilterProducts = () => {
  const products = useSelector(state => state.filterProduct.filterProducts);
  const error = useSelector(state => state.filterProduct.error);
  const [toggleColor, setToggleColor] = useState(false);
  const [toggleSize, setToggleSize] = useState(false);
  const { type } = useParams();
  const dispatch = useDispatch();
  const Gender = ["male", "female"];
  const colorButtons = ["red", "green", "orange", "yellow", "black", "brown", "blue", "purple"];
  const sizeButtons = ["xl", "S", "L", "M"];

  return (
    <div className='container mx-auto px-4 pt-4'>
      <h1 className='text-xl font-bold text-slate-700 mt-4 ml-5'>{type}</h1>
      <div className='flex items-center gap-2 mt-3'>
        {Gender.map((product, index) => (
          <button
            key={index}
            className='px-4 py-2 border-2 text-xl mx-2 hover:bg-orange-300 hover:text-white border-orange-300 rounded-md'
            onClick={() => dispatch(filterByGender(product))}>
            {product}
          </button>
        ))}
        <button
          className='px-4 py-2 border-2 text-xl mx-2 hover:bg-orange-300 hover:text-white border-orange-300 rounded-md'
          onClick={() => dispatch(SortByPrice())}>
          High Price
        </button>
        <div className='relative'>
          <button
            onClick={() => setToggleColor(!toggleColor)}
            className='px-4 py-2 border-2 text-xl mx-2 hover:bg-orange-300 hover:text-white border-orange-300 rounded-md hover:scale-95'>
            Color
          </button>
          <div className={`absolute z-10 top-[50px] left-[-23px] bg-white px-8 py-2 rounded-md shadow-blue-300 shadow-md ${toggleColor ? 'block' : 'hidden'}`}>
            {colorButtons.map((items, index) => (
              <li
                key={index}
                className="list-none m-3 text-xl font-semibold cursor-pointer"
                onClick={() => dispatch(filterByColor(items))}
                style={{ color: items }}>
                {items}
              </li>
            ))}
          </div>
        </div>
        <div className='relative'>
          <button
            onClick={() => setToggleSize(!toggleSize)}
            className='px-4 py-2 border-2 text-xl mx-2 hover:bg-orange-300 hover:text-white border-orange-300 rounded-md hover:scale-95'>
            Size
          </button>
          <div className={`absolute z-10 top-[50px] left-[0px] bg-white px-8 py-2 rounded-md shadow-blue-300 shadow-md ${toggleSize ? 'block' : 'hidden'}`}>
            {sizeButtons.map((items, index) => (
              <li
                key={index}
                className="list-none m-3 text-xl font-semibold cursor-pointer"
                onClick={() => dispatch(filterbysize(items))}
                style={{ color: items }}>
                {items}
              </li>
            ))}
          </div>
        </div>
        <button
          className='px-4 py-2 border-2 text-xl mx-2 hover:bg-orange-300 hover:text-white border-orange-300 rounded-md'
          onClick={() => dispatch(searchFilterProducts(type))}>
          Clear Filter
        </button>
      </div>
      {error ? <Error /> :
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8'>
          {products.filter(product => product.type === type).map((product, index) => (
            <div key={index} className='bg-slate-300 rounded-xl shadow-md hover:bg-gray-300 hover:scale-95 transition-all'>
              <ProductCard
                id={product.id}
                name={product.name}
                text={product.text}
                img={product.img}
                price={product.price}
                colors={product.color}
              />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default FilterProducts;
