import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import "../App.css";
import "../index.css";

const Header = ({ isSunVisible }) => {
  return (
    <div className="w-full h-14 flex px-8 py-2 justify-between font-bold text-2xl">
      <div
        className={`gap-5 flex self-end ${
          isSunVisible ? "text-black" : "text-white"
        }`}
      >
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="https://github.com/DickoEvaldo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon style={{ fontSize: 35 }} />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/in/dicko-evaldo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon style={{ fontSize: 37 }} />
          </a>
        </motion.div>
      </div>
      <div
        className={`self-center flex gap-8 ${
          isSunVisible ? "text-black" : "text-white"
        }`}
      >
        <Link to="/">
          <motion.div
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
          >
            About
          </motion.div>
        </Link>
        <Link to="/projects">
          <motion.div
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
          >
            Projects
          </motion.div>
        </Link>
        <Link to="/contact">
          <motion.div
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
          >
            Contacts
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
