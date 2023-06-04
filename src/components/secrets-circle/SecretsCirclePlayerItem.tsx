import { motion } from "framer-motion";
import React from "react";
import { HiOutlineMinus } from "react-icons/hi2";
import { tapAnimation } from "~/hooks/useAnimation";

interface SecretsCirclePlayerItemProps {
  name: string;
  handleDeletePlayer: (playerName: string)=>void;
}

export const SecretsCirclePlayerItem = ({
  name,
  handleDeletePlayer
}: SecretsCirclePlayerItemProps) => {
  return (
    <motion.div className="flex bg-white relative w-48 h-12 rounded-full items-center p-3">
      
        <div className="font-semibold italic">{name}</div>
        <motion.div onClick={()=>handleDeletePlayer(name)} whileTap={tapAnimation} className="cursor-pointer absolute right-0 rounded-full bg-red-400 p-2 text-white">
        <HiOutlineMinus size={31} />
        </motion.div>
     
    </motion.div>
  );
};
