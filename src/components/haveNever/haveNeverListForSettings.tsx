import { type HaveNever } from "@prisma/client";
import { motion } from "framer-motion";
import React, { type Key } from "react";
import { listVariants } from "~/hooks/useAnimation";
import { api } from "~/utils/api";
import Loader from "../shared/loader";
import { HaveNeverDeleteButton } from "./HaveNeverDeleteButton";

export const HaveNeverListForSettings: React.FC = () => {
  const { data, isFetching, refetch } = api.haveNever.getAll.useQuery();
  const { mutateAsync, isLoading } = api.haveNever.deleteById.useMutation();
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
    
      {isFetching || isLoading && <Loader></Loader>}
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
              <HaveNeverDeleteButton
                id={item.id}
                handleDelete={()=> void handleDelete}
              ></HaveNeverDeleteButton>
            </div>
          </motion.div>
        ))}
    </>
  );
};
