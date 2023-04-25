import { type HaveNever } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HiArrowLeft, HiForward } from "react-icons/hi2";
import { useUtils } from "~/hooks/useUtils";
import { api } from "~/utils/api";


export default function Start() {
  const [progress, setProgress] = useState(0);
  const [initialCardsCount, setInitialCardsCount] = useState(0);
  const { shuffle } = useUtils();
  const router = useRouter();
const {data} = api.haveNever.getAllByCategory(parseInt(router.query.categoryId))
 

  useEffect(() => {
    if (haveNeverCards) {
      const cards = shuffle([...haveNeverCards]).slice(0, router.query.limit);
      setInitialCardsCount(cards.length); // Set initial cards count here
    }
  }, [haveNeverCards]);

  const handleClick = () => {
    if (shuffledCards.length > 0) {
      setShuffledCards(shuffledCards.slice(1));
      setProgress(progress + 100 / initialCardsCount); // Use initialCardsCount here
    }
  };
  

  return (
    <>
      <div className="relative h-20 flex justify-center p-3">
        <div className="mt-3 rounded-xl w-1/2 bg-gray-300 h-2">
          <motion.div
            className="bg-primary h-2"
            style={{ width: Math.min(progress, 100) + "%" }}
            initial={{ width: 0 }}
            animate={{ width: Math.min(progress, 100) + "%" }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
        <Link
          className="absolute left-1 top-2 text-white p-3 rounded-xl"
          href="/havenever"
        >
          <HiArrowLeft className="h-5 w-5"></HiArrowLeft>
        </Link>
      </div>
      <div className="game-container flex justify-center items-center p-3">
        {shuffledCards.map((item, index) => (
          
            <motion.div
            key={item.id}
              className="absolute w-3/5 flex-col gap-5 shadow-xl border-2 h-2/5 bg-primary border-2 border-secondary p-3 rounded-3xl flex justify-center items-center"
              style={{ zIndex: -index }}
            >
              <h1 className="p-4 text-center text-xl text-white">
                Je n'ai jamais
              </h1>
              <div className="text-white italic text-center break-words">
                {item.phrase}
              </div>
            </motion.div>
          
        ))}
      </div>
      <div className="items-center flex-col gap-3 overflow-hidden h-40 w-full flex justify-center">
        <motion.button
          onClick={handleClick}
          className="text-xl rounded-full bg-primary text-white p-4 border p-1 w-24 flex justify-center border-3 text-white border-white"
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <HiForward className="w-6 h-6"></HiForward>
        </motion.button>
      </div>
    </>
  );
}
