import { type HaveNeverCategory } from "@prisma/client";
import { useFormik } from "formik";
import { api } from "~/utils/api";
import Loader from "../shared/loader";

interface CreateHaveNeverFormProps {
  onClose: () => void;
}

export const CreateHaveNeverForm = ({ onClose }: CreateHaveNeverFormProps) => {
  const { data } = api.haveNeverCategories.getAll.useQuery();
  const { mutateAsync, isLoading } = api.haveNever.create.useMutation();
  const { refetch } = api.haveNever.getAll.useQuery();

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
      onClose();
    },
  });

  return (
    <>
      {isLoading && <Loader></Loader>}
      <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
        <textarea
          rows={2}
          className="border-1 w-full rounded-lg border-secondary bg-background p-2 text-white"
          id="phrase"
          name="phrase"
          placeholder="Eu 3 plans culs en même temps"
          onChange={formik.handleChange}
          value={formik.values.phrase}
        />

        <select
          className="border-1 w-full py-3 rounded-lg border-secondary bg-background text-white"
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

        <button
          className="border-3 rounded-lg border-white bg-primary p-3 text-white"
          type="submit"
        >
          Ajouter
        </button>
      </form>
    </>
  );
};
