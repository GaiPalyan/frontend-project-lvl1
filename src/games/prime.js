import engine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startRange = 1;
const endRange = 30;

const isPrime = (num, divisor) => {
  if (num <= 2) {
    return num === 2;
  }
  if (num % divisor === 0) {
    return false;
  }
  if (divisor <= num / 2) {
    return isPrime(num, divisor + 1);
  }
  return true;
};

const getGameData = () => {
  const number = getRandomNumber(startRange, endRange);
  const correctAnswer = isPrime(number, 2) ? 'yes' : 'no';
  return [correctAnswer, number];
};

export default () => engine(description, getGameData);
