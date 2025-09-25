import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 flex justify-between items-center w-full fixed top-0 left-0 px-20 py-8 flex justify-between items-center bg-zinc-900 z-50'>
        <div className='logo text-xl font-bold '>DEVBRAIN</div>
        
        <div className='links flex gap-6'>
        {["Services", "About Me", "About Services", "Insights"].map((item, index) => (
         <a
            key={index}
            href="/"
            className={`text-lg capitalize font-light hover:text-blue-500 ${index === 3 ? "ml-32" : ""}`}  // used to make diffrence in the navbar components 
          >
            {item}
          </a>
        ))}
      </div>
        
        </div>
  )
}


export default Navbar
