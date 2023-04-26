import { type HaveNever } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { CardsList } from "~/components/haveNever/cardsList";
import { ForwardButton } from "~/components/haveNever/forwardButton";
import { ProgressBar } from "~/components/haveNever/progressBar";
import Loader from "~/components/shared/loader";
import { api } from "~/utils/api";

export default function Start() {
  const [shuffledData, setShuffledData] = useState<HaveNever[]>([]);
  const [progress, setProgress] = useState(0);
  const [initialCardsCount, setInitialCardsCount] = useState(0);
  const { query } = useRouter();
  const { data, isLoading } = api.haveNever.getAllByCategory.useQuery({
    categoryId: parseInt(query["category"] as string),
  });

  useEffect(() => {
    if (data !== undefined) {
      const newData = [...data]
        .sort(() => 0.5 - Math.random())
        .slice(0, parseInt(query["limit"] as string));
      setShuffledData(newData);
      setInitialCardsCount(data.length);
    }
  }, [data, query, setShuffledData]);

  const handleClick = () => {
    if (shuffledData.length > 0) {
      setShuffledData(shuffledData.slice(1));
      setProgress(progress + 100 / initialCardsCount); // Use initialCardsCount here
    }
  };
  return (
    <>
      {isLoading && <Loader></Loader>}
      <div className="relative flex h-20 justify-center bg-background p-3">
      <ProgressBar progress={progress}></ProgressBar>
        <Link
          className="absolute left-1 top-2 rounded-xl p-3 text-white"
          href="/havenever"
        >
          <HiArrowLeft size={25}></HiArrowLeft>
        </Link>
      </div>
      <div className="game-container flex items-center justify-center bg-background p-3">
      <AnimatePresence>
        <CardsList shuffledData={shuffledData}></CardsList>
        </AnimatePresence>
      </div>
      <div className="flex h-40 w-full flex-col items-center justify-center gap-3 overflow-hidden bg-background">
        <ForwardButton handleClick={handleClick}></ForwardButton>
      </div>
    </>
  );
}
