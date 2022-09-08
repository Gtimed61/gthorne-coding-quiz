
var quizContainer = document
var resultsContainer = document
var highScore
var startGame
var endGame
var questions = [
    {
        question: "what",
        answerChoices:[
            "a.",
            "b.",
            "c.",
            "d.",
        correctAnswer: "", 
        ]     
    };    
    
    {
        question: "what";
        answerChoices:[
            "a.",
            "b.",
            "c.",
            "d.",
        correctAnswer: "",
        ]           
    }
        
    {
        question: "what";
        answerChoices: [
            "a.",
            "b.",
            "c.",
            "d." ,
        correctAnswer: "",
        ]    
    }        

    {
        question: "what";
        answerChoices: [
            "a.",
            "b.",
            "c.",
            "d." ,
        correctAnswer: "",
        ]
    }

]
// functions to start game
// timer for start and stop
var startGame = function() {


}

// end game function with scoring and player input
var endGame = function() {
    
    var highScore = localStorage.getItem("highscore");
    
    if (highScore === null) {   
        highScore = 0;
    }
    
    if (playerScore > highScore) {
    localStorage.setItem("highScore");
    localStorage.setItem("Player-initials");
    }
}


// elements for the buttons to click

}
// function to end game after time runs out or the there are no more questions
// local storage for the save initials and high score

// incorrect answer subtracts from time
// array for storing questions and answer choices

// add event listner for click to start game and timer