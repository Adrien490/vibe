import { motion } from "framer-motion";
import React from "react";

interface SecretsCircleCardItemProps {
  id: number;
  phrase: string;
  players: string[];
}

export const SecretsCircleCardItem = ({ id, phrase, players }: SecretsCircleCardItemProps) => {
  const playerInPhrase = players.some(player => phrase.includes(player));

  return (
    <motion.div
      key={id}
      className="absolute flex h-80 w-3/5 flex-col items-center justify-center gap-3 overflow-y-auto rounded-3xl border-2 border-white bg-primary p-3 shadow-2xl"
    >
      {!playerInPhrase && (
        <h2 className="p-4 text-center text-xl text-secondary">
          Tout le monde
        </h2>
      )}
      <div className="break-words text-center italic text-white">{phrase}</div>
    </motion.div>
  );
};
