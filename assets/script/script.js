//variables to track
var startButton
var timerEl
var startPage
var questionPage
var questions

//Variables
var timerEl = document.getElementById("timer")
var startButton = document.getElementById("start-button")
var startPage = document.querySelector("#start")

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

var timeleft = 60;

var questions = [
    {
        question: "The condition of an if/else statement is enclosed within:",
        answers: ["Parentheses", "Quotes", "Square Brackets", "Curly Brackets"],
        correctAnswer: 0
    },
    {     
        question: "Commonly used data types do NOT include:",
        answers: ["Strings", "Boolean", "Alerts", "Numbers"],
        correctAnswer: 2
    },
    {     
        question: "Arrays in JavaScript can be used to store:",
        answers: ["Booleans", "Other Arrays", "Numbers and Strings", "All of the above"],
        correctAnswer: 3
    },
    {     
        question: "When assigning to variables, string values must be enclosed within:",
        answers: ["Commas", "Quotes", "Curly Brackets", "Parentheses"],
        correctAnswer: 1
    },
    {     
        question: "JavaScript is the same as Java",
        answers: ["True", "False"],
        correctAnswer: 1
    },
    {     
        question: "Which is a useful tool for printing content to the debugger?",
        answers: ["Terminal/Bash", "JavaScript", "Console log", "For loop"],
        correctAnswer: 2
    },

];

//When button is clicked, beginQuiz function will run
startButton.addEventListener("click", beginQuiz);

//Starts the Quiz by hiding the start page and showing question 1
function beginQuiz() {

	startPage.setAttribute("class", "invisible");
	question1.setAttribute = ("style", "display:block");

	countdown();
	displayquestions()
};

//Timer countdown function
function countdown() {
   timerEl.textContent = "Time:" + timeLeft;
  
	// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
	var timeInterval = setInterval(function () {
	  // As long as the `timeLeft` is greater than 1
	  if (timeLeft > 1) {
		// Set the `textContent` of `timerEl` to show the remaining seconds
		timerEl.textContent = "Time:" + timeLeft;
		// Decrement `timeLeft` by 1
		timeLeft--;
	  } else if (timeLeft === 1) {
		// When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
		timerEl.textContent = "Time:" + timeLeft;
		timeLeft--;
	  } else {
		// Once `timeLeft` gets to 0, set `timerEl` to an empty string
		timerEl.textContent = '0';
		// Use `clearInterval()` to stop the timer
		timeLeft--		
		timerEl.textContent = "Time:" + timeLeft;
		
		if (timeLeft<0){
			clearInterval(timeInterval);
		}
		
	  }
	}, 1000);
  }

//TODO: This will show the next question once answer for previous question is clicked
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