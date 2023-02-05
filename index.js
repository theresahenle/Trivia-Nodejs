// the old data set up is in datafile.md
// trying a set up that relies on no dynamically named keys

// control + c to exit an infinite loop

gameData = [
  {
    theme: "survival",
    questionArray: [
      {
        QID: "1",
        question: "Which of these plants are edible?",
        choices: {
          a: "stinging neddles",
          b: "wisteria",
          c: "tobacco",
          d: "rhododendron"
        },
        answer: "a"
      },
      {
        QID: "2",
        question: "What is the longest number of days someone has survived without eating?",
        choices: {
          a: "23",
          b: "46",
          c: "58",
          d: "74"
        },
        answer: "d"
      }
    ]
    // end question array
  },
  // end survival object
  {
    theme: "history",
    questionArray: [
      {
        QID: "3",
        question: "Which of the following explorers reached the North Pole?",
        choices: {
          a: "Roald Amundsen",
          b: "Robert E. Peary",
          c: "EWilliam Barents",
          d: "Adam Sound"
        },
        answer: "b"
      },
      {
        QID: "4",
        question: "History students are taught about the \"the fall of Constantinople\" in 1453. To whom did it fall?",
        choices: {
          a: "Christian crusaders",
          b: "Bongol hordes",
          c: "Ottoman Turks",
          d: "Romans"
        },
        answer: "c"
      }

    ]
    // end question Array

  },
  //end History Object
  {
    theme: "geography",
    questionArray: [
      {
        QID: "5",
        question: "What is the capital of Canada?",
        choices: {
          a: "Toronto",
          b: "Vancouver",
          c: "Ottawa",
          d: "Montreal"
        },
        answer: "c"
      },
      {
        QID: "6",
        question: "What is the smallest state by land area in the United States?",
        choices: {
          a: "Delaware",
          b: "Rhode Island",
          c: "Vermont",
          d: "Connecticut"
        },
        answer: "b"
      }
    ]
    // end question array
  }
  // end history object
]
// end gameData Array


// Class representation of trivia
class Trivia {

  constructor(gameData) {
    this.gameData = gameData
    this.highScore = 0
  }

  // singular game
  playGame() {
    const gameStatus = {
      score: 0,
      usedQuestionsArray: []
    }
    console.log("Welcome to the game!")
    let continueGame = true
      
    while (continueGame) {
      // choosing category
      let category = prompt("Type a category: history, survival, geography");
      //console.log(category)
        // if (category !== 'history' || category !== 'survival' || category !== 'geography'){
        //   category = prompt("Watch for spelling! Type a category: history, survival, geography")
        // }

      // this works
      const categoryQuestions = gameData.filter(theObj => theObj.theme == category)[0]
      const newQuestions = categoryQuestions.questionArray.filter(question =>   !gameStatus.usedQuestionsArray.includes(question.QID)) // exclude questions already used
 
      // randomly display the question (of those not yet asked)

      if(newQuestions.length > 0){
        const getRandomInt = Math.floor(Math.random()*newQuestions.length)
        const currentQuestion = newQuestions[getRandomInt];
        console.log(currentQuestion.question);
        console.log(currentQuestion.choices);

        // providing answer and determing correctness
        const answer = prompt(`Enter your answer (a, b, c, d): `);
          // if (answer !== 'a' || answer !== 'b' || answer !== 'c' || answer !== 'd'){
          //   answer = prompt(`Enter your answer. Please choose: (a, b, c, d): `)
          // }
        
        // update the score
        if (answer === currentQuestion.answer){
          console.log(`Correct!`);
          gameStatus.score++;
        } else {
          console.log(`Incorrect!`);
          gameStatus.score--;          
        }
        console.log("your score is ", gameStatus.score);
        gameStatus.usedQuestionsArray.push(currentQuestion.QID)
        
      }else{
        console.log(`No more questions remaining in this category.`);
      }
     
      // record question into usedQuestions
      // gameStatus.usedQuestionsArray.push(currentQuestion.QID)

      // decide if game should continue
      let chooseContinue = prompt("Would you like to continue to the next question? Type 'yes' or 'no'.")
      if(chooseContinue === 'yes'){
         continueGame = true
      } else {
        continueGame = false
      }
    }
    
    console.log("Congratulations! Game is over. Your score was: " + gameStatus.score)
    if (gameStatus.score > this.highScore) {
      this.highScore = gameStatus.score
      console.log("This is a new high score!")
    }
    // this is the end of the game
  }

  // play Trivia
  playTrivia() {

    let playAgain = "yes";
    while (playAgain === "yes") {
      this.playGame()
      playAgain = prompt("Would you like to play again? Type 'yes' to play again. Else, press [enter]")
    }
  }



}

let startTrivia = new Trivia(gameData)
startTrivia.playTrivia()






