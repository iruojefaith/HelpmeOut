
import LeftSection  from "./leftSection";
import RightSection from "./rightSection";


const page = () => {
  return (
     <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:px-24 py-16'>
      <LeftSection />
      <RightSection />
      </div>
      
  )
}

export default page