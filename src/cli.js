import readLineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!\n'
              + 'May I have your name? John');
  const name = readLineSync.question('Your answer: ');

  console.log(['Hello,', name].join(' '));
};
