import React, { useState, useEffect } from 'react';
import Flib from '../../img/flib.svg';
import Food from '../../img/food.svg';
import Makeup from '../../img/makeup.svg';
import Responsive from '../../img/responsive.svg';
import Mobilka from '../../img/mobilka.svg';
import Shoe from '../../img/shoe.svg';
import Sofa from '../../img/sofa.svg';
import Star from '../../img/star.svg';
import Card from '../../img/card.svg';
import User from '../../img/user.svg';
import Rus from '../../img/rus.webp';
import UZB from '../../img/uzb.png';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { MdArrowDropDown } from 'react-icons/md';
const Header = () => {
  const [selectedLang, setSelectedLang] = useState('UZ');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const languages = [
    { code: 'UZ', label: "O'zbekcha", flag: UZB },
    { code: 'RU', label: 'Русский', flag: Rus },
  ];

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop) {
        setShowCategories(false); // Desktopda toggle o'chadi
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCategories = () => {
    if (!isDesktop) {
      setShowCategories(!showCategories);
    }
  };

  return (
    <header className="bg-white shadow px-4 py-2 relative z-20">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <img src={Flib} alt="" />

        {/* Menu toggle */}
        <div
          className="flex items-center gap-3 cursor-pointer lg:hidden z-30"
          onClick={toggleCategories}
        >
          {showCategories ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <IoMdMenu className="text-2xl" />
          )}
          <span className="font-medium">{showCategories ? "Close" : "Menu"}</span>
        </div>

        <div className="flex-1 flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1">
          <select className="bg-transparent text-sm text-gray-700 outline-none">
            <option>All Categories</option>
            <option>Mobiles</option>
            <option>Fashion</option>
          </select>
          <input
            type="text"
            placeholder="Search Product, Brands and more..."
            className="flex-1 text-sm outline-none px-2"
          />
          <BiSearch className="text-xl text-gray-600 cursor-pointer" />
        </div>

        <div className="flex items-center gap-6 text-sm relative">
          <div className="flex items-center gap-1 cursor-pointer">
            <img src={Card} alt="" />
            <span>
              Cart <p className="font-bold"> $240</p>
            </span>
          </div>

          <div className="flex items-center gap-4 cursor-pointer">
            <img src={User} alt="" />
            <div className="leading-tight">
              <span className="block text-xs">ACCOUNT</span>
              <span className="block text-sm font-semibold">Sign in</span>
            </div>
          </div>

          <div className="relative">
            <div
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 cursor-pointer border border-gray-300 px-3 py-1 rounded text-sm text-gray-700"
            >
              <img
                src={languages.find((l) => l.code === selectedLang)?.flag}
                alt="flag"
                className="w-5 h-5 rounded-full object-cover"
              />
              <span>{languages.find((l) => l.code === selectedLang)?.label}</span>
              <MdArrowDropDown />
            </div>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow rounded z-10">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.code);
                      setShowLangMenu(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={lang.flag}
                      alt="flag"
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>{lang.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {!isDesktop && (
        <div
          className={`
            fixed top-0 right-0 h-full w-72 bg-gray-800 shadow-lg
            transform transition-transform duration-300 ease-in-out z-40
            ${showCategories ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="p-6 overflow-y-auto h-full">
            <div className="flex flex-col gap-6 text-white text-lg">
              <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap">
                <img src={Star} alt="" className="w-8 h-8" />
                <p>Top Offers</p>
              </span>
              <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap">
                <img src={Food} alt="" className="w-8 h-8" />
                <p>Mobilka</p>
              </span>
              <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap">
                <img src={Makeup} alt="" className="w-8 h-8" />
                <p>Mobiles</p>
              </span>
              <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap">
                <img src={Mobilka} alt="" className="w-8 h-8" />
                <p>Home</p>
              </span>
              <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap">
                <img src={Responsive} alt="" className="w-8 h-8" />
                <p>Electronics</p>
              </span>
              <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap">
                <img src={Shoe} alt="" className="w-8 h-8" />
                <p>Fashion</p>
              </span>
              <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap">
                <img src={Sofa} alt="" className="w-8 h-8" />
                <p>Beauty & Accessories</p>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Desktop: normal categories bar */}
      {isDesktop && (
        <div className="w-[90%] mx-auto mt-3 px-2 overflow-x-auto scrollbar-hide">
          <div className="flex gap-7 text-gray-700 min-w-max">
            <span className="text-blue-500 font-medium cursor-pointer flex items-center gap-2 whitespace-nowrap text-[16px]">
              <img src={Star} alt="" className="w-8 h-8" />
              <p>Top Offers</p>
            </span>
            <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap text-[16px]">
              <img src={Food} alt="" className="w-8 h-8" />
              <p className="font-bold">Mobilka</p>
            </span>
            <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap text-[16px]">
              <img src={Makeup} alt="" className="w-8 h-8" />
              <p className="font-bold">Mobiles</p>
            </span>
            <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap text-[16px]">
              <img src={Mobilka} alt="" className="w-8 h-8" />
              <p className="font-bold">Home</p>
            </span>
            <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap text-[16px]">
              <img src={Responsive} alt="" className="w-8 h-8" />
              <p className="font-bold">Electronics</p>
            </span>
            <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap text-[16px]">
              <img src={Shoe} alt="" className="w-8 h-8" />
              <p className="font-bold">Fashion</p>
            </span>
            <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap text-[16px]">
              <img src={Sofa} alt="" className="w-8 h-8" />
              <p className="font-bold">Beauty & Accessories</p>
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
