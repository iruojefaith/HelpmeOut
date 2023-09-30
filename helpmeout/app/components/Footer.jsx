const Footer = () => {
  return (
    <footer className=' bg-[#FFF6E5]'>
      <div className='contain pt-8 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20'>
        <div>
          <img src='./2.png'></img>
          <h3 className='text-[#543EE0]'>HelpmeOut</h3>
        </div>

        <div>
          <h4>Menu</h4>
          <br />
          <div className='flex flex-col'>
            <a href='#'>Home</a>
            <a href='#'>Converter</a>
            <a href='#'>How its Works</a>
          </div>
        </div>
        <div>
          <h4>About Us</h4>
          <br />
          <div className='flex flex-col'>
            <a href='#'>About</a>
            <a href='#'>Contact Us</a>
            <a href='#'>Privacy Policy</a>
          </div>
        </div>
        <div>
          <h4>Screen Record</h4>
          <br />
          <div className='flex flex-col'>
            <a href='#'>Browse Window</a>
            <a href='#'>Desktop</a>
            <a href='#'>Application</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
