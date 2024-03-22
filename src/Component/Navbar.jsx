import React, { useState } from 'react';
import logo from '../asset/Images/logo.png';
import { FaRegHeart, FaShoppingBag } from 'react-icons/fa';
import ShoppingCart from './FilterProducts/ShoppingCart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const Amount = useSelector((state) => state.cart.TotalAmount);

  return (
    <div>
      <div className='p-2 w-full border-b-4 flex justify-around border-orange-300 bg-gray-700'>
        <h3 className='text-3xl font-sans text-center whitespace-break-spaces text-black font-bold'>
          Shop Smart, Shop Easy
        </h3>
        <h3 className='text-3xl font-sans text-center whitespace-break-spaces text-black font-bold'>
          Express Your Style
        </h3>
        <h3 className='text-3xl font-sans text-center whitespace-break-spaces text-black font-bold'>
          Your Online Marketplace!
        </h3>
      </div>

      <div className='flex justify-around items-center bg-white p-3'>
        <div>
          <img src={logo} className='h-28 w-28 bg-transparent' alt='logo' />
        </div>

        <div className='flex flex-row items-center'>
          <button className='text-xl leading-none mr-4 tracking-normal font-bold'>Logout</button>
          <div className='flex items-center mr-4'>
            <FaRegHeart className='mt-1' />
            <p className='text-xl font-semibold ml-1'>wishlist</p>
          </div>

          <div className='flex items-center relative'>
            <FaShoppingBag className='ml-5 mt-1' onClick={handleOpen} />
            {Amount > 0 && (
              <span className='absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1'>
                {Amount}
              </span>
            )}
          </div>
          <p className='ml-2 text-xl font-bold' onClick={handleOpen}>
            shopping Bag
          </p>
          {open && <ShoppingCart open={open} setOpen={setOpen} />}
        </div>
      </div>

      <div className='flex justify-around p-3 bg-black'>
        <div>
          <h1 className='text-white text-l text-center font-sans font-semibold'>50% off</h1>
        </div>
        <div>
          <h1 className='text-white text-l text-center font-sans font-semibold'>free shipping</h1>
        </div>
        <div>
          <h1 className='text-white text-l text-center font-sans font-semibold'>Payment Method</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
