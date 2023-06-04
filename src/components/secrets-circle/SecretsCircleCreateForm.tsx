import { useFormik } from "formik";
import { motion } from "framer-motion";
import { tapAnimation } from "~/hooks/useAnimation";
import useModalStore from "~/stores/useModalStore";
import { api } from "~/utils/api";

export const SecretsCircleCreateForm = () => {
  const { mutateAsync, isLoading } = api.secretsCircle.create.useMutation();
  const { refetch, isRefetching } = api.secretsCircle.getAll.useQuery();
  const modal = useModalStore((state) => state);

  const formik = useFormik({
    initialValues: {
      phrase: "",
    },
    onSubmit: async (values) => {
      const data = {
        phrase: values.phrase,
      };
      await mutateAsync(data);
      await refetch();
      modal.close();
    },
  });

  const insertPlayer = (player: string) => {
    void formik.setFieldValue("phrase", formik.values.phrase + player);
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="mt-8 text-center text-xl text-white">
        Ajouter une phrase
      </h2>
      <div className="flex justify-center gap-3">
        <motion.button
          whileTap={tapAnimation}
          className="rounded-xl bg-secondary p-3 text-white"
          onClick={() => insertPlayer(" {player1}")}
        >
          Citer le joueur 1
        </motion.button>
        <motion.button
          whileTap={tapAnimation}
          className="rounded-xl bg-secondary p-3 text-white"
          onClick={() => insertPlayer(" {player2}")}
        >
          Citer le joueur 2
        </motion.button>
        
      </div>
      <div className="text-sm italic flex justify-center text-white">Si vous ne citez personne, tout le monde est concerné</div>
      <form className="flex flex-col gap-3 py-1" onSubmit={formik.handleSubmit}>
        <textarea
          rows={4}
          className="border-1 w-full rounded-lg border-secondary bg-background p-2 text-white"
          id="phrase"
          name="phrase"
          placeholder="Saisir votre phrase ici..."
          onChange={formik.handleChange}
          value={formik.values.phrase}
        />

        <button
          className="border-3 rounded-lg border-white bg-primary p-3 text-white"
          type="submit"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};
