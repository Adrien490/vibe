import Cookies from "js-cookie";

export const useUtils = () => {
  const fetchPlayers = async () => {
    const players = Cookies.get("players");
    if (!players) {
      return [];
    }
    return JSON.parse(players);
  };

  const shuffle = (array: any) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  return {
    shuffle,
  };
};
