import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
        
        <div className="w-full  flex flex-col bg-zinc-900 pt-24">
            <div className='text-md font-light tracking-tight leading-none text-zinc-500'>{'[ACCESS GRANTED]' }</div>
            <div className="textsstructure">
                {["Design.", "Develop .. ", "Deliver .. ."].map((item, index) => (
          <div 
            key={index} 
            className="masker text-[7.5vw] px-20 leading-none tracking-tighter font-semibold"
          >
            <h1 className="hover:text-blue-400">{item}</h1>
          </div>
          
        ))}
        
                
                 
                </div>
            

            
        </div>

        <div className="border-t border-zinc-800 w-full h-px mt-10 flex justify-between px-20 py-5">
            {["<script>alert('DevBrain')</script>", "Initializing... ██████░░░░ 42%"].map((item, index) => (
                <p
                key={index}
                className="text-md font-light tracking-tight leading-none text-zinc-400"
                >
                {item}
                </p>
            ))}
        </div>


        <div className='start '>
                <div className='px-5 py-1 border-2 rounded-full'> start exploring  </div>
        </div>


    </div>
    


  )
}

export default LandingPage

