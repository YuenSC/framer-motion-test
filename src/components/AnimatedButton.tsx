import { motion } from "framer-motion";
import React from "react";

const OFFSET = 2;

const AnimatedButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <motion.button
        whileTap={{ x: OFFSET, y: OFFSET }}
        transition={{ type: "tween", duration: 0.05 }}
        className="group h-full w-full bg-black px-4 py-2 text-white"
      >
        <div className="group-hover:opacity-80">{children}</div>
      </motion.button>
      <div
        style={{ left: OFFSET, top: OFFSET }}
        className="absolute -z-10 h-full w-full border border-black"
      />
    </div>
  );
};

export default AnimatedButton;
