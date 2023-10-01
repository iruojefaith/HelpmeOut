import React from "react";

const SavedVideo = () => {
  return (
    <div className='p-4 md:px-24 md:py-16'>
      <p className='font-medium'>Recent Files</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 justify-center align-middle mt-4'>
        <div className='border-[#B6B3C6] rounded-2xl border p-4 '>
          <img className='rounded-lg' src='./videoframe1.png' alt='' />
          <div className='mt-3'>
            <h3>How to create Facebook Ad listing</h3>
            <p className='uppercase text-[#a5a4a4]'>September 23, 2023</p>
          </div>
        </div>
        <div className='border-[#B6B3C6] rounded-2xl border p-4 '>
          <img className='rounded-lg' src='./videoframe.png' alt='' />
          <div className='mt-3'>
            <h3>How to create Facebook Ad listing</h3>
            <p className='uppercase text-[#a5a4a4]'>September 23, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedVideo;
