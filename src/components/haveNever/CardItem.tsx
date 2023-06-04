import { motion } from "framer-motion";
import React from "react";

interface CardItemProps {
  id: number;
  phrase: string;
}

export const CardItem = ({ id, phrase }: CardItemProps) => {
  
  return (
    <motion.div
      key={id}
      className="absolute flex h-80 w-3/5 flex-col items-center justify-center gap-3 overflow-y-auto rounded-3xl border-2 border-white bg-primary p-3 shadow-2xl"
    >
      <h2 className="p-4 text-center text-xl text-white">
        Je n&apos;ai jamais
      </h2>
      <div className="break-words text-center italic text-white">{phrase}</div>
    </motion.div>
  );
};
