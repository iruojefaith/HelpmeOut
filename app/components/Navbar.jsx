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
      <nav className='text-[#100a42] p-3 w-full md:px-24 border-b-[1px] border-[#dfddf5]'>
        <div className='grid items-center md:grid-cols-3 grid-cols-2'>
          <Link href='/' className='inline-flex items-center p-2 gap-1 '>
            <img src='./2.png'></img>
            <span className=' tracking-wide font-bold'>HelpMeOut</span>
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
            }   w-full lg:grid lg:w-auto md:gap-64 justify-between md:col-span-2 md:grid-cols-2 `}
          >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto '>
              <Link
                href='/'
                className='lg:inline-flex lg:w-auto w-full px-3 py-2  font-normal items-center justify-center  hover:text-[#8A8A8A] '
              >
                Features
              </Link>
              <Link
                href='/shop'
                className='lg:inline-flex lg:w-auto w-full px-3 py-2  font-normal items-center justify-center  hover:text-[#8A8A8A]'
              >
                How Its Works
              </Link>
            </div>
            <div className='flex flex-col md:flex-row font-bold md:ml-32'>
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
