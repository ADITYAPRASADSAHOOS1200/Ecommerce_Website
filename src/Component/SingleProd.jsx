import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addtocart } from '../Store/Slices/CartSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react'; // Import Button from Material Tailwind

const SingleProd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.filterProduct.SingleProducts);
  const { type, id } = useParams();
  const productSize = product[0]?.size ? product[0].size[0] : '';
  const color = product[0]?.color ? product[0].color[0] : '';

  const [selectedSize, setSelectedSize] = useState(productSize);
  const [Color, setColor] = useState(color);

  function hanleClick({ id, name, size, price, img, Color, selectedSize, text }) {
    dispatch(
      addtocart({
        id,
        name,
        selectedSize,
        price,
        Color,
        img,
        text,
        Totalprice: price,
        amount: 1,
      })
    );
    navigate('/');
  }

  return (
    <div className='mt-20'>
      {product && product.length > 0 ? (
        product.map(({ id, name, price, text, size, color, img }) => (
          <div key={id} className='flex flex-col md:flex-row justify-center gap-32 items-center py-10'>
            <div className='w-full md:w-1/2 lg:w-1/3 flex justify-center'>
              <img className='h-auto md:h-[650px] rounded-lg shadow-gray-950 shadow-xl' src={img} alt={name} />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col items-center mt-10 md:mt-0'>
              <div className='max-w-lg'>
                <h5 className='text-2xl font-bold'>{name}</h5>
                <p className='text-red-500 text-xl font-sans font-bold pb-4'>30% off</p>
                <p className='text-slate-700 text-2xl font-sans font-semibold'>{text}</p>
              </div>

              <div className='mt-4 w-full'>
                <label htmlFor='sizes' className='text-slate-900 font-semibold text-xl'>
                  Pick a size:
                </label>
                <select
                  id='sizes'
                  className='input-field'
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  {size?.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div className='mt-3 w-full'>
                <label htmlFor='colors' className='text-slate-900 font-semibold text-xl'>
                  Pick a Color:
                </label>
                <select
                  id='colors'
                  className='input-field'
                  value={Color}
                  onChange={(e) => setColor(e.target.value)}
                >
                  {color?.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              <div className='text-xl text-red-400 font-sans mt-4  font-semibold'>₹{price}</div>

              <div className='mt-4 ml-3'>
                <Button color='blue' ripple='light' onClick={() => hanleClick({ id, name, size, price, img, Color, selectedSize, text })}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : null}
    </div>
  );
};

export default SingleProd;
