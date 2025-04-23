import React from 'react';

const Header = () => {
  return (
    <header className="sticky flex justify-center top-0 h-24 bg-gray-800 text-white w-screen">
      {/* Logo on the left */}
      <div className="flex flex-row flex-wrap items-center justify-between min-w-[24rem] md:w-[48rem] 2xl-w-[74rem]">
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
        <div className="logo-left text-xl font-bold size-16">
          <img src={'./images/bmisp.png'} />
        </div>

      </div>
    </header>
  );
};

export default Header;