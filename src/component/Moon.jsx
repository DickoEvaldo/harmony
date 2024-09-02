import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const Moon = ({ handleToggle }) => {
  return (
    <motion.div
      className="mt-20 cursor-pointer z-10 absolute"
      style={{ x: "830%" }}
      animate={{
        scale: 1,
        y: [1000, 0],
        rotate: [0, 20, -20, 0],
      }}
      transition={{
        y: { duration: 1.5, ease: "easeOut" },
        rotate: {
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        },
      }}
      onClick={handleToggle}
      exit={{ y: [0, -400], transition: { duration: 3 } }}
    >
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        height={80}
        width={70}
      >
        <path
          d="M30.9,20.8c-2.2,6.1-8,10.2-14.5,10.2C7.9,31,1,24.2,1,15.8C1,8.7,5.9,2.6,12.9,1c0.3-0.1,0.7,0,1,0.3
    c0.2,0.3,0.3,0.7,0.2,1c-0.5,1.4-0.8,2.9-0.8,4.4c0,7.3,6,13.2,13.4,13.2c1,0,2.1-0.1,3.1-0.4c0.3-0.1,0.7,0,1,0.3
    C31,20.1,31.1,20.5,30.9,20.8z"
          fill="#FFC10A"
        />
      </svg>
    </motion.div>
  );
};

export default Moon;
