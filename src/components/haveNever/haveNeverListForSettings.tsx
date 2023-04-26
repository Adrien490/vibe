import { type HaveNever } from "@prisma/client";
import { motion } from "framer-motion";
import React, { type Key } from "react";
import { HiOutlineMinus } from "react-icons/hi2";
import { listVariants } from "~/hooks/useAnimation";
import { api } from "~/utils/api";
import Loader from "../shared/loader";

export const HaveNeverListForSettings: React.FC = () => {
  const { data, isFetching, refetch } = api.haveNever.getAll.useQuery();
  const { mutateAsync, isLoading } = api.haveNever.deleteById.useMutation();

  const handleDeleteWrapper = (id: number) => {
    const deleteItem = async () => {
      await handleDelete(id);
    };
  
    void deleteItem();
  };
  const handleDelete = async (id: number) => {
    try {
      await mutateAsync({ id });
      await refetch();
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };
  return (
    <>
      {isFetching || (isLoading && <Loader></Loader>)}
      {data &&
        data.map((item: HaveNever, index: Key) => (
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
    </>
  );
};
