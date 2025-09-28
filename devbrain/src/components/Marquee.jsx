import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] overflow-hidden relative">
      <div className="flex border-t-2 border-b-2 border-zinc-300 uppercase -mb-1 pt-4 gap-10 whitespace-nowrap">
        
        {/* Wrap the text group and animate it */}
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, 
            ease: "linear",
          }}
        >

          {/* First copy */}
          <h1 className="text-[22vw] leading-none px-10 font-semibold">
            initializing DevBrain v1.0
          </h1>
          <h1 className="text-[22vw] leading-none px-10 font-semibold">
            initializing DevBrain v1.0
          </h1>
          <h1 className="text-[22vw] leading-none px-10 font-semibold">
            initializing DevBrain v1.0
          </h1>

          {/* Second copy (for seamless loop) */}
          <h1 className="text-[22vw] leading-none px-10 font-semibold">
            initializing DevBrain v1.0
          </h1>
          <h1 className="text-[22vw] leading-none px-10 font-semibold">
            initializing DevBrain v1.0
          </h1>
          <h1 className="text-[22vw] leading-none px-10 font-semibold">
            initializing DevBrain v1.0
          </h1>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Marquee;

