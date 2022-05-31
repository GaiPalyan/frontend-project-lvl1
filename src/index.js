import readlineSync from 'readline-sync';

const rounds = 3;

export default (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);
  console.log(description);

  for (let i = 0; i < rounds; i += 1) {
    const [correctAnswer, gameQuestion] = gameData();
    console.log(gameQuestion);
    const userAnswer = readlineSync.question('Your answer?: ');
    console.log(userAnswer);
    console.log(correctAnswer);
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};
