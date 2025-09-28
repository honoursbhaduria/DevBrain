import React from 'react'

const About = () => {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      
    
      <div className="w-full flex flex-col md:flex-row justify-between items-start px-10 gap-16">
        
        <div className="md:w-1/2 text-left">
          <h1 className="text-[2rem] md:text-[2.5rem] font-semibold leading-relaxed tracking-tight">
            DevBrain is a hub for developers and learners, offering resources, 
            tutorials, and projects to sharpen skills, explore tech, and 
            build real-world apps.
          </h1>
        </div>

       
        <div className="md:w-1/2 flex flex-col justify-center">
          <ul className="space-y-6 text-lg font-medium">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              Free tutorials & guides
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              Real-world projects
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              Developer resources
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              Community-driven learning
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full mt-20 border-t border-[#a1b562] pt-10 px-10 flex flex-col md:flex-row justify-between items-start gap-16">
        
       
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold">OUR Approach</h2>
          <button className="flex gap-3 items-center px-8 py-4 uppercase bg-zinc-900 text-white rounded-full mt-8 hover:bg-zinc-800 transition">
            Read more
            <div className="w-2.5 h-2.5 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        
        {/* Right image */}
        <div className="md:w-1/2 h-[60vh] rounded-2xl overflow-hidden">
          <img 
            src="/approach.png"   // directly from public folder
            alt="Our Approach" 
            className="w-full h-full object-cover" 
          />
        </div>

      </div>
    </div>
  )
}

export default About
