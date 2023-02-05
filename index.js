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
      let category = prompt("select a category: history, survival, geography");
      console.log(category)

      ///////////// development /////////////////////////

      // const displayQuestion = gameData.map((obj) => {
      //   if (obj['theme'] == category){
      //       let myQuestions = obj['questionArray[question]'] && ['questionArray[choices]']
      //     console.log(myQuestions)
      //   }
         
      // });
      

      // this works
      const categoryQuestions = gameData.filter(theObj => theObj.theme == category)[0]
      const newQuestions = categoryQuestions.questionArray.filter(question => !gameStatus.usedQuestionsArray.includes(question.QID)) // exclude questions already used

      console.log(newQuestions) // this needs to be checked

      

      
   
      // function getRandomInt(questionsRemaining) {
      //   return Math.floor(Math.random() * questionsRemaining)
      // }
      // console.log(getRandomInt());
     





      // randomly display the question (of those not yet asked)

      // providing answer and determing correctness

     // let userAnswer = prompt("");
     //  if(userAnswer === .answer){
     //  // add to the number of correct answers
     //  score++;
     //  }

      // update the score

      // record question into usedQuestions
      


      continueGame = false // this is just a place holder to prevent infinite loop
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






