// Sri Krishna

const quizData = [
  {
    question: "Your friend is upset and not talking to anyone. You:",
    options: [
      "Give them space but check in later",
      "Immediately ask what's wrong",
      "Ignore them — they'll get over it",
      "Joke around to lighten the mood"
    ],
    answer: "Give them space but check in later"
  },
  {
    question: "Your friend has a big performance. What do you do?",
    options: [
      "Wish them luck and go watch",
      "Show up early and cheer loudly",
      "Watch if you’re already there",
      "Forget about it"
    ],
    answer: "Show up early and cheer loudly"
  },
  {
    question: "Your friend shares a secret with you. You:",
    options: [
      "Keep it private, no matter what",
      "Tell one trusted person only",
      "Accidentally spill it",
      "Share it — it's not a big deal"
    ],
    answer: "Keep it private, no matter what"
  },
  {
    question: "Your friend gets a better grade than you. You feel:",
    options: [
      "Proud of them",
      "Happy but slightly jealous",
      "Envious and annoyed",
      "Like competing harder next time"
    ],
    answer: "Proud of them"
  },
  {
    question: "You made plans with your friend but feel lazy. You:",
    options: [
      "Go anyway — a promise is a promise",
      "Ask to reschedule politely",
      "Cancel last minute",
      "Just don’t show up"
    ],
    answer: "Go anyway — a promise is a promise"
  },
  {
    question: "Your friend is being talked about behind their back. You:",
    options: [
      "Defend them immediately",
      "Listen but say nothing",
      "Join in to fit in",
      "Tell your friend later"
    ],
    answer: "Defend them immediately"
  },
  {
    question: "Your friend is struggling with money. You:",
    options: [
      "Help if you can",
      "Encourage them to stay strong",
      "Avoid the topic",
      "Lend money but complain about it"
    ],
    answer: "Help if you can"
  },
  {
    question: "You and your friend like the same person. You:",
    options: [
      "Talk it out honestly",
      "Step back and let them go for it",
      "Keep it to yourself",
      "Try to win the person first"
    ],
    answer: "Talk it out honestly"
  },
  {
    question: "You haven’t heard from your friend in a while. You:",
    options: [
      "Call/text to check in",
      "Wait until they contact you",
      "Assume they're mad",
      "Don’t care"
    ],
    answer: "Call/text to check in"
  },
  {
    question: "Your friend succeeds at something big. You:",
    options: [
      "Celebrate like it’s your own win",
      "Congratulate them",
      "Say 'cool' and move on",
      "Ignore it"
    ],
    answer: "Celebrate like it’s your own win"
  }
];


let timeLeft = 180;
const timer = document.querySelector('.timer');
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showResult(); // End quiz when time is up
    }
  }, 1000); // every second
}

let currentQuestion = 0;
let score = 0;

const totalQuestions = quizData.length;
const totalQuestionsDiv = document.querySelector('.totalQuestionsDiv');
totalQuestionsDiv.innerHTML = totalQuestions;

const question = document.querySelector('.question');
const answerDiv = document.querySelector('.answer');
const questionNum = document.querySelector('.questionNum');
const result = document.querySelector('.result');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

const optionButtons = [
  document.querySelector('#option1'),
  document.querySelector('#option2'),
  document.querySelector('#option3'),
  document.querySelector('#option4')
];

function showQuestion() {
    const q = quizData[currentQuestion];
    question.textContent = q.question;
    questionNum.textContent = currentQuestion + 1;
    q.options.forEach((option, index) => {
    const button = optionButtons[index];
    button.textContent = option;
    button.style.backgroundColor = ''; // reset background color
    button.style.display = 'inline-block';
    button.disabled = false;
    button.onclick = () => selectOption(option, button);
    answerDiv.style.display = 'none';
  });
}

function selectOption(selected, button) {
  const correct = quizData[currentQuestion].answer;

  if (selected === correct) {
    score++;
    button.style.backgroundColor = 'rgba(60, 170, 60, 0.85)';
    answerDiv.style.display = 'none';
  } 
  else {
    button.style.backgroundColor = 'rgba(170, 69, 60, 0.85)';
    answerDiv.innerHTML += quizData[currentQuestion].answer;
    answerDiv.style.display = 'block';
  }

  // Disable all buttons after selection
  optionButtons.forEach(btn => btn.disabled = true);
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
};

prevBtn.onclick = () => {
  currentQuestion--;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  clearInterval(timerInterval);
  question.textContent = '';
  questionNum.textContent = '';
  optionButtons.forEach(btn => btn.style.display = 'none');
  nextBtn.style.display = 'none';
  prevBtn.style.display = 'none';
  result.textContent = `You scored ${score} out of ${quizData.length} correct`;
  result.style.display = 'block';
}

showQuestion();
startTimer();

// Sri Krishna
