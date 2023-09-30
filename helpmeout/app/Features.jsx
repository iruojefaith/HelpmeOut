import { features } from "./data";

const Features = () => {
  return (
    <div className='contain pt-8 pb-12 flex-center flex-col'>
      <h2 className='sub_head_text mb-4'>Features</h2>
      <p>Key Highlights of Our Extension</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        {features.map((item) => (
          <div className=' flex flex-col gap-3'>
            <Image
              src={item.image}
              alt='newcollections Img'
              className=''
              width={50}
              height={50}
              priority
            />
            <div className='flex flex-center flex-col bg-[#d3bfb49f] p-4'>
              <p className='text-base text-[#8A8A8A] sm:text-xl'>
                {item.title}
              </p>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
        <div>
          <Image src='./Video Repositry.png' />
        </div>
      </div>
    </div>
  );
};

export default Features;
