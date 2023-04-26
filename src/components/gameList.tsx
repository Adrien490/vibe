import { motion } from "framer-motion";
import React from "react";
import { listVariants } from "~/hooks/useAnimation";
import GameItem from "~/components/gameItem";

interface GameListProps {
  title: string;
  description: string;
  image_url: string;
  redirect_url: string;
}

interface Props {
  games: GameListProps[];
}

export const GameList = ({ games }: Props) => {
  return (
    <>
      {games.map((game, index) => (
        <motion.div
          className="w-full"
          key={index}
          variants={listVariants}
          initial="hidden"
          animate="visible"
          custom={index}
          exit="hidden"
        >
          <GameItem
            key={index}
            title={game.title}
            description={game.description}
            image_url={game.image_url}
            redirect_url={game.redirect_url}
          ></GameItem>
        </motion.div>
      ))}
    </>
  );
};
