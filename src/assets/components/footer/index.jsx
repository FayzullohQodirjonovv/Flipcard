import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-[50px] bg-[#0c1a2b] text-white pt-10 pb-6 px-6 md:px-20 text-sm">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 border-b border-gray-700 pb-6">
        {/* ABOUT */}
        <div>
          <h3 className="font-bold mb-2">ABOUT</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Flipkart Wholesale</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 className="font-bold mb-2">HELP</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
            <li>Report Infringement</li>
          </ul>
        </div>

        {/* POLICY */}
        <div>
          <h3 className="font-bold mb-2">POLICY</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Return Policy</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>EPR Compliance</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-bold mb-2">SOCIAL</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Facebook</li>
            <li>YouTube</li>
            <li>Twitter</li>
          </ul>
        </div>

        {/* MAIL US */}
        <div>
          <h3 className="font-bold mb-2">MAIL US:</h3>
          <p className="text-gray-300 leading-6">
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
            Outer Ring Road,<br />
            Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-gray-400 text-xs mt-4">
        <div className="space-x-3 mb-2 sm:mb-0">
          <span>Become a Seller</span> | 
          <span>Advertise</span> | 
          <span>Gift Cards</span> | 
          <span>Help Center</span>
        </div>
        <div>© 2007-2022 Flipkart.com</div>
      </div>
    </footer>
  );
};

export default Footer;
