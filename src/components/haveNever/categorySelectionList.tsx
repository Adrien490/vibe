
import { type HaveNeverCategory } from "@prisma/client";
import { motion } from "framer-motion";
import React, { type Key } from "react";
import { scaleAnimation } from "~/hooks/useAnimation";
import { api } from "~/utils/api";

interface CategorySelectionListProps {
  selectedCategory: HaveNeverCategory | undefined;
  setSelectedCategory: (category: HaveNeverCategory | undefined) => void;
}

export const CategorySelectionList: React.FC<CategorySelectionListProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const {data} = api.haveNeverCategories.getAll.useQuery();
  return (
    <>
      

      {data && data.map((item: HaveNeverCategory, index: Key) => (
        <motion.div
        key={index}
        
        onClick={() => setSelectedCategory(item)}
        className={`flex w-40 justify-center break-all rounded-xl border-2 p-5 px-2 py-10 ${
          selectedCategory === undefined
            ? "selected-category border-primary"
            : "border-secondary"
        } flex-none items-center text-lg text-white`}
        initial={scaleAnimation.initial}
        animate={
          selectedCategory === undefined
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
