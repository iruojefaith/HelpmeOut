import { features } from "./data";
import Image from "next/image";

const Features = () => {
  return (
    <div className='p-4 md:px-24 py-16'>
      <div className='flex flex-col text-center mb-4 '>
        <h2 className='mb-2 text-3xl font-bold text-[#100a42]'>Features</h2>
        <p className='mb-2'>Key Highlights of Our Extension</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
        <div className=' gap-2'>
          {features.map((item, id) => (
            <div className=' flex flex-row gap-3' key={id}>
              <span className='flex justify-center align-middle my-3'>
                <Image
                  src={item.image}
                  alt='newcollections Img'
                  className='object-contain '
                  width={50}
                  height={50}
                  priority
                />
              </span>

              <div className='flex flex-center flex-col p-4'>
                <p className='text-3xl text-[#100a42] sm:text-xl'>
                  {item.title}
                </p>
                <p className='text-sm text-[#8A8A8A] sm:text-l'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Image src='/Video Repository.png' width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Features;
