import Image from "next/image";
import Button from "./components/Button";
import axios from 'axios'
import {saveAs} from "file-saver";
import Link from "next/link";


const Header = () => {
  const handleClick = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      saveAs(res.data, filename)
    })
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:px-24 py-16'>
      <div className='flex flex-col sm:p-4'>
        <h1 className='text-5xl sm:text-6xl font-bold mb-6'>
          Show Them <br /> Don&sbquo;t Just Tell
        </h1>
        <p className='text-[#8d8d8d] mb-6'>
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Link className="btn" href='https://drive.google.com/file/d/12469b0G0FtFVtsWB0q1eQMhuY7UYQQJu/view?usp=sharing'>
           <Button  text='install HelpmeOut &rarr;' />
        </Link>
      </div>
      <div className='flex flex-row gap-3 mt-12 md:mt-0 justify-center align-middle'>
        <span className='flex flex-col gap-3 justify-center align-middle'>
          <Image
            src='/header.png'
            alt='newcollections Img'
            className=''
            width={200}
            height={200}
            priority
          />
          <span>
            <Image
              src='/header-1.png'
              alt='newcollections Img'
              className='absolute z-30'
              width={200}
              height={200}
              priority
            />
            <Image
              src='/grid136a.png'
              alt='newcollections Img'
              className='relative -left-7 '
              width={200}
              height={200}
              priority
            />
          </span>
        </span>
        <span>
          <Image
            src='/header-2.png'
            alt='header img2'
            className='absolute z-30'
            width={200}
            height={200}
            priority
          />
          <Image
            src='/grid136.png'
            alt='header img2'
            className='relative -top-8 sm:left-8 left-4'
            width={200}
            height={200}
            priority
          />
        </span>
      </div>
    </div>
  );
};

export default Header;
