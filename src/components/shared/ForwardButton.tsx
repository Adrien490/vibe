import { type HaveNever } from "@prisma/client";
import { motion } from "framer-motion";
import React from "react";
import { HiForward } from "react-icons/hi2";

interface ForwardButtonProps {
  handleClick: () => void;
}
export const ForwardButton = ({ handleClick }: ForwardButtonProps) => {
  return (
    <motion.button
      onClick={() => handleClick()}
      className="border-3 flex w-24 justify-center rounded-full border border-white bg-primary p-1 p-4 text-xl text-white text-white"
      whileTap={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <HiForward className="h-6 w-6"></HiForward>
    </motion.button>
  );
};
