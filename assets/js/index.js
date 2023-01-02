var timerEl = document.querySelector('#timer');
var buttonEl = document.querySelector('#startGame');
var question = document.querySelector('#questions');
var answers = document.querySelector('#answers');
var questionResponse = document.querySelector('#questionResponse');
var showScore = document.querySelector('#showScore');
var questionCounter = 0;
var timeLeft;
var timeInterval;

function playGame() {
    timeLeft = 16;
  
      timeInterval = setInterval(function () {
      if (timeLeft >= 1) {
        timeLeft--;
        timerEl.textContent = 'Time: ' + timeLeft;
      } else {
        clearInterval(timeInterval);
        changeQuestion()
      }
    }, 1000);

    buttonEl.style.display = 'none';

    setTimeout(generateQuestions(questionCounter), 1000);
}

function generateQuestions (x) {
  if (questionCounter >= 3){
    return;
  }

  var popQuestion = quizInformation[x].question;
  var popAnswer = '<p class="choice choiceHover">' + quizInformation[x].answers[0] + '</p>'
                + '<p class="choice choiceHover">' + quizInformation[x].answers[1] + '</p>'
                + '<p class="choice choiceHover">' + quizInformation[x].answers[2] + '</p>'
                + '<p class="choice choiceHover">' + quizInformation[x].answers[3] + '</p>';

  question.textContent = popQuestion;
  answers.innerHTML = popAnswer;

  var choice = answers.querySelectorAll('.choice');

  for (var i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', chosenAnswer);
  }
}

function chosenAnswer () {
  if (questionCounter >= 3) {
    return;
  }

  var userChoice = this.textContent;
  var correctAnswer = quizInformation[questionCounter].correctAnswer;

  if (userChoice == correctAnswer) {
    questionResponse.textContent = 'Correct!';
    setTimeout(changeQuestion, 500);
  }else {
    questionResponse.textContent = 'Wrong!';
    setTimeout(changeQuestion, 500);
    timeLeft -= 5;
  }
}

function changeQuestion() {
  questionCounter++;

  if (timeLeft <= 0){
    question.textContent = 'You lost!';
    answers.innerHTML = '<p>Would you like to play again?</p>'
    + '<form action="./index.html"><input type="submit" value="Play Again"></form>';
    questionResponse.textContent = '';

    return;
  }

  if (questionCounter === 3) {
    clearInterval(timeInterval);
    endGame();
  };

  generateQuestions(questionCounter); 
  questionResponse.textContent = '';
}

function endGame() {
  var finalScore = document.querySelector('#showScore');
  timerEl.textContent = '';
  question.textContent = 'Final Score!';
  answers.textContent = '';
  finalScore.innerHTML = '<h1>You had ' + Math.ceil(timeLeft) + ' seconds left.</h1>'
                        + '<h3>Enter initials to save score:</h3>';

  var initials = document.querySelector('#form');
  initials.innerHTML = '<input type="text" id="initials">'
                     + '<button id="saveScore">Test</button>';

  var initialSubmit = document.querySelector('#saveScore');                       

  initialSubmit.onclick = function() {
  var initialsText = document.querySelector('#initials').value;

  var results = {
    initials: initialsText,
    score: timeLeft
  };
                      
  localStorage.setItem(localStorage.length + 1, JSON.stringify(results));
  }
}

buttonEl.addEventListener('click', playGame);