import React, { useState } from 'react';

const Featured = () => {
  const [hovered, setHovered] = useState(null); // track which card is hovered

  return (
    <div className='w-full py-20'>
      
      {/* heading */}
      <div className='w-full px-10 border-b-2 border-zinc-700 pb-20'>
        <h1 className='text-7xl capitalize'>Featured projects:</h1>
      </div>

      {/* cards + hover text */}
      <div className='px-20 relative'>
        <div className="cards w-full flex gap-10 mt-10">
          
          {/* card 1 */}
          <div
            className='cardcontainer relative w-1/2 h-[75vh] rounded-xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-95'
            onMouseEnter={() => setHovered('Designed')}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              className='w-full h-full object-cover'
              src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
              alt=""
            />
          </div>

          {/* card 2 */}
          <div
            className='cardcontainer relative w-1/2 h-[75vh] rounded-xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-95'
            onMouseEnter={() => setHovered('Creative')}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              className='w-full h-full object-cover'
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt=""
            />
          </div>
        </div>

        {/* shared hover text in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <h2
            className={`transition-all duration-500 text-white ${
              hovered ? 'opacity-100 scale-100 text-8xl font-extrabold' : 'opacity-0 scale-50'
            }`}
          >
            {hovered}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
