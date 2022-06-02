import engine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';
const startRange = 1;
const endRange = 30;
const getGcd = (num1, num2) => (num2 ? getGcd(num2, num1 % num2) : num1);

const getGameData = () => {
  const num1 = getRandomNumber(startRange, endRange);
  const num2 = getRandomNumber(startRange, endRange);

  const correctAnswer = getGcd(num1, num2);

  return [correctAnswer, `${num1} ${num2}`];
};

export default () => engine(description, getGameData);
