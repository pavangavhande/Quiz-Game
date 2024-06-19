// scripts.js

// Sample questions data
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correct: "Leonardo da Vinci"
    },
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Jupiter"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        correct: "JavaScript"
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["Alan Turing", "Charles Babbage", "Steve Jobs", "Bill Gates"],
        correct: "Charles Babbage"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');

// Initialize the quiz
function startQuiz() {
    showQuestion(quizData[currentQuestionIndex]);
    scoreElement.textContent = `Score: ${score}`;
}

// Display a question
function showQuestion(questionData) {
    questionElement.textContent = questionData.question;
    optionsContainer.innerHTML = '';

    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(option, questionData.correct));
        optionsContainer.appendChild(optionElement);
    });
}

// Handle option selection
function selectOption(selected, correct) {
    if (selected === correct) {
        score++;
    }
    // Move to the next question after a delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion(quizData[currentQuestionIndex]);
            scoreElement.textContent = `Score: ${score}`;
        } else {
            showResults();
        }
    }, 500);
}

// Show the final results
function showResults() {
    questionElement.textContent = `Quiz Finished! Your score is ${score}/${quizData.length}.`;
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
}

// Start the quiz on page load
startQuiz();

// Move to the next question on button click
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
        scoreElement.textContent = `Score: ${score}`;
    } else {
        showResults();
    }
});
