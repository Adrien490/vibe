import { type NextPage } from "next";
import { GameList } from "~/components/gameList";
import { Title } from "~/components/shared/Title";

const Home: NextPage = () => {
  const games = [
    {
      title: "Je n'ai jamais",
      description: "Si tu as déjà, tu bois!",
      image_url: "/img/jenaijamais.png",
      redirect_url: "/havenever",
    },
    {
      title: "Cercle des secrets",
      description: "Révèlez vos amis sous un jour nouveau",
      image_url: "/img/man_pointing.png",
      redirect_url: "/secrets-circle",
    }
  ];
  return (
    <>
      <div className="z-20 flex flex-col items-center justify-center gap-5 overflow-hidden p-3 py-8">
        <div className="w-48">
          <Title></Title>
        </div>
      </div>
      <div className="flex h-[calc(100vh_-_200px)] flex-col gap-4 overflow-y-auto py-8">
        <GameList games={games}></GameList>
      </div>
    </>
  );
};

export default Home;
