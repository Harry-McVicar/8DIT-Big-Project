/*Hides navigation bar as the user scrolls down while revealing it as they scroll up.*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("nav-container-fade").style.display = "none";
  }
  else {
    document.getElementById("nav-container-fade").style.display = "block";
  }
  prevScrollpos = currentScrollPos;
};


/*Navigation toggle at small screen size.*/

const links = document.querySelector(".links");

function openNav() {
  links.classList.toggle("showlinks");
}


/*Interactive Quiz*/

var quizQuestions = [
  {
    question: "1. Renewable Energy:",
    answers: {
      a: 'Is the effort to reduce the consumption of energy by using less of an energy service',
      b: 'Energy derived from natural sources that are replenished at a higher rate than they are consumed',
      c: 'Using less energy to do the same task-eliminating energy waste',
    },
    correctAnswer: 'b'
  },
  {
    question: "2. Passive Solar Energy:",
    answers: {
      a: 'Energy that is made to collect, store, reflect and distribute solar energy',
      b: 'Use of solar energy to heat a fluid, such as water',
      c: 'Organic matter that is produced in a renewable manner',
    },
    correctAnswer: 'a'
  },
  {
    question: "3. Active Solar Heating:",
    answers: {
      a: 'Organic matter that is produced in a renewable manner',
      b: 'Energy that is made to collect, store, reflect and distribute solar energy',
      c: 'Use of solar energy to heat a fluid, such as water',
    },
    correctAnswer: 'c'
  },
  {
    question: "4. Biomass Fuel:",
    answers: {
      a: 'Use of solar energy to heat a fluid, such as water',
      b: 'Organic matter that is produced in a renewable manner',
      c: 'Energy that is made to collect, store, reflect and distribute solar energy',
    },
    correctAnswer: 'b'
  },
  {
    question: "5. Hydroelectric Energy:",
    answers: {
      a: 'Thermal energy in the Earths crust which originates from the formation of the planet and from radioactive decay of materials',
      b: 'A process that can produce electricity using the temperature of the ocean',
      c: 'A form of energy that harnesses the power of water in motion, such as water flowing over a waterfall, to generate electricity',
    },
    correctAnswer: 'c'
  },
  {
    question: "6. Geothermal Energy:",
    answers: {
      a: 'Thermal energy in the Earths crust which originates from the formation of the planet and from radioactive decay of materials',
      b: 'A form of energy that harnesses the power of water in motion, such as water flowing over a waterfall, to generate electricity',
      c: 'A process that can produce electricity using the temperature of the ocean',
    },
    correctAnswer: 'a'
  },
  {
    question: "7. Alternate Energy:",
    answers: {
      a: 'A process that can produce electricity using the temperature of the ocean',
      b: 'Using less energy to do the same task-eliminating energy waste',
      c: 'Refers to energy that is other than fossil fuels such as renewable energy',
    },
    correctAnswer: 'c'
  },
  {
    question: "8. Ocean Thermal Energy Conversion:",
    answers: {
      a: 'A form of energy that harnesses the power of water in motion, such as water flowing over a waterfall, to generate electricity',
      b: 'A process that can produce electricity using the temperature of the ocean',
      c: 'Combined heat and power is the use of heat power stations to generate electricity',
    },
    correctAnswer: 'b'
  },
  {
    question: "9. Fuel Cells:",
    answers: {
      a: 'An electrochemical cell that converts the chemicals energy into fuel',
      b: 'Combined heat and power is the use of heat power stations to generate electricity',
      c: 'Using less energy to do the same task-eliminating energy waste',
    },
    correctAnswer: 'a'
  },
  {
    question: "10. Energy Efficiency:",
    answers: {
      a: 'Is the effort to reduce the consumption of energy by using less of an energy service',
      b: 'Using less energy to do the same task-eliminating energy waste',
      c: 'Combined heat and power is the use of heat power stations to generate electricity',
    },
    correctAnswer: 'b'
  },
  {
    question: "11. Cogeneration:",
    answers: {
      a: 'Combined heat and power is the use of heat power stations to generate electricity',
      b: 'Is the effort to reduce the consumption of energy by using less of an energy service',
      c: 'Using less energy to do the same task-eliminating energy waste',
    },
    correctAnswer: 'b'
  },
  {
    question: "12. Energy Conservation:",
    answers: {
      a: 'Using less energy to do the same task-eliminating energy waste',
      b: 'Combined heat and power is the use of heat power stations to generate electricity',
      c: 'Is the effort to reduce the consumption of energy by using less of an energy service',
    },
    correctAnswer: 'b'
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

  function showQuestions(questions, quizContainer) {
    var output = [];

    for(var i=0; i<questions.length; i++) {
      answers = [];

      for(letter in questions[i].answers) {
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>' + '<br>'
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer) {

    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numCorrect = 0;

    for(var i=0; i<questions.length; i++) {
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      if(userAnswer===questions[i].correctAnswer) {
        numCorrect++;
        answerContainers[i].style.color = 'lightgreen';
      }
      else {
        answerContainers[i].style.color = 'red';
      }
    }

    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  showQuestions(questions, quizContainer);

  submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer);
  };
}

generateQuiz(quizQuestions, quizContainer, resultsContainer, submitButton);


/*Drag and Drop*/

function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event
    .dataTransfer
    .clearData();
}

function showScore(dropzone, origin, score, scoreContainer) {
  if (dropzone.contains(document.getElementById("draggable-1"))) {
    score++;
  }
  if (dropzone.contains(document.getElementById("draggable-4"))) {
    score++;
  }
  if (dropzone.contains(document.getElementById("draggable-5"))) {
    score++;
  }
  if (dropzone.contains(document.getElementById("draggable-7"))) {
    score++;
  }
  if (origin.contains(document.getElementById("draggable-2"))) {
    score++;
  }
  if (origin.contains(document.getElementById("draggable-3"))) {
    score++;
  }
  if (origin.contains(document.getElementById("draggable-6"))) {
    score++;
  }
  if (origin.contains(document.getElementById("draggable-8"))) {
    score++;
  }
  scoreContainer.innerHTML = score + ' out of 8';
  console.log(score);
}

checkButton = document.getElementById("check");
checkButton.onclick = function() {
  const dropzone = document.querySelector(".dropzone");
  const origin = document.querySelector(".origin");
  const scoreContainer = document.getElementById("score");
  var score = 0;
  showScore(dropzone, origin, score, scoreContainer);
};
