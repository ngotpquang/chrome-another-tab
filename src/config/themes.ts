import { Theme } from "./../types/Theme";
import themeDarkOcean from "../assets/themes/dark-ocean.json";
import themeMoonlit from "../assets/themes/moonlit-asteriod.json";
import themeVision from "../assets/themes/visions-of-grandeur.json";
import themeJupiter from "../assets/themes/jupiter.json";
import themeSunset from "../assets/themes/sunset.json";
import themeMantle from "../assets/themes/mantle.json";

export const themes: { [id: string]: Theme } = {
  themeJupiter,
  themeDarkOcean,
  themeVision,
  themeSunset,
  themeMantle,
  themeMoonlit,
};
