import React, { useState } from 'react';

const Cards = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full py-20 px-20 relative">
      {/* heading */}
      <div className="w-full border-b-2 border-zinc-700 pb-10 mb-10">
        <h1 className="text-5xl capitalize">Development Records</h1>
      </div>

      {/* table */}
      <div className="mb-20">
        <table className="w-full border-collapse border border-zinc-700 text-left">
          <thead>
            <tr>
              <th className="w-1/2 border border-zinc-700 p-4">Project Name</th>
              <th className="w-1/4 border border-zinc-700 p-4">Status</th>
              <th className="w-1/4 border border-zinc-700 p-4">Lead Developer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-700 p-4">Project Alpha</td>
              <td className="border border-zinc-700 p-4">In Progress</td>
              <td className="border border-zinc-700 p-4">John Doe</td>
            </tr>
            <tr>
              <td className="border border-zinc-700 p-4">Project Beta</td>
              <td className="border border-zinc-700 p-4">Completed</td>
              <td className="border border-zinc-700 p-4">Jane Smith</td>
            </tr>
            <tr>
              <td className="border border-zinc-700 p-4">Project Gamma</td>
              <td className="border border-zinc-700 p-4">Pending Review</td>
              <td className="border border-zinc-700 p-4">Alice Lee</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cards  */}
      <div className="flex gap-10 h-[75vh]">
        {/* big one side wala */}
        <div
          className="card relative w-1/2 rounded-xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-95"
          onMouseEnter={() => setHovered('JAI')}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
            alt="JAI"
          />
        </div>

        <div className="flex flex-col gap-10 w-1/2 h-full">
          {/* two cards small one  */}
          <div
            className="card relative h-1/2 rounded-xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-95"
            onMouseEnter={() => setHovered('SHREE')}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt="Top Small Card"
            />
          </div>

          {/* small wale ka function text wlaa */}
          <div
            className="card relative h-1/2 rounded-xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-95"
            onMouseEnter={() => setHovered('RAM_')}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt="Bottom Small Card"
            />
          </div>
        </div>
      </div>

      {/* Hover text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <h2
          className={`transition-all duration-500 text-white ${
            hovered ? 'opacity-100 scale-100 text-6xl font-extrabold' : 'opacity-0 scale-50'
          }`}
        >
          {hovered}
        </h2>
      </div>
    </div>
  );
};

export default Cards;
