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
      title: "Monopolis des défis",
      description: "Lancer de dés et défis endiablés",
      image_url: "/img/jenaijamais.png",
      redirect_url: "/challenge",
    },
    {
      title: "Tour de table",
      description: "Chacun raconte son anectote",
      image_url: "/img/jenaijamais.png",
      redirect_url: "/story",
    },
  ];
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-background flex-col gap-4 flex items-center justify-center overflow-y-auto">
       <GameList games={games}></GameList>
      </main>
    </>
  );
};

export default Home;
