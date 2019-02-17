export const getRandonQuote = (maxNumber: number) => {
    return Math.floor(Math.random() * Math.floor(maxNumber))
}