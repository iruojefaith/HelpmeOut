"use client"

import {BiSolidEdit} from 'react-icons/bi';
import { LuCopy } from 'react-icons/lu';
import {BsTelegram, BsWhatsapp, BsFacebook} from 'react-icons/bs';
import Button from '@/app/components/Button';



const LeftSection = () => {
  return (
    <div className='flex flex-col sm:p-4'>
       <h2 className='font-bold text-3xl'>Your video is ready!</h2>
       <div className='my-8 '>
        <label className='text-xs font-medium text-[#727272]'>Name</label>
        <span className='flex gap-4 align-middle justify-middle '>
         <p className='text-[#605C84] text-lg '>Untitled_Video_20232509 </p>
         <BiSolidEdit className="text-2xl mt-1"/>
        </span>
       </div>   
       <div  className='flex relative '>
                 <div className='relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-none overflow-hidden border bg-[#B6B3C6] border-[#B6B3C6]'>
                  <input 
                    className='peer h-full w-[50rem] outline-none text-sm  px-2 bg-transparent text-center'
                    type='text' placeholder='enter email of reciever'/>
        </div>
      
        <span className='absolute flex align-middle right-3 justify-center border rounded-lg border-[#605C84] px-4 py-2 mt-2 text-xs gap-2 bg-[#605C84] text-white'>
          <Button text="Send"/> 
        </span>
        </div> 
            <div className='my-8 '>
                <label htmlFor=""> Video Url</label>
              <div className='flex justify-center relative'>
                 <div className='relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-none overflow-hidden border bg-[#FAFAFA] border-[#C3C3C3]'>
                  <input 
                    className='peer h-full w-[50rem] outline-none text-sm  px-2 bg-transparent text-center'
                    type='text'  />
        </div>
        <div className='absolute flex align-middle justify-center right-3 border rounded-lg border-black p-2 mt-2 text-xs gap-2'>
        <LuCopy />
           <Button text="Copy"/> 
        </div>
      </div>
          
        </div>
        <div >
          <lable >Share Your Video</lable>
          <div className='flex gap-3 mt-3'>
            <div className='flex gap3 border-black border rounded-sm py-2 px-4'>
              <BsFacebook className="fill-blue-500 text-xl"/>
              <p>Facebook</p>
            </div>
            <div className='flex gap3 border-black border rounded-sm py-2 px-4'>
              <BsWhatsapp className="fill-green-500 text-xl"/>
              <p>WhatsAPP</p>
            </div>
            <div className='flex gap3 border-black border rounded-sm py-2 px-4'>
              <BsTelegram className="fill-blue-600 text-xl"/>
              <p>Telegram</p>
            </div>
          </div>
        </div>
      </div>
  )
}
export default LeftSection
