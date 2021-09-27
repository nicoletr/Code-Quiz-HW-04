//variables to track
var startButton
var timerEl
var startPage
var questionPage
var question

//Variables
var timerEl = document.getElementById("timer");
var timerText = document.getElementById("timer-text");
var startButton = document.getElementById("start-button");
var startPage = document.getElementById("start-page");
var endPage = document.getElementById("end-page");
var questionPage = document.getElementById("question-page");
var questionEl = document.getElementById("question");
var answerOne = document.getElementById("answer-one");
var answerTwo = document.getElementById("answer-two");
var answerThree = document.getElementById("answer-three");
var answerFour = document.getElementById("answer-four");
var highscoresPage = document.getElementById("highscores-page");

var timeLeft = 90;

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

	startPage.classList.add("invisible");
	startPage.classList.remove("visible");
	questionEl.classList.add("visible");
	questionEl.classList.remove("invisible");

	countdown();
	renderQuestions();
};

//Timer countdown function
function countdown() {
  
	// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
	var timeInterval = setInterval(function () {
	  // As long as the `timeLeft` is greater than 1
	  if (timeLeft > 1) {
		// Set the `textContent` of `timerEl` to show the remaining seconds
		timerText.textContent = "Time:" + timeLeft;
		// Decrement `timeLeft` by 1
		timeLeft--;
	  } else if (timeLeft === 1) {
		// When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
		timerText.textContent = "Time:" + timeLeft;
		timeLeft--;
	  } else {
		// Once `timeLeft` gets to 0, set `timerEl` to an empty string
		timerText.textContent = '0';
		// Use `clearInterval()` to stop the timer
		timeLeft--		
		timerText.textContent = "";
		
		if (timeLeft<0){
			clearInterval(timeInterval);
		}
		
	  }
	}, 1000);
  }

//TODO: This will render each question to the question page
function renderQuestions(){
	
};


//TODO: Function for question pages
	//Event listener on answer buttons - event.target to listen where the click occured
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