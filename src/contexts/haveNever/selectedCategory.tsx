import { createContext, useState, useContext } from "react";

const SelectedCategoryContext = createContext<{
  selectedCategoryId: number | undefined;
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number | undefined>>;
}>({
  selectedCategoryId: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSelectedCategoryId: () => {},
});

export const useSelectedCategory = () => {
  return useContext(SelectedCategoryContext);
};

export const SelectedCategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | undefined>(undefined);

  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategoryId, setSelectedCategoryId }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
};
