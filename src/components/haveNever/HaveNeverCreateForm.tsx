import { type HaveNeverCategory } from "@prisma/client";
import { useFormik } from "formik";
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
    <>
      <h2 className="mt-8 text-center text-xl text-white">
          Je n&apos;ai jamais ...
        </h2>
      <form className="flex py-1 flex-col gap-3" onSubmit={formik.handleSubmit}>
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
          className="border-1 w-full py-8 rounded-lg border-secondary bg-background text-white"
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
