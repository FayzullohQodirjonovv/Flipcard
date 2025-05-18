import React from 'react'; 
import oneth from '../../img/12.svg'
import onethe from '../../img/21.svg'
const PromoCards = () => {
  return (
    <section className="px-4 py-6 bg-gradient-to-br  from-purple-500 to-yellow-200">
      <div className="w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br bg-[#577FDF] text-white rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Become a <span className="text-yellow-300 font-bold">Plus Member</span> Now & Enjoy amazing benefits
            </h3>
            <p className="text-sm md:text-base">Shop on Flipkart and pay using supercoins</p>
          </div>
          <div className="mt-4">
            <img
              src={oneth}// You can use actual Flipkart Plus image here
              alt="Flipkart Plus"
              className="w-full h-[30vh]"
            />
          </div>
        </div>

        {/* Gift Card */}
        <div className="bg-gradient-to-br bg-[#593DA5] text-white rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Gift Card for Corporate and Business needs</h3>
            <p className="text-sm md:text-base text-white/90">
              Special occasions call for special gifts. Whether it’s a birthday or an anniversary, finding the right gift for your loved ones is always a difficult task.
            </p>
          </div>
          <div className="mt-4">
            <img
            src={onethe}
              alt="Flipkart Gift Card"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCards;
