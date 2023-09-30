import Image from "next/image";
import { collections } from "./data";

const Howitworks = () => {
  return (
    <div className=' mb-16 p-4 md:px-24 py-8'>
      <div className='contain mt-8 grid grid-cols-1 sm:grid-cols-3 gap-10 '>
        {collections.map((item) => (
          <div className='flex flex-col justify-center align-middle text-center'>
            <span className='flex justify-center align-middle md:my-3'>
              <Image
                src={item.icon}
                alt='ICON'
                className=''
                width={50}
                height={50}
                priority
              />
            </span>

            <h3 className='text-2xl text-[#100a42] font-bold mb-3'>
              {item.title}
            </h3>
            <p className='desc mb-3 '>{item.desc}</p>
            <span className='flex justify-center align-middle my-3'>
              <Image
                src={item.image}
                alt={item.imgalt}
                className=''
                width={300}
                height={300}
                priority
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howitworks;
