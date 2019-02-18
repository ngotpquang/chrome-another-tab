import { ReduxState } from "../types/ReduxState";

export const getCurrentQuote = (state: ReduxState) => {
    const { availableQuotes, currentQuoteId } = state.quotes;
    return availableQuotes[currentQuoteId];
};

export const getQuoteChangedStatus = (state: ReduxState) => {
    return state.quotes.isQuoteChanged;
};