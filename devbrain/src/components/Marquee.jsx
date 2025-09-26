import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div className="w-full py-10  rounded-tl-3xl rounded-tr-3xl  bg-[#004D43] overflow-hidden relative">

      <div className="flex border-t-2 border-b-2 border-zinc-300  uppercase  -mb-1 pt-4 gap-10 animate-marquee  overflow-hidden whitespace-nowrap">
        <motion.h1 className="text-[10vw] leading-none px-10 font-semibold " >I am honours bhadauria</motion.h1>
        <motion.h1 className="text-[10vw] leading-none px-10 font-semibold ">I am honours bhadauria</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
