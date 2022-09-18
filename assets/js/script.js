var quizContainer = document.getElementById("quiz")
var startGame = document.getElementById("start-quiz")
var resultsContainer = document.getElementById("player-score")
var highScore = document.getElementById("high-score")
var endGame = 

var questions = [
    {
        question: "what code is the main structure of a webpage?",
        answerChoices:[
            "a. CSS",
            "b. JavaScript",
            "c. HTML",
            "d. Word",
        ],
        correctAnswer: "c. HTML", 
             
    },
    
    {
        question: "which code provides the style for your website?",
        answerChoices:[
            "a. HTML",
            "b. CSS",
            "c. JavaScript",
            "d. Google Forms",
        ],
        correctAnswer: "b. CSS",
                   
    },
        
    {
        question: "how can we add functionality to our webpages?",
        answerChoices: [
            "a. with HTML",
            "b. with CSS",
            "c. with excel spreadsheets",
            "d. with JavScript" ,
        ],
        correctAnswer: "d. with JavaScript",
            
    },        
]

// timer for start and stop
var startGame = function(event) {
    document.querySelector("start-quiz");
    var quizContainer = document.querySelector("quiz");
    var questions = document.querySelector("questions");
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

addEventListener// elements for the buttons to click
// function to end game after time runs out or the there are no more questions
// local storage for the save initials and high score
// incorrect answer subtracts from time
// array for storing questions and answer choices
// add event listner for click to start game and timer