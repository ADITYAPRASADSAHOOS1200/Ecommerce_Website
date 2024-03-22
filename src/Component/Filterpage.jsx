import React from 'react';
import { StoreData } from '../asset/Data';
import { useDispatch } from 'react-redux';
import { searchFilterProducts } from '../Store/Slices/FilterSlice';
import clothes from '../asset/Images/clothes.jpg';
import { Link } from 'react-router-dom';

const Filterpage = () => {
  const dispatch = useDispatch();
  const Alltypes = [...new Set(StoreData.map(item => item.type))];

  function handleSearch(item) {
    dispatch(searchFilterProducts(item));
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        {Alltypes.map(item => (
          <Link key={item} to={`/filter/${item}`}>
            <button
              className="bg-white border-2 m-3 rounded-md px-4 py-2 border-orange-300 hover:bg-orange-500 hover:text-white font-sans text-xl"
              onClick={() => handleSearch(item)}>
              {item}
            </button>
          </Link>
        ))}
      </div>
      <div className="bg-orange-300 w-full md:w-3/4 lg:w-[600px] mx-auto mt-8 py-2  shadow-md font-bold text-xl text-slate-700 font-sans text-center">
        Sales up to 70% off
      </div>
      <div className="text-center mt-10">
        <img
          src={clothes}
          alt="image"
          className="mx-auto rounded-xl shadow-2xl shadow-black"
          style={{ maxWidth: '40%' }}
        />
      </div>
    </div>
  );
};

export default Filterpage;
