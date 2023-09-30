import Image from "next/image";
import { collections } from "./data";

const Howitworks = () => {
  return (
    <div className=' my-16 '>
      <div className='contain mt-8 pb-12 grid grid-cols-1 sm:grid-cols-3 gap-10 '>
        {collections.map((item) => (
          <div className='flex flex-center flex-col '>
            <Image
              src={item.icon}
              alt='ICON'
              className=''
              width={50}
              height={50}
              priority
            />
            <h3 className='card_head_text'>{item.title}</h3>
            <p className='desc '>{item.desc}</p>
            <Image
              src={item.image}
              alt={item.imgalt}
              className=''
              width={300}
              height={300}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howitworks;
