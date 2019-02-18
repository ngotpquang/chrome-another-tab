export const getRandomNumber = (currentNumber: number, maxNumber: number) => {
    const randomNumber = Math.floor(Math.random() * Math.floor(maxNumber));
    return currentNumber === randomNumber ? (randomNumber + 1 === maxNumber ? 0 : randomNumber + 1) : randomNumber;
}