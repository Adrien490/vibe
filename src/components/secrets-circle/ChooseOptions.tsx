import { type SecretsCircleCategory } from "@prisma/client";
import Link from "next/link";
import React, { useState } from "react";
import useModalStore from "~/stores/useModalStore";
import { api } from "~/utils/api";
import { CardsNumberSelectionList } from "../shared/CardsNumberSelectionList";
import { CategorySelectionList } from "../shared/CategorySelectionList";
import Loader from "../shared/Loader";

export const ChooseOptions = () => {
  const modal = useModalStore((state) => state);
  const [selectedCard, setSelectedCard] = useState<number>(50);

  const [selectedCategory, setSelectedCategory] = useState<
    SecretsCircleCategory | undefined
  >(undefined);

  const { data, isFetching } = api.secretsCircleCategory.getAll.useQuery();
  const randomCategory: SecretsCircleCategory = {
    id: 0,
    name: "Aléatoire",
  };

  const dataWithRandomCategory = data ? [randomCategory, ...data] : [];
  return (
    <>
    {isFetching && <Loader></Loader>}
    <div className="flex flex-col gap-8 p-3">
      <div className="flex justify-center italic text-white">
        Choisir une catégorie
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <CategorySelectionList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={dataWithRandomCategory}
        ></CategorySelectionList>
      </div>
      <div className="flex justify-center italic text-white">
        Choisir un nombre de cartes
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <CardsNumberSelectionList
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        ></CardsNumberSelectionList>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <Link
          onClick={() => modal.close()}
          className="border-3 w-60 rounded-full border border-white bg-primary p-1 p-3 text-center text-xl text-white text-white"
          href={`/secrets-circle/single-device/start?category=${
            selectedCategory?.id ? selectedCategory?.id : 0
          }&limit=${selectedCard}`}
        >
          Lancer
        </Link>
      </div>
    </div>
    </>
  );
};
