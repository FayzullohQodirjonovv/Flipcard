import React from 'react';
import Kamera from './../../img/kamera.svg'
import one from './../../img/1.svg'
import Apple from './../../img/applenasuhn.svg'
import Devan from './../../img/devan.svg'
import Qozon from './../../img/qozon.svg'
import Kirmoshina from './../../img/kirmoshina.svg'
const Showcase = () => {
  return (
    <section className="container w-[90%] m-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div
  className="rounded-lg p-4 col-span-1 md:col-span-2 row-span-2 flex flex-col justify-between bg-cover bg-center text-white"
  style={{ backgroundImage: `url(${one})` }}
>
  <div className="bg-opacity-50 p-2 rounded">
    <span className="bg-white text-[red] px-2 py-1 font-bold mb-2 inline-block">FURNITURE</span>
    <h3 className="text-[31px] font-semibold mb-2">Create your own <br /> space with Flipkart <br /> Furniture</h3>
  </div>
  <div className='flex justify-end'>
  <p className="bg-red-500 font-bold mb-2  w-[200px] bg-opacity-80 inline-block px-2 py-1 rounded">From</p>
  </div>
</div>


        <div className="bg-yellow-100 rounded-lg p-4 flex flex-col items-center">
          <img
            src={Kamera}
            alt="Nikon DSLR Camera"
            className="w-24 h-24 object-contain mb-2"
          />
          <h4 className="text-lg font-semibold">Nikon DSLR Camera</h4>
        </div>

        <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center">
          <img
            src={Apple} 
            alt="Nikon DSLR Camera"
            className="w-24 h-24 object-contain mb-2"
          />
          <h4 className="text-lg font-semibold">Nikon DSLR Camera</h4>
        </div>

        <div className="bg-pink-100 rounded-lg p-4 flex flex-col items-center">
          <img
            src={Devan}
            alt="Mi Furniture Bed"
            className="w-24 h-24 object-contain mb-2"
          />
          <h4 className="text-lg font-semibold">Mi Furniture Bed with 4 Drawer</h4>
        </div>

        <div className="bg-green-100 rounded-lg p-4 flex flex-col items-center">
          <img
            src={Qozon}
            alt="Cooker Aluminium"
            className="w-24 h-24 object-contain mb-2"
          />
          <h4 className="text-lg font-semibold">Cooker Aluminium</h4>
        </div>

     <div className="bg-blue-100 rounded-lg p-4  items-center w-[205%] justify-between hidden lg:flex">

<div>
    <h4 className="text-lg font-semibold">Samsung Washing Machine</h4>
  <p>lorem ipsum dolor sit amet, <br />
consectetur adiposcing elit.Vel eros, <br />
Sollicitudin a nulla.</p>
<button>
  ₹60,000
</button>
</div>
<div>
    <img
    src={Kirmoshina}
    alt="Samsung Washing Machine"
    className="w-40 h-50 mb-2"
  />
</div>
</div>
    
      </div>
      <h2 className="text-2xl font-bold mt-6 mb-4">Last Viewed Products</h2>
    </section>
  );
};

export default Showcase;