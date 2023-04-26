import { type HaveNever } from "@prisma/client";
import { createContext, type ReactNode, useContext, useState } from "react";

interface HaveNeverState {
  shuffledData: HaveNever[];
  setShuffledData: React.Dispatch<React.SetStateAction<HaveNever[]>>;
}

interface HaveNeverProviderProps {
  children: ReactNode;
}

const HaveNeverContext = createContext<HaveNeverState | undefined>(undefined);

export function useHaveNeverContext() {
  const context = useContext(HaveNeverContext);
  if (!context) {
    throw new Error(
      "useHaveNeverContext must be used within a HaveNeverProvider"
    );
  }
  return context;
}

export const HaveNeverProvider: React.FC<HaveNeverProviderProps> = ({
  children,
}) => {
  const [shuffledData, setShuffledData] = useState<HaveNever[]>([]);

  return (
    <HaveNeverContext.Provider
      value={{
        shuffledData,
        setShuffledData,
      }}
    >
      {children}
    </HaveNeverContext.Provider>
  );
};
