import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiArrowLeft, HiOutlineCog6Tooth } from "react-icons/hi2";
import { CreateHaveNeverForm } from "~/components/haveNever/createHaveNeverForm";
import Modal from "~/components/shared/modal";

export default function Room() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div className="relative flex h-20 justify-center p-2">
        <h1 className="text-center text-3xl text-white">Désigne !</h1>
        <Link
          className="absolute left-1 top-2 rounded-xl p-3 text-white"
          href="/"
        >
          <HiArrowLeft size={25}></HiArrowLeft>
        </Link>
        <Link
          className="absolute right-1 top-2 animate-bounce rounded-xl p-3 text-white"
          href="/havenever/settings"
        >
          <HiOutlineCog6Tooth size={25}></HiOutlineCog6Tooth>
        </Link>
      </div>
      <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-background">
        <motion.button
          onClick={() => setModalIsOpen(true)}
          className="border-3 w-60 rounded-full border border-white bg-primary p-1 p-3 text-xl text-white text-white"
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Ajouter un salon
        </motion.button>
      </div>
      <Modal
        width={"100%"}
        className={"flex flex-col gap-8"}
        modalIsOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <h1 className="mt-8 text-center text-xl text-white">
          Créez un salon et rejoignez la partie
        </h1>
        
      </Modal>
    </>
  );
}
