import { type NextPage } from "next";
import { GameList } from "~/components/gameList";
import { Title } from "~/components/shared/title";
import Typewriter from "typewriter-effect";

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
      <div className="z-20 flex flex-col items-center justify-center gap-5 overflow-hidden p-3 border-b-secondary border-dashed border-b py-8">
        <div className="w-48">
          <Title></Title>
        </div>

        <div className="text-xl text-white">
          <Typewriter
            options={{
              strings: ["Les meilleurs jeux pour viber en soirée !"],
              autoStart: true,
              loop: false,
              deleteSpeed: Number.MAX_SAFE_INTEGER,
              delay: 20,
            }}
          />
        </div>
      </div>
      <div className="flex h-[calc(100vh_-_200px)] flex-col gap-4 overflow-y-auto py-8">
        <GameList games={games}></GameList>
      </div>
    </>
  );
};

export default Home;
