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
    <div className="eyes w-full h-screen">
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-96">

          {/* left eye */}
          <div className="w-[15vw] flex items-center justify-center h-[15vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 w-full h-full"
              >
                <div className="absolute top-1/2 left-[80%] -translate-y-1/2 w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* right eye  */}
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 w-full h-full"
              >
                <div className="absolute top-1/2 left-[80%] -translate-y-1/2 w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Eyes;
