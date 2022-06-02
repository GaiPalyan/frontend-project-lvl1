import engine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';
const LENGTH_MIN = 5;
const LENGTH_MAX = 15;
const STEP_MIN = 2;
const STEP_MAX = 6;

const makeProgression = (startRange, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startRange + i * step);
  }
  return progression;
};

const hidePosition = () => {
  const progression = makeProgression(
    getRandomNumber(LENGTH_MIN, LENGTH_MAX),
    getRandomNumber(LENGTH_MIN, LENGTH_MAX),
    getRandomNumber(STEP_MIN, STEP_MAX),
  );
  const randomPosition = progression[Math.floor(Math.random() * progression.length)];
  const positionIndex = progression.indexOf(randomPosition);
  progression[positionIndex] = '..';
  return [randomPosition, progression.join(' ')];
};

const getGameData = () => [...hidePosition()];
export default () => engine(description, getGameData);
