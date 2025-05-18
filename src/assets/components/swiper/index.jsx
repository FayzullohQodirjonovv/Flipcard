import React from "react";
import Lola from '../../img/lola.svg';
import two from '../../img/3.svg';
import thre from '../../img/4.svg';
import fify from '../../img/5.svg';

const categories = [
  {
    title: "Fashion",
    bgColor: "bg-yellow-200",
    image: Lola,
  },
  {
    title: "Beauty & Accessories",
    bgColor: "bg-pink-200",
    image: two,
  },
  {
    title: "Electronics",
    bgColor: "bg-blue-200",
    image: thre,
  },
  {
    title: "Grocery",
    bgColor: "bg-green-200",
    image: fify,
  },
];

const CategoryScroll = () => {
  return (
    <div className="w-[90%] mx-auto mt-[50px]">
      <h2 className="text-xl font-bold mb-4">Shop By Categories</h2>

      <div className="flex overflow-x-auto justify-between space-x-4 pb-4 scrollbar-hide">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`${cat.bgColor} min-w-[300px] h-[70vh] flex-shrink-0 rounded-xl p-4 text-center`}
          >
            <h3 className="text-[20px] font-bold mb-2">{cat.title}</h3>
            <img
              src={cat.image}
              alt={cat.title}
              className="w-[300px] h-[80vh]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryScroll;
