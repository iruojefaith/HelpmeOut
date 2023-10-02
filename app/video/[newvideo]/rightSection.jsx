import React from 'react'

const RightSection = ({src}) => {
  const base = `https://chrome-extension-o1tz.onrender.com/upload/${src}.webm`;
  return (
    <div> <div className='border-[#B6B3C6] rounded-2xl border p-4 '>
                      <video
              autoPlay
              playsInline
              controls
              width={"100%"}
              height={"473px"}
            >
              <source src={base} type="video/webm" />
            </video>

          <div className='mt-3'>
            <h3>How to create Facebook Ad listing</h3>
            <p className='uppercase text-[#a5a4a4]'>September 23, 2023</p>
          </div>
          </div>
          <h3>Transcript</h3>
    </div>
  )
}

export default RightSection