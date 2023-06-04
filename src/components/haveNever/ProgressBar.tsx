import { motion } from "framer-motion";
import React from "react";

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="mt-3 h-2 w-1/2 rounded-xl bg-gray-300">
      <motion.div
        className="h-2 bg-primary"
        style={{ width: `${Math.min(progress, 100)}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(progress, 100)}%` }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </div>
  );
};
