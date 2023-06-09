import { HiArrowLeft, HiOutlineCog6Tooth } from "react-icons/hi2";
import Link from "next/link";
import { CardsNumberSelectionList } from "~/components/shared/CardsNumberSelectionList";
import { useState } from "react";
import { CategorySelectionList } from "~/components/shared/CategorySelectionList";
import { type HaveNeverCategory } from "@prisma/client";
import { api } from "~/utils/api";
import Loader from "~/components/shared/Loader";

export default function HaveNever() {
  const [selectedCard, setSelectedCard] = useState<number>(50);

  const [selectedCategory, setSelectedCategory] = useState<
    HaveNeverCategory | undefined
  >(undefined);

  const { data, isFetching } = api.haveNeverCategories.getAll.useQuery();
  const randomCategory: HaveNeverCategory = {
    id: 0,
    name: "Aléatoire",
  };

  const dataWithRandomCategory = data ? [randomCategory, ...data] : [];

  return (
    <>
    {isFetching && <Loader></Loader>}
      <div className="relative flex h-20 justify-center p-2">
        <h2 className="text-center text-3xl text-white">Je n&apos;ai jamais</h2>
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
      <div className="game-container hide-scroll-bar flex flex-col gap-6 overflow-y-auto p-3">
        <div className="border-1 flex w-full items-center gap-7 overflow-auto whitespace-nowrap p-2 px-3">
          <CategorySelectionList
            categories={dataWithRandomCategory}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          ></CategorySelectionList>
        </div>

        <div className="hide-scroll-bar flex h-3/5 w-full flex-col items-center gap-3 gap-5 overflow-auto whitespace-nowrap px-2 ">
          <div className="flex justify-center text-xl text-white">
            Nombre de cartes :
          </div>
          <div className="hide-scroll-bar flex w-full items-center gap-4 overflow-x-auto whitespace-nowrap p-2">
            <CardsNumberSelectionList
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            ></CardsNumberSelectionList>
          </div>
        </div>
      </div>
      <div className="flex h-40 w-full flex-col items-center justify-center gap-3 overflow-hidden">
      <Link
      className="border-3 w-60 rounded-full border border-white bg-primary p-1 p-3 text-center text-xl text-white text-white"
      href={`/havenever/start?category=${selectedCategory?.id ? selectedCategory?.id : 0}&limit=${selectedCard}`}
    >
      Lancer
    </Link>
      </div>
    </>
  );
}
