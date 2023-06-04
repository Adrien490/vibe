import Cookies from "js-cookie";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { SecretsCircleAddPlayerForm } from "~/components/secrets-circle/SecretsCircleAddPlayerForm";
import { SecretsCirclePlayersList } from "~/components/secrets-circle/SecretsCirclePlayersList";

export default function SingleDevice() {
  const [players, setPlayers] = useState([] as string[]);
  //const players = JSON.parse(Cookies.get('secretsCirclePlayers') || '[]') as string[];
  useEffect(() => {
    const players = JSON.parse(
      Cookies.get("secretsCirclePlayers") || "[]"
    ) as string[];
    setPlayers(players);
  }, []);

  const handleSubmit = (values: { player_name: string }) => {
    if (!values.player_name) {
      return;
    }

    if (players.includes(values.player_name)) {
      return;
    }

    // Ajouter le nouveau joueur
    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers, values.player_name];
      Cookies.set("secretsCirclePlayers", JSON.stringify(newPlayers));
      return newPlayers;
    });
  };
  return (
    <>
      <div className="relative flex h-20 justify-center p-2">
        <h2 className="text-center text-3xl text-white">
          Ajouter des participants
        </h2>
        <Link
          className="absolute left-1 top-2 rounded-xl p-3 text-white"
          href="/secrets-circle"
        >
          <HiArrowLeft size={25}></HiArrowLeft>
        </Link>
      </div>
      <div className="flex h-[calc(100vh_-_240px)] flex-col gap-4 overflow-y-auto py-8">
        {players.length > 0 ? (
          <SecretsCirclePlayersList
            setPlayers={setPlayers}
            players={players}
          ></SecretsCirclePlayersList>
        ) : (
          <div className="flex h-full items-center justify-center text-sm italic text-white">
            Veuillez ajouter des joueurs à la partie...
          </div>
        )}
      </div>

      <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-background">
        <SecretsCircleAddPlayerForm
          handleSubmit={handleSubmit}
        ></SecretsCircleAddPlayerForm>
      </div>
    </>
  );
}
