// the old data set up is in datafile.md
// trying a set up that relies on no dynamically named keys

// control + c to exit an infinite loop

gameData = [
  {
    theme: "Survival",
    questionArray:[
      {
        question: "Choose a, b, c, or d. \n Which of these plants are edible? \n a) stinging neddles b) wisteria c) tobacco d) rhododendron",
        answer: "a"
      },
      {
        question: "Choose a, b, c, or d. \n What is the longest number of days someone has survived without eating? \n a) 23 b) 46 c) 58 d)74",
          answer: "74"
      },
      {
        question: "Choose a, b, c, or d. \n What animal kills the most people in the US each year? \n a) deer b) mosquitos c) bats d) snakes",
          answer: "a"
      }
    ] 
  },
  {
    theme: "History",
    questionArray:[
      {
        question: "Choose a, b, c, or d. \n following explorers reached the North Pole? \n a) Roald Amundsen b) Robert E. Peary c) William Barents d) Adam Sound",
        answer: "b"
      },
      {
        question: "Choose a, b, c, or d. \n History students are taught about the \"the fall of Constantinople\" in 1453. to who did it fall?survived without eating? \n a) Christian crusaders b) Mongol hordes c) Ottoman Turks d)Romans",
          answer: "c"
      },
      {
        question: "Choose a, b, c, or d. \n Catherine the Great ruled what country? \n a) England b) France c)  Germany d) Russia",
          answer: "d"
      }
    ]
  }
]

// Class representation of trivia
class Trivia{
  
  constructor(gameData){
    this.gameData = gameData
    this.highScore = 0
  }

  // singular game
  playGame(){
    const gameStatus = {
      score: 0,
      usedQuestionsArray: []
    }  
    console.log("Welcome to the game!")
    let continueGame = true
    while(continueGame)
      {
        let category = prompt("select a category");
        console.log(category)

        // more game logic

        continueGame = false // this is just a place holder to prevent infinite loop
      }
    console.log("Congratulations! Game is over. Your score was: " + gameStatus.score)
    if(gameStatus.score > this.highScore){
      this.highScore = gameStatus.score
      console.log("This is a new high score!")
    }
    // this is the end of the game
  }

  // play Trivia
  playTrivia(){

    let playAgain = "yes";
    while(playAgain === "yes"){
      this.playGame()
      playAgain = prompt("Would you like to play again? Type 'yes' to play again. Else, press [enter]")
    }
  }


  
}

let startTrivia = new Trivia(gameData)
startTrivia.playTrivia()

  




  