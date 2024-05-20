// Create a Quiz App. Features are Given below.

 // a. show single question at a time.
 // b. show current Question fio on the top and also show total 

// Questions Quantity.

 // c. show all options.dx

 // d. show next question button.

// Process

// 1. create data for Quiz App.
 // 2. Create HTML for QUIZ App.
// 3. Create CSS for Quiz App and proper Design.
 // 4. apply All Element IDs in HTML.

// quiz app//


var allQuizQuestions = [
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "Incorrect",
            "Incorrect",
            "Incorrect"
        ],
        correctAnswer: "Hyper Text Markup Language",
    },
    {
        question: "CSS stands for?",
        options: [
            "Incorrect",
            "Cascading Style Sheet",
            "Incorrect",
            "Incorrect"
        ],
        correctAnswer: "Cascading Style Sheet",
    },
    {
        question: "JS stands for?",
        options: [
            "Incorrect",
            "Incorrect",
            "Incorrect",
            "Java Scripts"
        ],
        correctAnswer: "Java Scripts",
    },
    {
        question: "JS stands for?",
        options: [
            "Incorrect",
            "Incorrect",
            "Incorrect",
            "Java Scripts"
        ],
        correctAnswer: "Java Scripts",
    },
    {
        question: "JS stands for?",
        options: [
            "Incorrect",
            "Incorrect",
            "Incorrect",
            "Java Scripts"
        ],
        correctAnswer: "Java Scripts",
    }
];

var currentQuestionNo = document.getElementById("currentQuestionNo");
var totalQuestionNo = document.getElementById("totalQuestions");
var question = document.getElementById("question");
var options = document.getElementById("options");

var currentIndex = 0;
var marks = 0;

totalQuestionNo.innerHTML = allQuizQuestions.length;

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= allQuizQuestions.length) {
        alert(`Quiz completed! Your score is ${marks} out of ${allQuizQuestions.length}`);
        currentIndex = 0;
        marks = 0;
    }
    renderQuestion();
}

function checkQuestion(selectedOption) {
    if (selectedOption === allQuizQuestions[currentIndex].correctAnswer) {
        marks++;
    }
    nextQuestion();
}

function renderQuestion() {
    var currentQuestion = allQuizQuestions[currentIndex];
    currentQuestionNo.innerHTML = currentIndex + 1;
    question.innerHTML = currentQuestion.question;

    options.innerHTML = "";
    currentQuestion.options.forEach(option => {
        var button = document.createElement("button");
        button.innerText = option;
        button.className = "btn btn-danger option";
        button.onclick = function() {
            checkQuestion(option);
        };
        var div = document.createElement("div");
        div.className = "col-md p-2";
        div.appendChild(button);
        options.appendChild(div);
    });
}

renderQuestion();
