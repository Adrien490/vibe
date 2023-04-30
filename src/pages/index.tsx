import { type NextPage } from "next";
import { GameList } from "~/components/gameList";
import { Title } from "~/components/shared/title";
import Typewriter from 'typewriter-effect';

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
      <div className=" z-20 flex justify-center items-center flex-col gap-5 overflow-hidden p-3">
        <div className="w-48">
        <Title></Title></div>
        
        <div className="text-white text-xl">
            <Typewriter
              options={{
                strings: ['Les meilleurs jeux pour viber en soirée !'],
                autoStart: true,
                loop: false,
                delay: 20,
              }}
            />
          </div>
      </div>
      <div className="h-[calc(100vh_-_200px)] flex flex-col py-8 gap-4 overflow-y-auto">
        <GameList games={games}></GameList>
      </div>
    </>
  );
};

export default Home;
