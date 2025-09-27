import React from 'react'

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 pt-28 flex flex-col">
        
      <div className="w-full flex flex-col bg-zinc-900 pt-25 px-5 sm:px-10 lg:px-20">
        <div className="text-sm sm:text-md font-light tracking-tight leading-none text-zinc-500">
          {'[ACCESS GRANTED]'}

        </div>

        <div className="textsstructure space-y-4 sm:space-y-6">
          {["Design.", "Develop .. ", "Deliver .. ."].map((item, index) => (
            <div 
              key={index} 
              className="masker text-[15vw] sm:text-[15vw] md:text-[5vw] lg:text-[4.5vw] leading-none tracking-tighter font-semibold"
            >
              <h1 className="hover:text-blue-400 flex items-center gap-3 sm:gap-4 flex-wrap">
                


                {item.includes("Develop") && (
                      <img 
                        src="https://avatars.githubusercontent.com/u/185463007?v=4" 
                       className="w-10 h-10 sm:w-14 sm:h-14 object-contain rounded-lg"                      />
                    )}

                  {item}

                {/*  i liked this shit gola */}
                {item.includes("Develop") && (
                  <>
                    <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-blue-500 animate-pulse shadow-[0_0_20px_#3b82f6]"></div>

                 
                  </>
                  
                )}
              </h1>
            </div>
            
          ))}
        </div>
      </div>

      <div className="border-t border-zinc-800 w-full h-px mt-10 flex flex-col sm:flex-row justify-between gap-3 px-5 sm:px-10 lg:px-20 py-5">
        {[
          "<script>alert('DevBrain')</script>", 
          "Initializing...  69%"
        ].map((item, index) => (
          <p
            key={index}
            className="text-xs capitalize mt-auto sm:text-xs md:text-md font-light tracking-tight leading-none text-zinc-400 break-words"
          >
            {item}
          </p>
        ))}
        
      </div>

      
      
      <div className="start flex justify-center sm:justify-start px-5 sm:px-10 lg:px-20 mt-6">
        <div className="flex items-center gap-3 px-6 py-2 border-2 rounded-full text-sm sm:text-base text-zinc-200 hover:bg-zinc-800 cursor-pointer transition">
          
          
          <span className="text-blue-400 font-bold animate-pulse drop-shadow-[0_0_10px_#3b82f6]">
            {'=>'}
          </span>

          start exploring
        </div>
      </div>
    </div>
  )
}

export default LandingPage
