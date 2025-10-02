import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { FiGithub } from "react-icons/fi";


function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["get jam ", "Create Jam", "Profile", "your Jam"];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-5 md:px-20 py-6 flex justify-between items-center">
     {/* logo devbrain wala  */}
        <div className="logo text-xl font-bold text-blue-400">DEVBRAIN</div>

        <div className="hidden md:flex gap-8">
          {links.map((item, index) => (
            <a
              key={index}
              href="/"
              className={`text-base capitalize font-light text-zinc-300 hover:text-blue-400 transition ${
                index === 3 ? "ml-32" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/*  TOOggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-blue-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={24} />}
        </button>
      </div>

      {/*  dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-5 py-6 bg-zinc-900 border-t border-zinc-800">
          {links.map((item, index) => (
            <a
              key={index}
              href="/"
              className="text-base capitalize font-light text-zinc-300 hover:text-blue-400 transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          
          <a href="https://github.com/honoursbhaduria" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2 hover:text-blue-400 transition px-5 py-2 border-2 rounded-full text-sm border-t-2">
              <FiGithub size={18} />
              <span>GitHub</span>
            </div>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
