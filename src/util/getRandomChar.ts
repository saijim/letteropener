import english from "../data/english";
import rouletteWheelSelection from "roulette-wheel-selection";

const getRandomChar = (num: number): string => {
  let result = "";
  for (let i = 0; i < num; i++) {
    if (Math.random() < 0.21) {
      result += " ";
    } else {
      let myChar = rouletteWheelSelection(english, "weight");
      if (Math.random() > 0.03) {
        result += myChar.name.toLowerCase();
      } else {
        result += myChar.name;
      }
    }
  }
  return result;
};

export default getRandomChar;
