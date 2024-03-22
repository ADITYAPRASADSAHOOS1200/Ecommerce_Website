import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { StoreData } from '../../asset/Data';

const Footer = () => {
  const products = useSelector(state => state.filterProduct.filterProducts);
  const allFilter = [...new Set(StoreData.map(product => product.type))];

  return (
    <footer className='bg-gray-700 py-8 lg:py-12 mt-[500px]'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
          <div className='mb-8 lg:mb-0'>
            <h1 className='text-2xl lg:text-3xl text-orange-300 font-semibold'>Online Store</h1>
            <p className='text-lg text-orange-300'>Copyright &copy; 2024 by Aditya Prasad</p>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
            <div>
              <h2 className='text-lg text-orange-300 font-semibold mb-4'>Categories</h2>
              <ul className='space-y-2'>
                {allFilter.slice(0, 4).map(product => (
                  <li key={product} className='text-lg text-orange-300'>
                    <NavLink to={`/filter/${product}`} activeClassName='text-orange'>
                      {product}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='text-lg text-orange-300 font-semibold mb-4'>Products</h2>
              <ul className='space-y-2'>
                {allFilter.slice(4, 8).map(product => (
                  <li key={product} className='text-lg text-orange-300'>
                    <Link to={`/filter/${product}`}>
                      {product}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='text-lg text-orange-300 font-semibold mb-4'>Visit our official</h2>
              <ul className='space-y-2'>
                <li className='text-lg text-orange-300'>
                  <Link to="/twitter">Twitter</Link>
                </li>
                <li className='text-lg text-orange-300'>
                  <Link to="www.google.com">Google</Link>
                </li>
                <li className='text-lg text-orange-300'>
                  <Link to="/facebook">Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
