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
var answers = document.getElementById("answers");
var answerOne = document.getElementById("answer-one");
var answerTwo = document.getElementById("answer-two");
var answerThree = document.getElementById("answer-three");
var answerFour = document.getElementById("answer-four");
var highscoresPage = document.getElementById("highscores-page");
var questionIndex = 0;
var message = document.getElementById("message");

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
	questionPage.classList.add("visible");
	questionPage.classList.remove("invisible");

	countdown();
	renderQuestions();
};

//Timer countdown function
function countdown() {
  
	// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
	var timeInterval = setInterval(function () {
		timerText.textContent = " " + timeLeft;
		timeLeft--;
		// If time is less than 0, clear interval and clear timerText
				if (timeLeft<0){
		clearInterval(timeInterval);
		timerText.textContent = "";
		endQuiz();
		}
	}, 1000);
  }

//TODO: This will render each question to the question page
function renderQuestions(){
	questionEl.textContent = questions[questionIndex].question;
	answers.innerHTML = "";
	for (var i=0; i<questions[questionIndex].answers.length; i++){
		console.log(i);
		var answerButton = document.createElement("button");
		answerButton.setAttribute("class", "option");
		answerButton.setAttribute("value", i)
		answerButton.textContent = questions[questionIndex].answers[i];
		answers.appendChild(answerButton);
		answerButton.onclick = answerClick 
	}

};

function answerClick() {
	if(questions[questionIndex].correctAnswer == this.value){
		console.log("correct");
		message.textContent = "Correct!";
	} else {
		message.textContent = "Incorrect";
		timeLeft-=10;
		timerText.textContent = timeLeft;
		if (timeLeft<0){
			clearInterval(timeInterval);
			timerText.textContent = "";
			endQuiz();
		}
	} 
	questionIndex++;
	if (questionIndex == questions.length) {
		endQuiz();
	} else {
		renderQuestions();
	}
	//Check if answer is correct
	//If answer is correct, show 'correct' message
	//If answer is incorrect, show 'wrong' messge and reduce time
	//Increase questionIndex by 1
	//Render next question
	//If index is = qustion length run endQuiz function
}

function endQuiz(){
	console.log ("endQuiz");
	//Stop the timer
	//Hide the question page - adding invisible class
	//Show the end page - add visible class

}

//Event listener for submitting highscore

function saveHighscore(){
	//Array called highScores
	//input initial
	var score = {
		initials: intials,
		score: timeLeft
	}
	highScores.push(score)
	//Save input to local storage with initial as key highscore, timescore is value
}

function nextQuestion(event){
	var chosenAnswer = event.target

	if (chosenAnswer ) {}
}
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