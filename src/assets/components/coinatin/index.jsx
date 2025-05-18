import React from 'react';
import Bodom from '../../img/bodom.svg'; 

const PromoBanner = () => {
  return (
    <div className="w-[90%] m-auto bg-gradient-to-r from-blue-500 to-green-400 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden">
      {/* Text content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-[40px] font-bold">
        <span className='!text-[black]'>  Flipkart Grocery</span>: <span className="text-white">Your <br /> New Go-to Online <br />Grocery Store</span>
        </h2>
        <p className="text-gray-100">
          Whether you work from home or office or other <br /> workplaces, daily items are a
          requisite for everybody
        </p>
        <button className="bg-white text-green-700 font-semibold px-4 py-2 rounded-full w-fit shadow-md">
          UP TO 30% OFF
        </button>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img src={Bodom} alt="Grocery Items" className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default PromoBanner;
