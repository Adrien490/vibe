import { motion } from "framer-motion";
import React, { type Key } from "react";
import { scaleAnimation } from "~/hooks/useAnimation";

// Créez une interface pour les props
interface CardsNumberSelectionListProps {
  selectedCard: number;
  setSelectedCard: (card: number) => void;
}

export const CardsNumberSelectionList: React.FC<CardsNumberSelectionListProps> = ({
  selectedCard,
  setSelectedCard,
}) => {
  const cards = [25, 50, 75, 100, 9999];

  return (
    <>
      {cards.map((item: number, index: Key) => (
        <motion.div
          onClick={() => setSelectedCard(item)}
          key={index}
          className={`flex w-20 justify-center break-all rounded-lg border-2 p-5 ${
            selectedCard === item
              ? "selected-category border-primary"
              : "border-secondary"
          } flex-none items-center text-white`}
          initial={scaleAnimation.initial}
          animate={
            selectedCard === item
              ? scaleAnimation.animate
              : scaleAnimation.initial
          }
          transition={scaleAnimation.transition}
        >
          {item != 9999 ? item: "∞"}
        </motion.div>
      ))}
    </>
  );
};
