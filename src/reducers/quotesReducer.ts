import { produce } from "immer";
import { getType } from "typesafe-actions";
import { actions } from "../actions";
import { ReduxAction } from "../types/ReduxAction";
import quotes from "../assets/quotes.json";
import { getRandonQuote } from "../utils/getRandomQuote";

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
                        currentQuoteId: getRandonQuote(initialState.availableQuotes.length)
                    };
                }
                break;
            }
            case getType(actions.goToNextQuote): {
                const availableQuotes = state.availableQuotes;
                const tempNextQuoteId = getRandonQuote(state.availableQuotes.length);
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
