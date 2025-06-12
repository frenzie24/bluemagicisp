import React from 'react';

const Header = () => {

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };


  return (
    <header className="z-10 sticky flex justify-center top-0 h-24 bg-gray-800 text-gray-300 w-full">
      {/* Logo on the left */}
      <div className='w-full flex flex-row flex-wrap justify-around items-center min-w-[20rem] sm-w-[20rem] md:w-[48rem] xl:w-[60rem] 2xl-w-[72rem]'>
       

        {/* Navigation bar */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-gray-300">
                Shop
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
          </ul>
        </nav>

         <div className="logo-left text-xl font-bold size-16">
          <img src={'./images/bmisp.png'} className='rounded-md' />
        </div>

        {/* Logo on the right */}
        <div className="logo-left text-xl font-bold size-20">
           <div className='bg-cover bg-[url(/images/bmspin.webp)] size-20 origin-center animate-[spin_4000ms_linear_reverse_infinite] flex flex-row justify-center items-center '>
                <img className='h-8 origin-center animate-[spin_4000ms_linear_infinite] ' src="/images/bmlogo.webp" />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;