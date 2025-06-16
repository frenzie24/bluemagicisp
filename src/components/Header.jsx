import React from 'react';
import { Link, useLocation } from 'react-router';
import BMSPinner from './BMSpinner';

const Header = () => {

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
const currentPage = useLocation().pathname;

  const renderCursor = (path) => {

    return currentPage === path && <span className="blinking-cursor"></span>;
  };


  return (
    <header className="z-10 sticky flex justify-center top-0 h-24 bg-slate-800/90 text-slate-300 w-full shadow-xl">
      {/* Logo on the left */}
      <div className='w-full flex flex-row flex-wrap justify-around items-center '>
       

        {/* Navigation bar */}
        <nav>
          <ul className="flex space-x-4">
            <li className='hover:animate-bounce'>
              <a href="/home" className="hover:text-slate-300">
                Home
              </a>
            </li>
                 <li className='hover:animate-bounce'>
              <a href="/shop" className="hover:text-slate-300">
                Shop
              </a>
            </li>
                 <li className='hover:animate-bounce'>
              <a href="/faq" className="hover:text-slate-300">
                FAQ
              </a>
            </li>
                 <li className='hover:animate-bounce'>
              <a href="/contact" className="hover:text-slate-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

      
        {/* Logo on the right */}
        <div className="logo-left text-xl font-bold ">
           <BMSPinner size='size-20'/>
        </div>
      </div>
    </header>
  );
};

export default Header;