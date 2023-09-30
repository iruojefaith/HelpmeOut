import React from "react";

const Header = () => {
  return (
    <div className=' flex flex-col gap-3'>
      <div className='flex flex-center flex-col bg-[#d3bfb49f] p-4'>
        <p className='text-base text-[#8A8A8A] sm:text-xl'>{item.title}</p>
        <p>{item.desc}</p>
      </div>
      <div>
        <span>
          <Image
            src='./header.png'
            alt='newcollections Img'
            className=''
            width={50}
            height={50}
            priority
          />
          <Image
            src='./header-1.png'
            alt='newcollections Img'
            className=''
            width={50}
            height={50}
            priority
          />
        </span>
        <Image
          src='./header-2.png'
          alt='newcollections Img'
          className=''
          width={50}
          height={50}
          priority
        />
      </div>
    </div>
  );
};

export default Header;
