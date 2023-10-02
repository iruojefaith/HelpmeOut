import Search from "../components/Search";

const Header = () => {
  return (
    <div className='text-[#100a42] p-3 w-full md:px-24 border-b-[1px] border-[#dfddf5] '>
      <span className='flex  justify-start align-middle place-self-center my-26 py-10'>
        <img className='w-[30px] h-[30px]' src='./5.png'></img>
        <h3 className='my-2 font-semibold'>HelpmeOut</h3>
      </span>

      <div className='flex flex-col md:flex-row gap-4 justify-between text-black mb-10'>
        <span>
          <h2 className='font-bold text-2xl'>Hello&#44;</h2>
          <p>Here are your recorded videos</p>
        </span>
        <Search placeholder='Search for a particular video'/>
      </div>
    </div>
  );
};

export default Header;
