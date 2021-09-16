//variables to track
var startButton
var timer
var startPage
var questionPage
var questions

//Variables
var timeLeft = document.getElementById("timer")
var startButton = document.getElementById("start-button")
var startPage = document.getElementById("start-page")

var question1 = document.getElementById("question-1")
var question1Correct = document.getElementById("question1-correct")
var question1Wrong = document.getElementById("question1-wrong")

var question2 = document.getElementById("question-2")
var question2Correct = document.getElementById("question2-correct")
var question2Wrong = document.getElementById("question2-wrong")

var question3 = document.getElementById("question-3")
var question3Correct = document.getElementById("question3-correct")
var question3Wrong = document.getElementById("question3-wrong")

var question4 = document.getElementById("question-4")
var question4Correct = document.getElementById("question4-correct")
var question4Wrong = document.getElementById("question4-wrong")

var question5 = document.getElementById("question-5")
var question5Correct = document.getElementById("question5-correct")
var question5Wrong = document.getElementById("question5-wrong")

var question6 = document.getElementById("question-6")
var question6Correct = document.getElementById("question6-correct")
var question6Wrong = document.getElementById("question6-wrong")

var endPage = document.getElementById("end-page")

var highscoresPage = document.getElementById("highscores-page")


//TODO:
startButton.onClick = beginQuiz();

//TODO:
function beginQuiz() {
	startPage.style.display = "none";
	question1.style.display = "block";
	//unhide the question section
	//start timer in JS
	//showing timer in html
};

//TODO:
function nextQuestion(){
	
};

//TODO: Timer Function

//TODO: Function for question pages
	//When an answer is chosen move to next question
	//When a correct answer is chosen - display 'Correct!' at bottom of page and save to local storage
	//When in incorrect answer is chosen - display 'Wrong!' at bottom of page and deduct 10sec from timer

//TODO: Function when quiz is finished
	//Finish quiz when time is up
	//Finish quiz when no questions left
	//When quiz is finished, hide question page
	//When quiz is finished, show end page?

//TODO: Event listener for 'View Highscores' button
	//Hide current page
	//Unhide highscores page