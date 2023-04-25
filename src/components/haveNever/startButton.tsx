import { type HaveNeverCategory } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface StartButtonProps {
  selectedCard: number;
  selectedCategory: HaveNeverCategory | undefined;
}

export const StartButton: React.FC<StartButtonProps> = ({
  selectedCard,
  selectedCategory,
}) => {
  return (
    <Link
      className="border-3 w-60 rounded-full border border-white bg-primary p-1 p-3 text-center text-xl text-white text-white"
      href={`/havenever/start?category=${selectedCategory?.id ? selectedCategory?.id : "undefined"}&limit=${selectedCard}`}
    >
      Lancer
    </Link>
  );
};
