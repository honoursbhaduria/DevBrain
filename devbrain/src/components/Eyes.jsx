import React from 'react'

const Eyes = () => {
  return (
    <div className='eyes w-full h-screen '>
        <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className=' absolute flex gap-10 top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]  h-96  '>
        <div className='w-[15vw] flex items-center justify-center  h-[15vw] bg-zinc-100 rounded-full '>
            <div className='w-2/3 h-2/3 flex items-center justify-center bg-zinc-900 rounded-full '>
            <div className='w-1/4 h-1/4 bg-zinc-100 rounded-full '></div>
            </div>
        </div>
        <div className='w-[15vw] h-[15vw] flex items-center justify-center  bg-zinc-100 rounded-full '>
            <div className='w-2/3 h-2/3 flex items-center justify-center bg-zinc-900 rounded-full '>
            <div className='w-1/4 h-1/4 bg-zinc-100 rounded-full '></div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Eyes 