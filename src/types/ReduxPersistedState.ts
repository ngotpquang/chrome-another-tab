import { State as BookmarksState } from "../reducers/bookmarksReducer";
import { State as ThemesState } from "../reducers/themesReducer";
import { State as QuotesState } from "../reducers/quotesReducer";

export type ReduxPersistedState = {
  bookmarks: BookmarksState;
  themes: ThemesState;
  quotes: QuotesState
};
