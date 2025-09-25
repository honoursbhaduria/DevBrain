import React from 'react'

function Navbar() {
  return (
    <div className='w-full px-20 py-8 flex justify-between items-center '>
        <div className='logo text-xl font-bold '>DEVBRAIN</div>
        
        <div className='links flex gap-6'>
        {["Services", "Our Me", "About Services", "Insights"].map((item, index) => (
          <a key={index} href="/" className='text-md font-semibold hover:text-blue-500'>
            {item}
          </a>
        ))}
      </div>
        
        </div>
  )
}

export default Navbar