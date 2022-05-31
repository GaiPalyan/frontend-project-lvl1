import engine from './index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const startRange = 1;
const endRange = 30;

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getGameData = () => {
  const gameQuestion = getRandomNumber(startRange, endRange);
  const correctAnswer = isEven(gameQuestion);
  return [correctAnswer, gameQuestion];
};

export default () => engine(description, getGameData);
