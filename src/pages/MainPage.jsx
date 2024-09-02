import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sun from "../component/sun";
import Moon from "../component/Moon";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloudIcon from "@mui/icons-material/Cloud";
import Mountain from "../component/Mountain";
import Baloon from "../component/Baloon";
import "../App.css";
import "../index.css";
import Header from "../component/Header";

const Background = ({ isDay }) => (
  <motion.div
    className={`w-full min-h-screen absolute -z-10`}
    style={{
      background: isDay
        ? "linear-gradient(to bottom, #00bfff, #dbffff)"
        : "linear-gradient(to bottom, #17153B, #2e236c)",
    }}
    initial={{ y: 1000 }}
    animate={{ y: 0 }}
    exit={{ y: -1000 }}
    transition={{
      duration: 0.6,
      ease: "easeInOut",
    }}
  />
);

function MainPage() {
  const [isSunVisible, setIsSunVisible] = useState(true);

  const handleToggle = () => {
    setIsSunVisible(!isSunVisible);
  };

  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col min-h-screen">
        <AnimatePresence mode="wait">
          <Background
            key={isSunVisible ? "day-bg" : "night-bg"}
            isDay={isSunVisible}
          />
        </AnimatePresence>
        <Header isSunVisible={isSunVisible}></Header>
        <AnimatePresence mode="wait">
          {isSunVisible ? (
            <Sun key="sun" handleToggle={handleToggle} />
          ) : (
            <Moon key="moon" handleToggle={handleToggle} />
          )}
        </AnimatePresence>
        <div className="flex ml-8 mt-8 ">
          <p
            className={`text-6xl font-bold ${
              isSunVisible ? "text-black" : "text-white"
            }`}
          >
            Hi, I'm Dicko Evaldo
          </p>
        </div>
        <div className="flex ml-8 mt-2 text-black">
          <p
            className={`text-2xl font-semibold ${
              isSunVisible ? "text-black" : "text-white"
            }`}
          >
            I'm a Software Engineer
          </p>
        </div>
        <motion.div
          animate={{
            x: [-1000, 1000],
            y: [0, 200, 0, -200, 0, 150, 0],
          }}
          transition={{
            duration: 45,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
        >
          <CloudIcon
            style={{
              position: "absolute",
              fontSize: 150,
              color: "white",
              stroke: isSunVisible ? "lightGray" : "darkGray",
              strokeWidth: 0.5,
            }}
          ></CloudIcon>
        </motion.div>
        <motion.div
          animate={{
            x: [-1000, 1000],
            y: [0, 100, 0, -100, 0, 150],
          }}
          transition={{
            duration: 60,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 8,
          }}
        >
          <CloudIcon
            style={{
              position: "absolute",
              fontSize: 150,
              color: "white",
              stroke: isSunVisible ? "lightGray" : "darkGray",
              strokeWidth: 0.5,
            }}
          ></CloudIcon>
        </motion.div>
        <Mountain></Mountain>
        <div className="flex bg-green-700 self-end w-full h-16 mt-auto -z-10"></div>
        <motion.div
          animate={{
            y: [-700, -710, -700, -710, -700],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <Baloon top={150} left={700} text="About"></Baloon>
          <Baloon top={100} left={1000} text="Projects"></Baloon>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default MainPage;
