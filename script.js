const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const answers = document.querySelectorAll('.answer');
const option_a_text = document.getElementById('option-a-text');
const option_b_text = document.getElementById('option-b-text');
const option_c_text = document.getElementById('option-c-text');
const option_d_text = document.getElementById('option-d-text');
const submitBtn = document.getElementById('Submit');

let currentIndex = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentIndex];
    question.innerText = currentQuizData.question;
    option_a_text.innerText = currentQuizData.a;
    option_b_text.innerText = currentQuizData.b;
    option_c_text.innerText = currentQuizData.c;
    option_d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelectedAns();

    if (answer) {
        if (answer === quizData[currentIndex].correct) {
            score++;
        }

        currentIndex++;
        if (currentIndex < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly!</h2>

        <button onClick="location.reload()">Reload</button>
        `
        }
    }
})

function deselectAnswers() {
    answers.forEach(ans => ans.checked = false);
}

function getSelectedAns() {
    let ans;

    answers.forEach(answer => {
        if (answer.checked) {
            ans = answer.id;
        }
    });
    return ans;
}
