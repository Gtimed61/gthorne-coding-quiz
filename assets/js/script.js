//var for use
var quizContainer = document.getElementById("quiz")
var buttonEl = document.querySelector("#start-btn")
var resultsContainer = document.getElementById("player-score")
var highScore = document.getElementById("high-score")
var timerCount = 60
var timeEl = document.getElementById("timer")
var choiceA = document.getElementById("choice-a")
var choiceB = document.getElementById("choice-b")
var choiceC = document.getElementById("choice-c")
var choiceD = document.getElementById("choice-d")
//array for questions
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
//display choices for questions
choiceA.style.display = "none"
choiceB.style.display = "none"
choiceC.style.display = "none"
choiceD.style.display = "none"
// start game and load questions
function startGame() { 
    startTimer()
    choiceA.style.display = "none"
    choiceB.style.display = "none"
    choiceC.style.display = "none"
    choiceD.style.display = "none"
    cycleQuestions(0)

}
// timer start function
function startTimer() {
    timeEl.textContent = timerCount
    console.log(timeEl.textContent)
    var timer = setInterval(function (){
    timeEl.textContent --;
    if(timeEl.textContent === "0"){
        clearInterval(timer)
    }
    },1000)
}
//function to cycle questions
function cycleQuestions(index) {
    var questionSection = document.getElementById("questions")
    questionSection.textContent = questions[index].question
    choiceA.textContent = questions[index].answerChoices[0]
    choiceB.textContent = questions[index].answerChoices[1]
    choiceC.textContent = questions[index].answerChoices[2]
    choiceD.textContent = questions[index].answerChoices[3]
}
// end game function with scoring and player input
function endGame() {

    var highScore = localStorage.getItem("highscore")

    if (highScore === null) {
        highScore = 0
    }

    if (playerScore > highScore) {
        localStorage.setItem("highScore")
        localStorage.setItem("Player-initials")
    }
}

//start button click event listener
buttonEl.addEventListener("click", startGame)


// elements for the buttons to click
// function to end game after time runs out or the there are no more questions
// local storage for the save initials and high score
// incorrect answer subtracts from time
// array for storing questions and answer choices
// add event listner for click to start game and timer