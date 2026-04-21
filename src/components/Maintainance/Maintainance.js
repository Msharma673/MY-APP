// ComingSoon.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Maintainance.css";

const Maintainance = () => {
  return (
    <div className="coming-soon-container">
      <motion.div
        className="coming-soon-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Coming Soon
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          We are working hard to bring you amazing content. Stay tuned!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Maintainance;
