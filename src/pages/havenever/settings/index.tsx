import { HiArrowLeft, HiPlus } from "react-icons/hi2";
import Link from "next/link";
import { HaveNeverListForSettings } from "~/components/haveNever/HaveNeverListForSettings";
import { api } from "~/utils/api";
import { useState } from "react";
import Loader from "~/components/shared/Loader";
import { motion } from "framer-motion";
import { HaveNeverCreateForm } from "~/components/haveNever/HaveNeverCreateForm";
import useModalStore from "~/stores/useModalStore";

export default function Settings() {
  const modal = useModalStore((state) => state);
  const {
    data: haveNever,
    isFetching,
    refetch,
    isRefetching,
  } = api.haveNever.getAll.useQuery();
  const { mutateAsync, isLoading } = api.haveNever.deleteById.useMutation();
  const [search, setSearch] = useState("");

  // Update the search state
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

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
      {isLoading || isRefetching || (isFetching && <Loader></Loader>)}
      <div className="relative sticky top-0 z-20 flex h-20 justify-center p-3">
        <h2 className="m-0 text-center text-3xl text-white">Paramètres</h2>
        <Link
          href="/havenever"
          className=" absolute left-1 top-2 rounded-xl p-3 text-white"
        >
          <HiArrowLeft size={25}></HiArrowLeft>
        </Link>
      </div>
      <div className="game-container flex flex-col overflow-y-auto p-3">
        <div className="flex flex-col">
          <HaveNeverListForSettings
            search={search}
            haveNeverList={haveNever}
            handleDelete={handleDeleteWrapper}
          ></HaveNeverListForSettings>
        </div>
      </div>
      <div className="flex h-40 w-full items-center justify-center gap-3 overflow-hidden bg-background">
        <motion.button
          onClick={() =>
            modal.open(<HaveNeverCreateForm></HaveNeverCreateForm>, 400)
          }
          className="border-3 rounded-full border border-white bg-primary p-1 p-3 text-xl text-white text-white"
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <HiPlus size={25}></HiPlus>
        </motion.button>
        <input
          type="text"
          placeholder="Recherche..."
          value={search}
          onChange={handleSearch}
          className="w-60 rounded-full border-2 border-secondary bg-background p-3 text-black text-white"
        />
      </div>
    </>
  );
}
