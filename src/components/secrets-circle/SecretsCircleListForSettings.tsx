import { type SecretsCircle } from "@prisma/client";
import { AnimatePresence } from "framer-motion";
import React, { type Key } from "react";
import { api } from "~/utils/api";
import Loader from "../shared/Loader";
import { SecretsCircleItemForSettings } from "./SecretsCircleItemForSettings";



export const SecretsCircleListForSettings = () => {

  const { data:phrases, isFetching, refetch, isRefetching, isLoading } = api.secretsCircle.getAll.useQuery();
  const { mutateAsync } = api.secretsCircle.deleteById.useMutation();

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
    {isLoading && <Loader></Loader>}
    <AnimatePresence>
      {phrases &&
        phrases.map((item: SecretsCircle, index: Key) => (
          <SecretsCircleItemForSettings key={index} id={item.id} phrase={item.phrase} handleDeleteWrapper={handleDeleteWrapper}></SecretsCircleItemForSettings>
        ))}
        </AnimatePresence>
    </>
  );
};
