import { HiArrowLeft, HiOutlineCog6Tooth } from "react-icons/hi2";
import Link from "next/link";
import { CardsNumberSelectionList } from "~/components/haveNever/cardsNumberSelectionList";
import { StartButton } from "~/components/haveNever/startButton";
import { useState } from "react";
import { CategorySelectionList } from "~/components/haveNever/categorySelectionList";
import { type HaveNeverCategory } from "@prisma/client";

export default function HaveNever() {
  const [selectedCard, setSelectedCard] = useState<number>(50);
  
  const [selectedCategory, setSelectedCategory] = useState<
    HaveNeverCategory | undefined
  >(undefined);

  return (
    <div className="h-screen bg-background">
      <div className="relative flex h-20 justify-center p-2">
        <h1 className="text-center text-3xl text-white">Je n'ai jamais</h1>
        <Link
          className="absolute left-1 top-2 rounded-xl p-3 text-white"
          href="/"
        >
          <HiArrowLeft size={25}></HiArrowLeft>
        </Link>
        <Link
          className="absolute right-1 top-2 rounded-xl p-3 text-white"
          href="/havenever/settings"
        >
          <HiOutlineCog6Tooth size={25}></HiOutlineCog6Tooth>
        </Link>
      </div>
      <div className="game-container hide-scroll-bar flex flex-col gap-6 overflow-y-auto p-3">
        <div className="border-1 flex w-full items-center gap-7 overflow-auto whitespace-nowrap p-2 px-3">
          <CategorySelectionList
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
        <StartButton selectedCategory={selectedCategory} selectedCard={selectedCard}></StartButton>
      </div>
    </div>
  );
}
