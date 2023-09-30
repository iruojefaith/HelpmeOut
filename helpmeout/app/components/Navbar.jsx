"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className='  bg-[#100a42] p-3 text-white '>
        <div className='contain flex items-center flex-wrap'>
          <Link href='/' className='inline-flex items-center p-2 mr-4 '>
            <img src='./2.png'></img>
            <span className='text-xlfont-bold uppercase tracking-wide font-garamond'>
              HelpMeOut
            </span>
          </Link>
          <button
            className=' inline-flex p-3 bg-[#ddcec5af] rounded lg:hidden text-[#8A8A8A] ml-auto hover:text-[#8A8A8A] outline-none'
            onClick={handleClick}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>

          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto md:gap-16`}
          >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link
                href='/'
                className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-[#8A8A8A] font-normal items-center justify-center bg-[#D3BFB4] hover:text-[#8A8A8A] '
              >
                Features
              </Link>
              <Link
                href='/shop'
                className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-[#8A8A8A] font-normal items-center justify-center bg-[#D3BFB4] hover:text-[#8A8A8A]'
              >
                How Its Works
              </Link>
            </div>
            <div className='flex flex-col md:flex-row '>
              <Link href='/Login' className='p-2 cursor-pointer'>
                Get Stated
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
