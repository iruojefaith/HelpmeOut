import {FcGoogle} from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs';
import Link from "next/link";

const Login = () => {
  return (
   <div className='p-4 md:px-24 '> 
     <div className='flex justify-start align-middle place-self-center  py-5'>
              <img className='w-[30px] h-[30px]' src='./5.png'></img>
              <h3 className='my-2 font-semibold'>HelpmeOut</h3>
     </div>
    <div class='w-full md:inset-0 h-[calc(100%-1rem)] flex justify-center align-middle '>
       
            <div class='relative w-full max-w-md max-h-full '>
            <div class='px-6 py-3 lg:px-8'>
             <div className='text-center text-sm px-6'>
               <h2 className='font-bold text-3xl'>Log in or Sign up</h2>
             <p className='text-[#434343] my-4'>Join millions of others in sharing successful moves on HelpMeOut.</p>
             </div>
            
              <form class='space-y-6' action='#'>
               <div>
                 
                  <button
                    class=' border border-[#000] text-[#000] text-sm rounded-lg focus:ring-black focus:border-black flex flex-row align-middle justify-center gap-3 w-full p-2.5 '>
                    <span className='flex align-middle justify-center '><FcGoogle className="fill-blue-500 text-2xl"/></span>  Continue with Google
                  </button>
                </div>
                <div>
                 
                   <button
                    class=' border border-[#000] text-[#000] text-sm rounded-lg focus:ring-black focus:border-black flex flex-row align-middle justify-center gap-3 w-full p-2.5 '><span className='flex align-middle justify-center '><BsFacebook className="fill-blue-500 text-2xl"/></span>Continue with Facebook
                  </button>
                </div>
               <img src='./loginhr.png' alt='hrline' className='w-full'></img>
                <div>
                  <label
                    htmlfor='email'
                    class='block mb-2 text-sm font-medium text-[#100a42] dark:text-[#100a42]'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    class=' border border-[#100a42] text-[#100a42] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-[#100a42]'
                    placeholder='name@company.com'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlfor='password'
                    class='block mb-2 text-sm font-medium text-[#100a42]'
                  >
                    Your password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    class='border border-[#100a42] text-[#100a42] text-sm rounded-lg focus:ring-[#100a42]focus:border-blue-500 block w-full p-2.5  dark:placeholder-[#100a42] '
                    required
                  />
                </div>
               
                <button 
                  type='submit'
                  class='w-full text-white bg-[#100a42] hover:bg-[#37316e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#100a42]/100 dark:hover:bg-[#100a42] dark:focus:ring-blue-800'
                >
                 <Link href='/recordedvideo'> SignUp
                 </Link>
               
                </button>
               
              </form>
            </div>
          </div>
        </div>
      </div>
  
    
  )
}

export default Login