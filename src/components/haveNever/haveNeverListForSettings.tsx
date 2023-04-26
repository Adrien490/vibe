import { type HaveNever } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import React, { type Key } from "react";
import { HiOutlineMinus } from "react-icons/hi2";
import { listVariants } from "~/hooks/useAnimation";

interface HaveNeverListForSettingsProps{
  haveNever: HaveNever[]  | undefined
  handleDeleteWrapper: (id:number)=>void
}

export const HaveNeverListForSettings = ({haveNever, handleDeleteWrapper}: HaveNeverListForSettingsProps) => {
  
  return (
    <>
    <AnimatePresence>
      {haveNever &&
        haveNever.map((item: HaveNever, index: Key) => (
          <motion.div
            key={index}
            className="flex border-b border-white p-2"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            exit="hidden"
          >
            <div className="flex w-4/5 items-center break-words p-4 text-white">
              {item.phrase}
            </div>
            <div className="flex w-1/5 items-center justify-end p-4">
              <button
                onClick={() => handleDeleteWrapper(item.id)}
                className="rounded-full bg-red-400 p-2 text-white"
              >
                <HiOutlineMinus className="text-xl" />
              </button>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
    </>
  );
};
