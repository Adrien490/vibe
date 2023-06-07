import { type HaveNeverCategory } from "@prisma/client";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { tapAnimation } from "~/hooks/useAnimation";
import useModalStore from "~/stores/useModalStore";
import { api } from "~/utils/api";

export const HaveNeverCreateForm = () => {
  const { data } = api.haveNeverCategories.getAll.useQuery();
  const { mutateAsync, isLoading } = api.haveNever.create.useMutation();
  const { refetch, isRefetching } = api.haveNever.getAll.useQuery();
  const modal = useModalStore((state) => state);

  const formik = useFormik({
    initialValues: {
      phrase: "",
      categoryId: "",
    },
    onSubmit: async (values) => {
      const data = {
        phrase: values.phrase,
        categoryId: parseInt(values.categoryId),
      };
      await mutateAsync(data);
      await refetch();
      modal.close();
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <h2 className="mt-8 text-center text-xl text-white">
        Je n&apos;ai jamais ...
      </h2>
      <form className="flex flex-col gap-3 py-1" onSubmit={formik.handleSubmit}>
        <textarea
          rows={3}
          className="border-1 w-full rounded-lg border-secondary bg-background p-2 text-white"
          id="phrase"
          name="phrase"
          placeholder="Eu 3 plans culs en même temps"
          onChange={formik.handleChange}
          value={formik.values.phrase}
        />

        <select
          className="border-1 text-center h-20 w-full rounded-lg border-secondary bg-background text-white"
          id="categoryId"
          name="categoryId"
          onChange={formik.handleChange}
          value={formik.values.categoryId}
        >
          <option value="">Sélectionner une catégorie</option>
          {data &&
            data.map((category: HaveNeverCategory) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>

        <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2">
  <motion.button
    whileTap={tapAnimation}
    className="border-3 rounded-lg border-white bg-primary w-48 px-3 py-5 text-white"
    type="submit"
  >
    Ajouter
  </motion.button>
</div>



      </form>
      </div>
  );
};
