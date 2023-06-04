import { motion } from "framer-motion";
import React from "react";
import { HiOutlineMinus } from "react-icons/hi2";
import { listVariants } from "~/hooks/useAnimation";

interface SecretsCircleItemForSettingsProps {
  id: number;
  phrase: string;
  handleDeleteWrapper: (id: number) => void;
}

export const SecretsCircleItemForSettings = ({
  id,
  phrase,
  handleDeleteWrapper,
}: SecretsCircleItemForSettingsProps, key: string) => {
  return (
      <motion.div
        key={id}
        className="flex border-b border-white p-2"
        variants={listVariants}
        initial="hidden"
        animate="visible"
        custom={key}
        exit="hidden"
      >
        <div className="flex w-4/5 items-center break-words p-4 text-white">
          {phrase}
        </div>
        <div className="flex w-1/5 items-center justify-end p-4">
          <button
            onClick={() => handleDeleteWrapper(id)}
            className="rounded-full bg-red-400 p-2 text-white"
          >
            <HiOutlineMinus className="text-xl" />
          </button>
        </div>
      </motion.div>
  );
};
