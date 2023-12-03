// import readlinesync for taking input from the user
import readlineSync from 'readline-sync'

// import chalk for coloufull CLI
import chalk from 'chalk'

// variable to store score
var score = 0;

// variable to store user highscore
var highScore = ["Deepen : 5", "Akshata : 5", "Mitesh : 4", "Sanchita : 4"]

// variable to ask and store username
var userName = readlineSync.question("What is your name? ");
console.log(chalk.blue("Welcome ")+ chalk.bold.red(userName) + chalk.blue("!\nLets test how much you know " + chalk.bold.bgGreen("Kuldeep?")))

// variable to keep question list
var questions = [
  {
    question: "Where do I live? \n[1] Kandivali\n[2] Malad\nType your answer 1 or 2 - ",
    answer: "2"
  },
  {
    question: "What is the name of my motorcycle? \n[1] TVS Apache RTR\n[2] Bajaj Dominar\nType your answer 1 or 2 - ",
    answer: "1"
  },
  {
    question: "My favourite Festival? \n[1] Diwali\n[2] Navratri\nType your answer 1 or 2 - ",
    answer: "2"
  },
  {
    question: "My favourite Pastime? \n[1] Movies\n[2] Scrolling social app\nType your answer 1 or 2 - ",
    answer: "1"
  },
  {
    question: "Which pet i would choose from the option? \n[1] Dog\n[2] Cat\nType your answer 1 or 2 - ",
    answer: "1"
  }
]

// Create a function to play the game
function play (question, answer) {
  var askUsr = readlineSync.question(question)

  if (askUsr === answer){
   console.log(chalk.bold.green("Right"));
    score = score + 1; //increase score if right.
    console.log("Your current score is "+score);
    console.log(chalk.bgCyan("---------------------"));
  }
  else {
    console.log(chalk.red("Wrong"));
    console.log(chalk.bgCyan("---------------------"));
  }
}

// Create a for loop to repeat questions
for (var i = 0; i < questions.length; i = i + 1) {
  var repeatQues = questions[i];
  play(repeatQues.question,repeatQues.answer)
  
}

console.log(chalk.blue("YAY! " + chalk.bold.red(userName) + " your final score is ") + chalk.bold.green(score))

console.log(chalk.italic("Check out high score list. If you think your name should be up, send screenshot and i will update it."))
console.log(chalk.bgCyan("---------------------"))



// create for loop do display highscore list
for (i=0; i < highScore.length; i++){
  console.log(chalk.yellow(highScore[i]));
}