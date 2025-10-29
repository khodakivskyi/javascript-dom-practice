const answerInput = document.getElementById('answer');
const checkBtn = document.querySelector('.check-btn');
const nextBtn = document.getElementById('nextBtn');
const resultDiv = document.getElementById('result');
const questionLabel = document.getElementById('question');
const currentSpan = document.getElementById('current');
const scoreSpan = document.getElementById('score');

let currentQuestion = 0;
let correctAnswers = 0;
let questions = [];

function generateQuestion() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = a * b;

    return {a, b, correctAnswer}
}

function startTest() {
    questions = [];
    for (let i = 0; i < 10; i++) {
        questions.push(generateQuestion());
    }
    currentQuestion = 0;
    correctAnswers = 0;
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    answerInput.className = '';
    checkBtn.style.display = 'block';
    resultDiv.textContent = '';
    resultDiv.style.display = 'none';
    questionLabel.textContent = `${q.a} × ${q.b} =`;
    currentSpan.textContent = String(currentQuestion + 1);
    nextBtn.style.display = 'none';
    answerInput.disabled = false;
}

function checkAnswer() {
    const q = questions[currentQuestion];

    if (answerInput.value === '') {
        alert("answer must not be empty");
    } else {
        checkBtn.style.display = 'none';
        answerInput.disabled = true;
        if (parseInt(answerInput.value) === q.correctAnswer) {
            answerInput.classList.add('success');
            correctAnswers++;
        } else {
            answerInput.classList.add('fail');
            resultDiv.textContent = `Помилка, правильна відповідь: ${q.correctAnswer}`;
            resultDiv.style.display = 'block';
        }

        updateScore();

        if (currentQuestion < 9) {
            nextBtn.style.display = 'block';
        } else {
            showResult();
        }
    }
}

function updateScore() {
    const percentage = Math.round((correctAnswers / 10) * 100);
    scoreSpan.textContent = `${percentage}% (${correctAnswers} правильних відповідей з 10)`;
}

function showResult() {
    const percentage = Math.round((correctAnswers / 10) * 100);
    document.body.innerHTML = `
        <h2>Тест завершено!</h2>
        <p>Ваш результат: ${percentage}%</p>
        <p>Правильних відповідей: ${correctAnswers} з 10</p>
        <button id="restartBtn">Почати знову</button>
    `;

    document.getElementById('restartBtn').addEventListener('click', () => {
        location.reload();
    });
}

function nextQuestion() {
    currentQuestion++;
    answerInput.value = '';
    showQuestion();
}

startTest();