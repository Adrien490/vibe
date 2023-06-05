import { type SecretsCircle, type HaveNever } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { CardItem } from "~/components/haveNever/CardItem";
import { ForwardButton } from "~/components/haveNever/ForwardButton";
import { ProgressBar } from "~/components/haveNever/ProgressBar";
import { SecretsCircleCardItem } from "~/components/secrets-circle/SecretsCircleCardItem";
import Loader from "~/components/shared/Loader";
import { api } from "~/utils/api";

export default function Start() {
  const [shuffledData, setShuffledData] = useState<SecretsCircle[]>([]);
  const [progress, setProgress] = useState(0);
  const [initialCardsCount, setInitialCardsCount] = useState(0);
  const [players, setPlayers] = useState([] as string[]);
  const { query } = useRouter();
  const { data, isLoading } = api.secretsCircle.getAllByCategory.useQuery({
    categoryId: parseInt(query["category"] as string),
  });

  function getRandomPlayer(players: string[]) {
    return players[Math.floor(Math.random() * players.length)] as string;
  }

  function replacePlayerVars(phrase: string, players: string[]) {
    let player1, player2;
    do {
      player1 = getRandomPlayer(players);
      player2 = getRandomPlayer(players);
    } while (player1 === player2);

    return phrase
      .replace("{player1}", `${player1}`)
      .replace("{player2}", `${player2}`);
  }

  useEffect(() => {
    const players = JSON.parse(
      Cookies.get("secretsCirclePlayers") || "[]"
    ) as string[];
    setPlayers(players);
  }, []);
  
  useEffect(() => {
    if (data !== undefined) {
      const newData = [...data]
        .sort(() => 0.5 - Math.random())
        .slice(0, parseInt(query["limit"] as string));
      setShuffledData(newData);
      setInitialCardsCount(newData.length);
    }
  }, [data, query, setShuffledData]);

  const handleClick = () => {
    if (shuffledData.length > 0) {
      setShuffledData(shuffledData.slice(1));
      setProgress(progress + 100 / initialCardsCount);
    }
  };
  return (
    <>
      {isLoading && <Loader></Loader>}
      <div className="relative flex h-20 justify-center bg-background p-3">
        <ProgressBar progress={progress}></ProgressBar>
        <Link
          className="absolute left-1 top-2 rounded-xl p-3 text-white"
          href="/secrets-circle/single-device"
        >
          <HiArrowLeft size={25}></HiArrowLeft>
        </Link>
      </div>
      <div className="game-container flex items-center justify-center bg-background p-3">
        {shuffledData[0] !== undefined && (
          <AnimatePresence>
            <SecretsCircleCardItem
              id={shuffledData[0].id}
              phrase={replacePlayerVars(shuffledData[0].phrase, players)}
              players={players}
            ></SecretsCircleCardItem>
          </AnimatePresence>
        )}
      </div>
      <div className="flex h-40 w-full flex-col items-center justify-center gap-3 overflow-hidden bg-background">
        <ForwardButton handleClick={handleClick}></ForwardButton>
      </div>
    </>
  );
}
