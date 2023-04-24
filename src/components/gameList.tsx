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

export const GameList = () => {
  const games = [
    {
      title: "Je n'ai jamais",
      description: "Un super jeu ",
      image_url: "/img/jenaijamais.png",
      redirect_url: "/havenever",
    },
    {
      title: "Monopolis des défis",
      description: "Lancez de dés et défis endiablés",
      image_url: "/img/jenaijamais.png",
      redirect_url: "/challenge",
    },
  ];

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
