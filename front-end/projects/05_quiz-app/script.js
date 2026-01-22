document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.querySelector("#quiz-container");
  const questionContainer = document.querySelector("#question-container");
  const questionDisplay = document.querySelector("#question-text");
  const choiceList = document.querySelector("#choices-list");
  const nextBtn = document.querySelector("#next-btn");
  const resultContainer = document.querySelector("#result-container");
  const scoreDisplay = document.querySelector("#score");
  const resetBtn = document.querySelector("#restart-btn");
  const startBtn = document.querySelector("#start-btn");

  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyperlink and Text Markup Language",
        "Home Tool Markup Language",
      ],
      answer: "HyperText Markup Language",
      isSelected: false,
    },
    {
      question: "Which language is mainly used to style web pages?",
      options: ["CSS", "HTML", "JavaScript", "Python"],
      answer: "CSS",
      isSelected: false,
    },
    {
      question: "What is the role of JavaScript in web development?",
      options: [
        "Adding interactivity to web pages",
        "Structuring web content",
        "Styling web pages",
        "Managing databases",
      ],
      answer: "Adding interactivity to web pages",
      isSelected: false,
    },
    {
      question:
        "In the client-server model, which component sends requests to the server?",
      options: ["Client", "Server", "Database", "API"],
      answer: "Client",
      isSelected: false,
    },
    {
      question:
        "Which of the following is a popular web development framework?",
      options: ["React", "Photoshop", "MS Word", "Excel"],
      answer: "React",
      isSelected: false,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
      isSelected: false,
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<hyperlink>"],
      answer: "<a>",
      isSelected: false,
    },
    {
      question: "Which of these is a JavaScript framework?",
      options: ["Angular", "Photoshop", "WordPress", "Excel"],
      answer: "Angular",
      isSelected: false,
    },
    {
      question: "Which attribute is used to open a link in a new tab?",
      options: ["target", "href", "src", "rel"],
      answer: "target",
      isSelected: false,
    },
    {
      question: "Which HTML element is used for the largest heading?",
      options: ["<h1>", "<h6>", "<heading>", "<title>"],
      answer: "<h1>",
      isSelected: false,
    },
  ];

  let currectQuestionIndex = 0;
  let score = 0;
  let isSelected = false;

  startBtn.addEventListener("click", () => {
    startQuiz();
  });

  nextBtn.addEventListener("click", () => {
    currectQuestionIndex++;
    if (currectQuestionIndex < questions.length) {
      showQusetion();
    } else {
      showResult();
    }
  });

  resetBtn.addEventListener("click", () => {
    currectQuestionIndex = 0;
    score = 0;
    questions.forEach((q) => (q.isSelected = false));
    startBtn.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.add("hidden");
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQusetion();
  }

  function showQusetion() {
    nextBtn.classList.add("hidden");
    questionDisplay.textContent = questions[currectQuestionIndex].question;
    choiceList.innerHTML = "";
    isSelected = questions[currectQuestionIndex].isSelected;

    questions[currectQuestionIndex].options.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", (evt) => {
        evt.stopPropagation();
        selectAnswer(evt.target);
      });
      choiceList.appendChild(li);
    });

    function selectAnswer(choice) {
      const correctAnswer = questions[currectQuestionIndex].answer;
      if (choice.textContent == correctAnswer) {
        increaseScore();
      }
      nextBtn.classList.remove("hidden");
      if (!isSelected) {
        choice.classList.add("selected");
        questions[currectQuestionIndex].isSelected = true;
        isSelected = true;
      }
    }

    function increaseScore() {
      if (!isSelected) {
        score++;
      }
    }
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} / ${questions.length}`;
  }
});
