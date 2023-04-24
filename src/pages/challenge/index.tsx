import { type NextPage } from "next";
import React from "react";
import MonopolyBoard from "~/components/monopoly/monopolyBoard";

export default function Challenge() {
  return (
    <div className="h-screen flex items-center bg-background">
      <MonopolyBoard></MonopolyBoard>
    </div>
  );
}
