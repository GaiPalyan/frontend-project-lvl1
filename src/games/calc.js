import engine from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';
const startRange = 1;
const endRange = 30;
const operators = ['+', '-', '*'];

const getExpressionResult = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return 'Wrong operator';
  }
};

const getGameData = () => {
  const firstOperand = getRandomNumber(startRange, endRange);
  const secondOperand = getRandomNumber(startRange, endRange);
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const gameQuestion = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = getExpressionResult(firstOperand, operator, secondOperand);

  return [correctAnswer.toString(), gameQuestion];
};

export default () => engine(description, getGameData);
