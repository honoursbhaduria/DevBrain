import React, { useEffect, useState } from 'react';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div  className="eyes w-full h-screen relative ">
      <div   className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        
        {/* Eyes wrapper */}
        <div className="absolute flex gap-6 sm:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        h-40 sm:h-56 md:h-72 lg:h-96">

          {/* Left Eye */}
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-[15vw] lg:h-[15vw] 
                          flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 w-full h-full"
              >
                <div className="absolute top-1/2 left-[80%] -translate-y-1/2 
                                w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 
                                bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-[15vw] lg:h-[15vw] 
                          flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 w-full h-full"
              >
                <div className="absolute top-1/2 left-[80%] -translate-y-1/2 
                                w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 
                                bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Eyes;
