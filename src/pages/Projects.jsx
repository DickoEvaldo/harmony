import React from "react";
import Header from "../component/Header";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../index.css";

const ProjectCard = ({ title, description }) => (
  <div className="flex w-full md:w-1/2 lg:w-1/4 border border-black rounded-lg p-4 flex-col border-4">
    <h3 className="font-semibold text-xl mb-2">{title}</h3>
    <p className="text-left mb-4">{description}</p>
    <div className="flex justify-between mt-auto">
      <div className="flex items-center gap-2 cursor-pointer mt-2">
        <GitHubIcon />
        <span className="font-semibold">Code</span>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <OpenInNewIcon />
        <span className="font-semibold">Demo</span>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const letters = "PROJECTS".split("");

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: "linear-gradient(to bottom, #00bfff, #dbffff)" }}
    >
      <Header isSunVisible={true} />
      <div className="font-bold text-5xl flex justify-center align-middle my-8">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            whileHover={{ y: -10 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-8">
        <ProjectCard
          title="Posture Police"
          description="Prototype web application that uses a device's camera and FaceAPI to detect if the user is slouching. Developed during the CSESoc x DevSoc 2024 Flagship Hackathon with the theme of 'Health'."
        />
        <ProjectCard
          title="My Fridge"
          description="a cross-platform mobile app that scans grocery receipts, analyzes purchases, and provides health impacts and recipes. Implemented OCR using Microsoft Azure Vision AI, processed data with OpenAI API for health recommendations, and utilized PostgreSQL for complex user data storage."
        />
        <ProjectCard
          title="Corniche"
          description=" e-commerce web application integrating various APIs for a seamless shopping experience. Utilized Firebase to store user shopping data, enhancing functionality and user interaction across the platform."
        />
      </div>
    </div>
  );
};

export default Projects;
