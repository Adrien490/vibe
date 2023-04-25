import { HiArrowLeft } from "react-icons/hi2";
import { motion } from "framer-motion";
import { type Key, useState } from "react";
import Link from "next/link";
import Modal from "~/components/shared/modal";
import { HaveNeverListForSettings } from "~/components/haveNever/haveNeverListForSettings";
import { CreateHaveNeverForm } from "~/components/haveNever/createHaveNeverForm";

export default function Settings() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
    
      <div className="relative sticky top-0 z-20 flex h-20 justify-center bg-background p-3">
        <h1 className="m-0 text-center text-3xl text-white">Paramètres</h1>
        <Link
          href="/havenever"
          className="absolute left-1 top-2 rounded-xl p-3 text-white"
        >
          <HiArrowLeft className="h-5 w-5"></HiArrowLeft>
        </Link>
      </div>
      <div className="game-container flex flex-col overflow-y-auto bg-background p-3">
        <div className="flex flex-col">
          <HaveNeverListForSettings></HaveNeverListForSettings>
        </div>
      </div>
      <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-background">
        <motion.button
          onClick={() => setModalIsOpen(true)}
          className="border-3 w-60 rounded-full border border-white bg-primary p-1 p-3 text-xl text-white text-white"
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Ajouter une phrase
        </motion.button>
      </div>
      <Modal
        width={"100%"}
        className={"flex flex-col gap-8"}
        modalIsOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <h1 className="mt-8 text-center text-xl text-white">
          Je n'ai jamais ...
        </h1>
        <CreateHaveNeverForm onClose={()=>setModalIsOpen(false)}></CreateHaveNeverForm>
      </Modal>
    </>
  );
}
