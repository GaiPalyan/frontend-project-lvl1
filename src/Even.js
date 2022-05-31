import readlineSync from 'readline-sync';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getResponse = (userName) => {
  const startRange = 1;
  const endRange = 30;
  const rounds = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < rounds; i++) {
    const number = getRandomNumber(startRange, endRange);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number);
    if (correctAnswer !== userAnswer.toLowerCase()) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

export default getResponse;
