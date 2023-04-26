import { type NextPage } from "next";
import Head from "next/head";
import { GameList } from "~/components/gameList";

const Home: NextPage = () => {
  const games = [
    {
      title: "Je n'ai jamais",
      description: "Si tu as déjà, tu bois!",
      image_url: "/img/jenaijamais.png",
      redirect_url: "/havenever",
    },
    {
      title: "Tour de table",
      description: "Chacun raconte son anectote.",
      image_url: "/img/table.png",
      redirect_url: "/",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-background flex-col gap-4 flex items-center justify-center overflow-y-auto">
       <GameList games={games}></GameList>
      </main>
    </>
  );
};

export default Home;
