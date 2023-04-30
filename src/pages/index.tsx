import { type NextPage } from "next";
import { GameList } from "~/components/gameList";
import { Title } from "~/components/shared/title";

const Home: NextPage = () => {
  const games = [
    {
      title: "Je n'ai jamais",
      description: "Si tu as déjà, tu bois!",
      image_url: "/img/jenaijamais.png",
      redirect_url: "/havenever",
    },
    {
      title: "Désigne !",
      description: "Désignez un ou plusieurs joueurs",
      image_url: "/img/man_pointing.png",
      redirect_url: "/designate",
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
      <div className="relative sticky top-0 z-20 border-2 flex justify-center overflow-hidden p-3">
        <Title></Title>
      </div>
      <div className="h-[calc(100vh_-_192px)] border-2 flex flex-col justify-center gap-4 overflow-y-auto">
        <GameList games={games}></GameList>
      </div>
    </>
  );
};

export default Home;
