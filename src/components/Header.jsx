import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between h-24 p-2 bg-gray-800 text-white">
      {/* Logo on the left */}
      <div className="logo-left text-xl font-bold size-16">
       <img src={'./images/bmisp.png'} />
      </div>

      {/* Navigation bar */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#shop" className="hover:text-gray-300">
              Shop
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-gray-300">
              FAQ
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
        </ul>
      </nav>

      {/* Logo on the right */}
      <div className="logo-right text-xl font-bold">
        RightLogo
      </div>
    </header>
  );
};

export default Header;