import { motion } from "framer-motion";
import useModalStore from "~/stores/useModalStore";
import { SecretsCircleCreateForm } from "./SecretsCircleCreateForm";


export const SecretsCircleCreateButton = () => {
  const modal = useModalStore((state) => state);
  return (
    <motion.button
      onClick={() =>
        modal.open(<SecretsCircleCreateForm></SecretsCircleCreateForm>, 380)
      }
      className="border-3 w-60 rounded-full border border-white bg-primary p-1 p-3 text-xl text-white text-white"
      whileTap={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      Ajouter une phrase
    </motion.button>
  );
};
