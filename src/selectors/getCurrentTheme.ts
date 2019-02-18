import { ReduxState } from "../types/ReduxState";

export const getCurrentTheme = (state: ReduxState) => {
  const { availableThemes, currentThemeId } = state.themes;
  const defaultThemeFallBack = "themeDarkOcean";
  return availableThemes[currentThemeId === "deepBlue" ? defaultThemeFallBack : currentThemeId];
};
