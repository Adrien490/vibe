import { type HaveNever } from "@prisma/client";
import React from "react";

interface CardsListProps {
  shuffledData: HaveNever[] | undefined;
}

export const CardsList = ({shuffledData}:CardsListProps) => {
  return (
    <>
      {shuffledData &&
        shuffledData.map((item, index) => (
          <div
            key={item.id}
            className="absolute flex h-3/5 w-3/5 flex-col items-center justify-center gap-3 overflow-y-auto rounded-3xl border-2 border-secondary bg-primary p-3"
            style={{ zIndex: -index }}
          >
            <h1 className="p-4 text-center text-xl text-white">
              Je n&apos;ai jamais
            </h1>
            <div className="break-words text-center italic text-white">
              {item.phrase}
            </div>
          </div>
        ))}
    </>
  );
};
