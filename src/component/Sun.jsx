import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const Sun = ({ handleToggle }) => {
  return (
    <motion.div
      className="cursor-pointer absolute"
      style={{ x: "570%" }}
      initial={{
        y: -260, // Start above the viewport
      }}
      animate={{
        y: 80, // End position (adjust as needed)
        scale: 1,
        rotate: [
          0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150,
          160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290,
          300, 310, 320, 330, 340, 350, 360,
        ],
      }}
      transition={{
        y: { duration: 1.5, ease: "easeOut" }, // Specific transition for y movement
        rotate: {
          duration: 1,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 1,
        },
      }}
      onClick={handleToggle}
      exit={{ y: -300, transition: { duration: 1.5 } }}
    >
      <svg
        enableBackground="new 0 0 272 272"
        height={100}
        viewBox="0 0 272 272"
        width={100}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M136 61.13c-41.24 0-74.87 33.63-74.87 74.87s33.63 74.87 74.87 74.87 74.87-33.63 74.87-74.87-33.63-74.87-74.87-74.87zm23.13-6.3a86.1 86.1 0 00-44-.61L137 9l22.13 45.83zM159.13 217.17L137 263l-21.84-45.22a86.1 86.1 0 0044-.61zm58.99-59.35a84.08 84.08 0 000-43.64L264 136l-45.88 21.82zM51 136a83.42 83.42 0 002.88 21.81L8 136l45.88-21.81A83.42 83.42 0 0051 136zm176.51 89.8l-48.62-17a84.85 84.85 0 0031.33-31.71l17.29 48.71zM93.86 62.75A85 85 0 0063 92.76L46.49 46.2l47.37 16.55zm133.65-16.55l-17.29 48.7a84.85 84.85 0 00-31.33-31.71l48.62-17zm-133.65 163.05L46.49 225.8 63 179.24a85 85 0 0030.86 30.01z"
          fill="orange"
        />
      </svg>
    </motion.div>
  );
};

export default Sun;
