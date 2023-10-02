const Search = ({placeholder,}) => {
  return (
    <div>
      <div className='max-w-md mx-auto text-[#777575]'>
        <div className='relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-none overflow-hidden border bg-[#B6B3C6] border-[#C3C3C3]'>
          <div className='grid place-items-center h-full w-12  pl-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
          <input 
            className='peer h-full w-[50rem] outline-none text-sm  px-2 bg-transparent text-center'
            type='text'
            id='search'
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
