import { produce } from "immer";
import { getType } from "typesafe-actions";
import { actions } from "../actions";
import { ReduxAction } from "../types/ReduxAction";
import quotes from "../assets/quotes.json";

export type State = {
    availableQuotes: typeof quotes;
    currentQuoteId: number;
};

export const initialState: State = {
    availableQuotes: quotes,
    currentQuoteId: 0
};

export const quotesReducer = (
    state: State = initialState,
    action: ReduxAction
): State => {
    return produce(state, draft => {
        switch (action.type) {
            case getType(actions.rehydrateSuccess): {
                const persistedState = action.payload;
                if (persistedState.quotes) {
                    return {
                        ...initialState,
                        currentQuoteId: Math.floor(Math.random() * Math.floor(initialState.availableQuotes.length))
                    };
                }
                break;
            }
            case getType(actions.goToNextQuote): {
                const availableQuotes = state.availableQuotes;
                const tempNextQuoteId = state.currentQuoteId + 1;
                const nextQuoteId = tempNextQuoteId === availableQuotes.length ? 0 : tempNextQuoteId;
                return {
                    ...initialState,
                    currentQuoteId: nextQuoteId
                }
            }
            default:
                return state;
        }
    });
};
