import React from 'react';
import Qizcha from '..//../img/qizcha.svg'
import Oyoqkiyim from '..//../img/oyoqkiyim.svg'
import Naushnik from '..//../img/naushnik.svg'
import Kreslo from '..//../img/kreslo.svg'
import Termiz from '..//../img/termiz.svg'
const LastViewedProducts = () => {
  const products = [
    {
      rating: 4.2,
      image: Qizcha,
      brand: 'Sponsored',
      title: 'STREE MANTRA Women Printed Kurta',
      price: '₹599',
      oldPrice: '₹1699',
      discount: '65% off',
      bg: 'bg-green-100',
    },
    {
      rating: 3.7,
      image: Oyoqkiyim,
      brand: 'BIRDE',
      title: 'Premium Casual Shoes For Men',
      price: '₹350',
      oldPrice: '₹499',
      discount: '35% off',
      bg: 'bg-pink-100',
    },
    {
      rating: 4.2,
      image: Naushnik,
      brand: 'Oppo',
      title: 'OPPO Enco Buds 2',
      price: '₹1,799',
      oldPrice: '₹3999',
      discount: '55% off',
      bg: 'bg-blue-100',
    },
    {
      rating: 4.1,
      image: Kreslo,
      brand: 'Furniture',
      title: 'Office Chair (Black, DIY)',
      price: '₹6,367',
      oldPrice: '₹11,999',
      discount: '45% off',
      bg: 'bg-yellow-100',
    },
    {
      rating: 5.1,
      image: Termiz,
      brand: 'LeoFox',
      title: 'Vacuum Flask Set 3Cup + Bottle',
      price: '₹499',
      oldPrice: '₹1099',
      discount: '54% off',
      bg: 'bg-red-100',
    },
  ];

  return (
    <section className="w-[90%] m-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Last Viewed Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((item, i) => (
          <div key={i} className={`rounded-lg p-3 ${item.bg} relative`}>
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {item.rating}
            </span>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-28 object-contain mb-2"
            />
            <p className="text-xs text-gray-500">{item.brand}</p>
            <h3 className="text-sm font-medium leading-snug">{item.title}</h3>
            <p className="text-lg font-bold">{item.price}</p>
            <p className="text-xs text-gray-500 line-through">{item.oldPrice} <span className="text-green-600 font-semibold ml-1">{item.discount}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LastViewedProducts;
