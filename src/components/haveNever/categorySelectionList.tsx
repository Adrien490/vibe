import { type HaveNeverCategory } from "@prisma/client";
import { motion } from "framer-motion";
import React, { type Key } from "react";
import { scaleAnimation } from "~/hooks/useAnimation";

interface CategorySelectionListProps {
  selectedCategory: HaveNeverCategory | undefined;
  setSelectedCategory: (category: HaveNeverCategory | undefined) => void;
  categories: HaveNeverCategory[];
}

export const CategorySelectionList: React.FC<CategorySelectionListProps> = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <>
      {categories &&
        categories.map((item: HaveNeverCategory, index: Key) => (
          <motion.div
            key={index}
            onClick={() => setSelectedCategory(item.id == 0 ? undefined : item)}
            className={`flex w-40 justify-center break-all rounded-xl p-5 px-2 py-10 ${
              (selectedCategory === item && item.id !== 0) ||
              (selectedCategory === undefined && item.id === 0)
                ? "border-2 border-primary"
                : "border-2 border-secondary"
            } flex-none items-center text-lg text-white`}
            initial={scaleAnimation.initial}
            animate={
              (selectedCategory === item && item.id !== 0) ||
              (selectedCategory === undefined && item.id === 0)
                ? scaleAnimation.animate
                : scaleAnimation.initial
            }
            transition={scaleAnimation.transition}
          >
            {item.name}
          </motion.div>
        ))}
    </>
  );
};
