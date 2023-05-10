import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import Modal from "~/components/shared/modal";
import { api } from "~/utils/api";

export default function Room() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const {data: users, isFetching} = api.user.getAll.useQuery()
    console.log(users)
  return (
    <>
      <div className="relative flex h-20 justify-center p-2">
        <h2 className="text-center text-3xl text-white">Désigne !</h2>
        <Link
          className="absolute left-1 top-2 rounded-xl p-3 text-white"
          href="/"
        >
          <HiArrowLeft size={25}></HiArrowLeft>
        </Link>
      </div>
      <div className="h-[calc(100vh_-_240px)] flex flex-col py-8 gap-8 items-center overflow-y-auto">
        <div className="text-white text-xl">
        Liste des participants
        </div>
        <div className="h-96 flex flex-col py-5 w-5/6 border-2 border-primary gap-3 items-center w-full mx-5 text-white">
            
        </div>
        
      </div>
      <div className="flex h-40 w-full items-center justify-center overflow-hidden">
        <motion.button
          onClick={() => setModalIsOpen(true)}
          className="border-3 w-60 rounded-full border border-white bg-primary p-1 p-3 text-xl text-white text-white"
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
         Lancer
        </motion.button>
      </div>
      <Modal
        width={"100%"}
        className={"flex flex-col gap-8"}
        modalIsOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <h2 className="mt-8 text-center text-xl text-white">
          Créez un salon et rejoignez la partie
        </h2>
        
      </Modal>
    </>
  );
}
