const Footer = () => {
  return (
    <footer className=' bg-[#100a42] w-[100%] p-4 md:px-24 py-16 text-white '>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20'>
        <div className='flex flex-row gap-3 justify-center align-middle place-content-center'>
          <span className='flex justify-center align-middle my-2 text-center'>
            <img className='w-[30px] h-[30px]' src='./footer.png'></img>
          </span>
          <h3 className='my-2'>HelpmeOut</h3>
        </div>

        <div>
          <h4>Menu</h4>
          <br />
          <div className='flex flex-col text-xs text-[#999898] '>
            <a className='mb-3' href='#'>
              Home
            </a>
            <a className='mb-3' href='#'>
              Converter
            </a>
            <a className='mb-3' href='#'>
              How its Works
            </a>
          </div>
        </div>
        <div>
          <h4>About Us</h4>
          <br />
          <div className='flex flex-col text-xs text-[#999898]'>
            <a className='mb-3' href='#'>
              About
            </a>
            <a className='mb-3' href='#'>
              Contact Us
            </a>
            <a className='mb-3' href='#'>
              Privacy Policy
            </a>
          </div>
        </div>
        <div>
          <h4>Screen Record</h4>
          <br />
          <div className='flex flex-col text-xs text-[#999898]'>
            <a className='mb-3' href='#'>
              Browse Window
            </a>
            <a className='mb-3' href='#'>
              Desktop
            </a>
            <a className='mb-3' href='#'>
              Application
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
