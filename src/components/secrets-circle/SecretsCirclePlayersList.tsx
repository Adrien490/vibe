import { AnimatePresence, motion } from "framer-motion";
import Cookies from "js-cookie";
import React from "react";
import { listVariants } from "~/hooks/useAnimation";
import { SecretsCirclePlayerItem } from "./SecretsCirclePlayerItem";

interface SecretsCirclePlayersListProps {
  players: string[];
  setPlayers: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SecretsCirclePlayersList = ({
  players,
  setPlayers,
}: SecretsCirclePlayersListProps) => {
  const handleDeletePlayer = (playerName: string) => {
    setPlayers((prevPlayers) => {
      const newPlayers = prevPlayers.filter((player) => player !== playerName);
      Cookies.set("secretsCirclePlayers", JSON.stringify(newPlayers));
      return newPlayers;
    });
  };

  return (
    <>
      <AnimatePresence>
        {players.map((player, index) => (
          <motion.div
            className="flex justify-center"
            key={index}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            exit="hidden"
          >
            <SecretsCirclePlayerItem
              handleDeletePlayer={handleDeletePlayer}
              key={index}
              name={player}
            ></SecretsCirclePlayerItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};
