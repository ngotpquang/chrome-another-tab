import { Theme } from "./../types/Theme";
// import themePinkBlue from "../assets/themes/pink-blue.json";
// import themeDarkBlue from "../assets/themes/dark-blue.json";
import themeDarkBlueGradient from "../assets/themes/dark-blue-gradient.json";
import themeWithImage from "../assets/themes/with-img.json";

export const themes: { [id: string]: Theme } = {
  darkBlueGradient: themeDarkBlueGradient,
  withImg: themeWithImage
};
