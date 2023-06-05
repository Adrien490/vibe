import { useFormik } from "formik";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import Link from "next/link";
import { HiPlus } from "react-icons/hi2";
import { tapAnimation } from "~/hooks/useAnimation";

interface SecretsCircleAddPlayerFormProps {
  handleSubmit: (values: FormValues) => void;
}
interface FormValues {
  player_name: string;
}

export const SecretsCircleAddPlayerForm = ({
  handleSubmit,
}: SecretsCircleAddPlayerFormProps) => {
  const formik = useFormik({
    initialValues: {
      player_name: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <form className="flex items-center gap-4" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        className="border-1 w-full rounded-full border-2 border-primary bg-background p-2 text-white"
        id="player_name"
        name="player_name"
        placeholder="Nom du joueur"
        onChange={formik.handleChange}
        value={formik.values.player_name}
      />

      <motion.button
        whileTap={tapAnimation}
        className="border-3 rounded-full border-white bg-primary p-3 text-white"
        type="submit"
      >
        <HiPlus size={20}></HiPlus>
      </motion.button>
      
    </form>
  );
};
