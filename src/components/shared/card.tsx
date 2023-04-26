import React from "react";

interface CardProps {
  title: string;
  content: string;
  className: string;
}

export const Card = ({ title, content, className }: CardProps) => {
  return (
    <div className={`${className} overflow-y-auto rounded-3xl border-2 border-secondary bg-primary p-3 flex flex-col items-center justify-center gap-5`}>
      <h1 className="p-4 text-center text-xl text-white">{title}</h1>
      <div className="break-words text-center italic text-white">{content}</div>
    </div>
  );
};
//<Card key={item.id} title={"Je n'ai jamais"} content={item.phrase} className={`-z-${index}`}></Card>