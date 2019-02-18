import { produce } from "immer";
import { getType } from "typesafe-actions";
import { actions } from "../actions";
import { ReduxAction } from "../types/ReduxAction";
import { themes } from "../config/themes";
import { getRandomNumber } from "../utils/getRandomQuote";

export type State = {
  availableThemes: typeof themes;
  currentThemeId: string;
};

export const initialState: State = {
  availableThemes: themes,
  currentThemeId: "themeMoonlit"
};

export const themesReducer = (
  state: State = initialState,
  action: ReduxAction
): State => {
  return produce(state, draft => {
    switch (action.type) {
      case getType(actions.rehydrateSuccess): {
        const persistedState = action.payload;
        console.log(persistedState.themes);
        if (persistedState.themes) {
          return {
            ...initialState,
            currentThemeId: persistedState.themes.currentThemeId
          };
        }
        break;
      }
      case getType(actions.goToNextTheme): {
        const availableThemeIds = Object.keys(state.availableThemes);
        const currentThemeIndex = availableThemeIds.indexOf(
          state.currentThemeId
        );
        const nextThemeIndex = getRandomNumber(currentThemeIndex, availableThemeIds.length)
        const nextThemeId = availableThemeIds[nextThemeIndex];
        state.currentThemeId = nextThemeId;
        break;
      }
      default:
        return state;
    }
  });
};
