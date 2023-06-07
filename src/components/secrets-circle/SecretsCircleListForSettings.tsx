import { type SecretsCircle } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import React, { type Key } from "react";
import { HiOutlineMinus } from "react-icons/hi2";
import { listVariants } from "~/hooks/useAnimation";

interface SecretsCircleListForSettingsProps {
  secretsCircleList: SecretsCircle[] | undefined;
  handleDelete: (id: number) => void;
  search: string;
}

export const SecretsCircleListForSettings = ({
  secretsCircleList,
  handleDelete,
  search,
}: SecretsCircleListForSettingsProps) => {
  const filteredList = secretsCircleList?.filter((item) =>
    item.phrase
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase()
      .includes(
        search
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLocaleLowerCase()
      )
  );

  return (
    <>
      <AnimatePresence>
        {filteredList &&
          filteredList.map((item: SecretsCircle, index: Key) => (
            <motion.div
              key={item.id}
              className="flex border-b border-white p-2"
              variants={listVariants}
              initial={"visible"}
              animate={"visible"}
              exit={"hidden"}
            >
              <div className="flex w-4/5 items-center break-words p-4 text-white">
                {item.phrase}
              </div>
              <div className="flex w-1/5 items-center justify-end p-4">
                <button
                  onClick={() => handleDelete(item.id)}
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
