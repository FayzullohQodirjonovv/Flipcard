import React from "react";
import Iphone from '../../img/iphone.svg'
import Tv from '../../img/tv.svg'
import Byke from '../../img/byke.svg'
const Navbar = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 w-[90%] m-auto mx-auto">
  <div className="flex flex-col gap-6 md:col-span-1">
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-5 flex flex-col justify-between shadow hover:shadow-lg transition hover:scale-105">
      <div className="mb-4">
        <span className="bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
          50% Discount
        </span>
        <h2 className="text-xl font-bold mb-1 text-blue-900">iPhone 14</h2>
        <p className="text-sm text-gray-700 mb-3">
          Now Available on <br />
          affordable price
        </p>
        <div className="flex items-center gap-2 mb-3">
          <p className="line-through text-sm text-gray-500">₹1,00,000</p>
          <span className="font-bold text-blue-800">From ₹99,500*</span>
        </div>
        <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Buy Now
        </button>
      </div>
      <img src={Iphone} alt="iPhone 14" className="w-full h-40 object-contain" />
    </div>

    <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl p-5 flex flex-col justify-between shadow hover:shadow-lg transition hover:scale-105">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-purple-900">Ultra HD 4K TVs</h2>
        <p className="text-lg">
          From <span className="font-bold text-[#680CFB]">₹5,000*</span>
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Sony, Samsung, LG and more. <br />
          Instant 10% Offer on CitiBank
        </p>
      </div>
      <img src={Tv} alt="TV" className="w-full h-40 object-contain" />
    </div>

  </div>

  <div className="bg-red-50 p-6 rounded-2xl md:col-span-2  flex-col lg:flex-row items-center gap-6 shadow hover:shadow-lg transition hover:scale-[1.01]">
    <div className="ml-[50px] mt-[20px]">
      <h2 className="text-2xl font-bold mb-2">Lifelong Tribe 20T</h2>
      <p className="text-sm text-gray-700 mb-2">
        Matte Black and Fluorescent Yellow 20T <br />
        Road Cycle (Single Speed)
      </p>
      <div className="flex items-center gap-3 text-sm mb-4">
        <p className="text-gray-800">₹8,000</p>
        <p className="text-red-600 font-bold text-lg">From ₹2,000*</p>
      </div>
      <button className="bg-red-500 text-white px-8 py-2 rounded-full hover:bg-red-600 transition">
        Buy Now
      </button>
    </div>
    <div className="flex-1">
      <img
        src={Byke}
        alt="Bicycle"
        className="w-full h-auto object-contain"
      />
    </div>
  </div>
</div>

  );
};

export default Navbar;
