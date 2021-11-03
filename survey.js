const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = {
  name: "What's your name? Nicknames are also acceptable :)",
  activity: "What's an activity you like doing?",
  music: "What do you listen to while doing that?",
  meal: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  food: "What's your favourite thing to eat for that meal?",
  sport: "Which sport is your absolute favourite?",
  superpower: "What is your superpower? In a few words, tell us what you are amazing at!"
};

let question = Object.keys(questions);
let index = 0;

const askQuestion = function(question, index) {
  rl.question(questions[question[index]] + "\n", (answer) => {
    questions[question[index]] = answer;
    index++;
    if (index > 6) {
      console.log(`${questions.name} loves listening to ${questions.music} while ${questions.activity}, devouring ${questions.food} for ${questions.meal}, prefers ${questions.sport} over any other sport, and is amazing at ${questions.superpower}.`);
      rl.close();
    } else {
      askQuestion(question, index);
    }
  });
};

askQuestion(question, index);