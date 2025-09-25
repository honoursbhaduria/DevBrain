import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
        <div className="w-full h-screen bg-zinc-900 pt-28">
            <div className="textsstructure">
                {["DevBrain :", "Honours__.._", "Bhadauria"].map((item, index) => (
          <div 
            key={index} 
            className="masker text-[7.5vw] px-20 leading-none tracking-tighter font-semibold"
          >
            <h1 className="hover:text-blue-400">{item}</h1>
          </div>
        ))}
                
                 
                </div>
        </div>


    </div>
  )
}

export default LandingPage

