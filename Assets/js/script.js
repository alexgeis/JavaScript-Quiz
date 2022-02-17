//declare variables
var navEl = document.querySelector("#nav-bar");
var timerEl = document.querySelector("#timer-display");
var titleEl = document.querySelector("#title");
var ans1El = document.querySelector("#ans1");
var ans2El = document.querySelector("#ans2");
var ans3El = document.querySelector("#ans3");
var ans4El = document.querySelector("#ans4");
var startBtn = document.querySelector("#start-btn");
var startPageEl = document.querySelector("#start-quiz-page");
var answerEL = document.querySelector("#answer-list");
var scoreEl = document.querySelector("#score");
var finalScoreEl = document.querySelector("#final-score");
var pushupEl = document.querySelector("#pushups");
var questPageEl = document.querySelector("#question-page");
var endPageEl = document.querySelector("#end-page");
var initialsInput = document.querySelector("#initials");
var scorePageEl = document.querySelector("#score-page");
var scoreListEl = document.querySelector("#high-score-list");
var viewScoresEl = document.querySelector("#view-high-scores");
var backBtn = document.querySelector("#back-btn");
var formEl = document.querySelector("#form-initials");
var answerRespEl = document.querySelector("#answer-response")
var clearBtn = document.querySelector("#clear-btn")

var questions = [
  // QUESTION OBJECT 1
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<scripting>", correct: false },
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
    ],
  },
  // QUESTION OBJECT 2
  {
    question: 'What is the correct JavaScript syntax to change the content of the following HTML element: <p id="demo">This is a demonstration.</p>',
    answers: [
      { text: 'document.getElementById("demo").textContent = "Hello World!";', correct: true },
      { text: '#demo.textContent = "Hello World!";', 
      correct: false },
      { text: 'document.getElementByName("p").textContent = "Hello World!";', 
      correct: false },
      { text: 'document.getElement("p").textContent = "Hello World!";', 
      correct: false },
    ],
  },
  // QUESTION OBJECT 3
  {
    question: 'What is the correct syntax for referring to an external script called "xyz.js"?',
    answers: [
      { text: '<script href="xyz.jx">', correct: false },
      { text: '<script name="xyz.jx">', correct: false },
      { text: '<script src="xyz.jx">', correct: true },
      { text: '<script class="xyz.jx">', correct: false },
    ],
  },
  // QUESTION OBJECT 4 
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function = myFunction()", correct: false },
      { text: "function.myFunction()", correct: false },
      { text: "function:myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
    ],
  },
  // QUESTION OBJECT 5
  {
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers: [
      { text: "if (i<> 5)", correct: false },
      { text: "if (i != 5)", correct: true },
      { text: "if i <> 5", correct: false },
      { text: "if i != 5 then", correct: false },
    ],
  },
  // QUESTION OBJECT 6
  {
    question: "How can you add a comment in a JavaScript?",
    answers: [
      { text: "'This is a comment", correct: false },
      { text: "<!--This is a comment-->", correct: false },
      { text: "~This is a comment~", correct: false },
      { text: "//This is a comment", correct: true },
    ],
  },
  // QUESTION OBJECT 7
  {
    question: "What is the correct way to write a JavaScript array?",
    answers: [
      { text: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false },
      { text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false },
      { text: 'var colors = ["red", "green", "blue"]', correct: true },
      { text: ' var colors = "red", "green", "blue"', correct: false },
    ],
  },
  // QUESTION OBJECT 8
  {
    question: "JavaScript is the same as Java.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
      { text: "Close enough, right?", correct: false },
      { text: "Intentionally false answer to round out 4 options", correct: false },
    ],
  },
];

var timer = 0;
var score = 0;
var questionIndex = 0;
var pushCount = 0;
var initials = localStorage.getItem("initials");
var savedScores = JSON.parse(localStorage.getItem("highScore")) || [];

//upon pageload, show start of code quiz page (and nothing else)
function renderStart() {
  //show start page
  startPageEl.style.display = "block";
  //hide questions and answers
  questPageEl.style.display = "none";
  //hide game over page
  endPageEl.style.display = "none";
  //hide high score page
  scorePageEl.style.display = "none";
  //hide timer
  timerEl.style.display = "none";
  //hide back button
  backBtn.style.display = "none";

  
  // hide pushup count
  // pushupEl.style.display = "none"; 
  // pushCount = 0;
  //hide score
  // scoreEl.style.display = "none";
  // score = 0;
  // questionIndex = 0;
}
renderStart();

function displayQuiz(event){
//add question and answer text
  titleEl.textContent = questions[questionIndex].question;
  ans1El.textContent = questions[questionIndex].answers[0].text;
  ans2El.textContent = questions[questionIndex].answers[1].text;
  ans3El.textContent = questions[questionIndex].answers[2].text;
  ans4El.textContent = questions[questionIndex].answers[3].text;
//pull from the question array of objects, at the question index position,go within the key "answers" at a certain index, then pull the value of key "correct" - (will return a boolean "string")
  ans1El.setAttribute(
    "data-correct",
    questions[questionIndex].answers[0].correct
  );
  ans2El.setAttribute(
    "data-correct",
    questions[questionIndex].answers[1].correct
  );
  ans3El.setAttribute(
    "data-correct",
    questions[questionIndex].answers[2].correct
  );
  ans4El.setAttribute(
    "data-correct",
    questions[questionIndex].answers[3].correct
  );
// function to check correctness of answer
  // function checkCorrect(){
  //   var isCorrect = event.target.dataset.correct;
  //   if (isCorrect === "true") {
  //     score++;
  //     questionIndex++;
  //     answerRespEl.textContent = "Noice! You're correct!"
  //     if (questionIndex >= questions.length) {
  //       endGame();
  //     } else {
  //       displayQuiz();
  //     }
  //   } 
  //   else {
  //     // PUNISHMENT
  //     pushCount++;
  //     pushupEl.textContent = "Pushups: " + pushCount;
  //     answerRespEl.textContent = "Wrong! Hit the books!"
  //     questionIndex++;
  //     if (questionIndex >= questions.length) {
  //       endGame();
  //     } else {
  //       displayQuiz();
  //     }
  //   }
  // }

  //below are click events to show each button is returning a true or false STRING (NOT FULLY BOOLEAN)

  
};

function startGame() {
  displayQuiz();
  //show questions and answers
  questPageEl.style.display = "block";
  //show timer
  timerEl.style.display = "inline";
  //hide game over page
  endPageEl.style.display = "none";
  //hide high score page
  scorePageEl.style.display = "none";
  //hide start page
  startPageEl.style.display = "none";
  //hide back button
  backBtn.style.display = "none";
  // hide pushup count
  // pushupEl.style.display = "block"; 
  //hide score
  // scoreEl.style.display = "block";


  //timer starts - turn back to 16 when finished with testing
  var timeLeft = 101;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds left...";

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);

  //question is displayed
  ans1El.addEventListener("click", function (event) {
    var isCorrect = event.target.dataset.correct;
    console.log(event.target.dataset.correct);
    if (isCorrect === "true") {
      score++;
      questionIndex++;
      answerRespEl.textContent = "Noice! You're correct!";
      // answerRespEl.classList.add("correct-text");
      scoreEl.textContent = "Score: " + score;
      if (questionIndex >= questions.length) {
        endGame();
        clearInterval(timeInterval);
      } else {
        displayQuiz();
      }
    } 
    else {
      // PUNISHMENT
      pushCount++;
      timeLeft-=5;
      questionIndex++;
      pushupEl.textContent = "Pushups: " + pushCount;
      answerRespEl.textContent = "Wrong! Hit the books!";
      // answerRespEl.classList.add("wrong-text");
      if (questionIndex >= questions.length) {
        endGame();
        clearInterval(timeInterval);
      } else {
        displayQuiz();
      }
    }
  });

  ans2El.addEventListener("click", function (event) {
    console.log(event.target.dataset.correct);
    var isCorrect = event.target.dataset.correct;
    if (isCorrect === "true") {
      score++;
      questionIndex++;
      answerRespEl.textContent = "Noice! You're correct!";
      // answerRespEl.classList.add("correct-text");
      scoreEl.textContent = "Score: " + score;
      if (questionIndex >= questions.length) {
        endGame();
        clearInterval(timeInterval);
      } else {
        displayQuiz();
      }
    } 
    else {
      // PUNISHMENT
      pushCount++;
      timeLeft-=5;
      pushupEl.textContent = "Pushups: " + pushCount;
      answerRespEl.textContent = "Wrong! Hit the books!";
      // answerRespEl.classList.add("wrong-text");
      questionIndex++;
      if (questionIndex >= questions.length) {
        endGame();
        clearInterval(timeInterval);
      } else {
        displayQuiz();
      }
    }
  });

  ans3El.addEventListener("click", function (event) {
    console.log(event.target.dataset.correct);
    var isCorrect = event.target.dataset.correct;
    if (isCorrect === "true") {
      score++;
      questionIndex++;
      answerRespEl.textContent = "Noice! You're correct!";
      // answerRespEl.classList.add("correct-text");
      scoreEl.textContent = "Score: " + score;
      if (questionIndex >= questions.length) {
        endGame();
        clearInterval(timeInterval);
      } else {
        displayQuiz();
      }
    } 
    else {
      // PUNISHMENT
      pushCount++;
      timeLeft-=5;
      pushupEl.textContent = "Pushups: " + pushCount;
      answerRespEl.textContent = "Wrong! Hit the books!";
      // answerRespEl.classList.add("wrong-text");
      questionIndex++;
      if (questionIndex >= questions.length) {
        endGame();
        clearInterval(timeInterval);
      } else {
        displayQuiz();
      }
    }
  });

  ans4El.addEventListener("click", function (event) {
    console.log(event.target.dataset.correct);
    var isCorrect = event.target.dataset.correct;
    if (isCorrect === "true") {
      score++;
      questionIndex++;
      answerRespEl.textContent = "Noice! You're correct!";
      // answerRespEl.classList.add("correct-text");
      scoreEl.textContent = "Score: " + score;
      if (questionIndex >= questions.length) {
        endGame();
        clearInterval(timeInterval);
      } else {
        displayQuiz();
      }
    } 
    else {
      // PUNISHMENT
      pushCount++;
      timeLeft-=5;
      pushupEl.textContent = "Pushups: " + pushCount;
      answerRespEl.textContent = "Wrong! Hit the books!";
      // answerRespEl.classList.add("wrong-text");
      questionIndex++;
      if (questionIndex >= questions.length) {
        endGame();
        clearInterval(timeInterval);
      } else {
        displayQuiz();
      }
    }
  });
}

function endGame() {
  //show game over page
  endPageEl.style.display = "block";
  //show back button
  backBtn.style.display = "inline";
  //hide questions and answers
  questPageEl.style.display = "none";
  //hide high score page
  scorePageEl.style.display = "none";
  //hide start page
  startPageEl.style.display = "none";

  finalScoreEl.textContent = "Great job!" + "\nYour final score: " + score;

  timeLeft = 0;
  timerEl.textContent = timeLeft + " seconds left! Time's up!";

  initialsInput.value = "";
}

//show only the high score page
function showScores() {
  // event.preventDefault();
  //show high score page
  scorePageEl.style.display = "block";
  //show back button
  backBtn.style.display = "inline";
  //hide questions and answers
  questPageEl.style.display = "none";
  //hide timer
  timerEl.style.display = "none";
  //hide game over page
  endPageEl.style.display = "none";
  //hide start page
  startPageEl.style.display = "none";
}

//solely to allow for the "view high scores" link in nav to work
function showScoresB(event) {
  event.preventDefault();
  //show high score page
  scorePageEl.style.display = "block";
  //show back button
  backBtn.style.display = "inline";
  //hide questions and answers
  questPageEl.style.display = "none";
  //hide timer
  timerEl.style.display = "none";
  //hide game over page
  endPageEl.style.display = "none";
  //hide start page
  startPageEl.style.display = "none";
}

//take user input of initials, store in local storage, display as a list on final page
function renderInitials(event) {
  // prevent page reload
  event.preventDefault();
  // display list of scores
  showScores();

//captures and stores input as local storage
  var scoreBoard = {
    finalScore: score,
    initials: initialsInput.value.trim()
  }
  savedScores.push(scoreBoard);
  console.log(savedScores);
  localStorage.setItem("highScore",JSON.stringify(savedScores));
  renderList();
};

function renderList(){
  //creates <li> and appends to current <ul>
  // console.log("before");
  for (let i = 0; i < savedScores.length ;i++){
    const element = savedScores[i];
    var newLi = document.createElement("li");
    scoreListEl.appendChild(newLi);
    newLi.textContent = element.initials + " --- " + element.finalScore;
    console.log(savedScores);
  }
  // console.log("after");
}
// console.log(renderInitials);

function clearList(event){
  event.preventDefault;
  savedScores = [];
  localStorage.setItem("highScore",JSON.stringify(savedScores));
  scoreListEl.textContent = "";
  renderList();
}
//after clicking "start quiz" button, startGame() is run
startBtn.addEventListener("click", startGame);

//after user submits their initials, renderInitials():
formEl.addEventListener("submit", renderInitials);

//NAV BUTTONS
//jumps to the high score page
viewScoresEl.addEventListener("click", showScoresB);

//jumps to the start page
backBtn.addEventListener("click", function(){
  // score = 0;
  // scoreEl.textContent = "Score: " + score;
  // console.log(score)
  // questionIndex = 0;
  // console.log(questionIndex)
  // pushCount = 0;
  // pushupEl.textContent = "Pushups: " + pushCount;
  // console.log(pushCount)
  location.reload();
  renderStart();
});

//clear high scores
clearBtn.addEventListener("click", clearList)