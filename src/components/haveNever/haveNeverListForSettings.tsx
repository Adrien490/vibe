import { type HaveNever } from "@prisma/client";
import { AnimatePresence } from "framer-motion";
import React, { type Key } from "react";
import { api } from "~/utils/api";
import Loader from "../shared/loader";
import { HaveNeverItemForSettings } from "./haveNeverItemForSettings";


export const HaveNeverListForSettings = () => {

  const { data:haveNever, isFetching, refetch, isRefetching } = api.haveNever.getAll.useQuery();
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
    {isFetching || isRefetching && <Loader></Loader>}
    <AnimatePresence>
      {haveNever &&
        haveNever.map((item: HaveNever, index: Key) => (
          <HaveNeverItemForSettings key={index} id={item.id} phrase={item.phrase} handleDeleteWrapper={handleDeleteWrapper}></HaveNeverItemForSettings>
        ))}
        </AnimatePresence>
    </>
  );
};
