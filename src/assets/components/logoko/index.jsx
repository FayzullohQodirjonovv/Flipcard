import React from "react";
import img1 from '../../img/chi1.svg';
import img2 from '../../img/chi2.svg';
import img3 from '../../img/chi3.svg';
import img4 from '../../img/chi4.svg';
import img5 from '../../img/chi5.svg';
import img6 from '../../img/chi6.svg';
import img7 from '../../img/chi7.svg';
import img8 from '../../img/chi8.svg';
import img9 from '../../img/chi9.svg';

const products = [
  {
    section: "Winter Essentials",
    items: [
      { title: "Men Striped Padded Jacket", brand: "Roadster", price: 891, originalPrice: 3199, discount: "72% off", rating: 4.2, image: img1, bgColor: "bg-pink-50" },
      { title: "Solid Beanie (Pack of 2)", brand: "Pinkit", price: 265, originalPrice: 499, discount: "46% off", rating: 3.1, image: img2, bgColor: "bg-yellow-50" },
      { title: "Chelsea Boots for Men (Maroon)", brand: "BIG FOX", price: 800, originalPrice: 2245, discount: "65% off", rating: 4.2, image: img3, bgColor: "bg-blue-50" },
      { title: "Room Heater", brand: "Hilton", price: 1200, originalPrice: 1899, discount: "36% off", rating: 4.1, image: img4, bgColor: "bg-green-50" },
      { title: "Mink Blanket (Brown)", brand: "kamble", price: 479, originalPrice: 1999, discount: "76% off", rating: 5.1, image: img5, bgColor: "bg-indigo-50" },
    ],
  },
  {
    section: "Flipkart Recommendation",
    items: [
      { title: "Women Printed Kurta", brand: "STREE MANTRA", price: 920, originalPrice: 1897, discount: "51% off", rating: 4.2, image: img6, bgColor: "bg-red-50" },
      { title: "Analog Watch - For Men", brand: "LIMESTONE", price: 280, originalPrice: 1999, discount: "85% off", rating: 3.7, image: img7, bgColor: "bg-orange-50" },
      { title: "Canon PIXMA Printer", brand: "Canon", price: 5599, originalPrice: 6995, discount: "19% off", rating: 4.7, image: img8, bgColor: "bg-teal-50" },
      { title: "Electric Kettle (1.5 L, Silver)", brand: "Prestige", price: 699, originalPrice: 1245, discount: "43% off", rating: 4.4, image: img9, bgColor: "bg-lime-50" },
      { title: "iPad 10th Gen 64 GB", brand: "Apple", price: 37499, originalPrice: 39900, discount: "6% off", rating: 5.6, image: img1, bgColor: "bg-rose-50" },
    ],
  },
];

const App = () => {
  return (
    <div className="p-6 space-y-4 w-[95%] mx-auto">
      {products.map((section) => (
        <div key={section.section}>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{section.section}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden ${item.bgColor}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-conatain mt-[20px]"
                />
                <div className="p-4 space-y-2">
                  <div className="text-sm bg-green-100 text-green-700 rounded-full px-2 py-1 inline-block font-semibold">
                    {item.rating} ★
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">{item.brand}</h3>
                  <p className="text-sm text-gray-600">{item.title}</p>
                     <div className="text-base font-bold text-gray-900">₹{item.price}</div>
                 <div className="flex gap-3">
                  <div className="text-sm text-gray-400 line-through">₹{item.originalPrice}</div>
                  <div className="text-sm text-green-600 font-medium">{item.discount}</div>

                 </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
