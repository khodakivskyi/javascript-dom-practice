const nextBtn = document.getElementById('nextBtn');
const resultDiv = document.getElementById('result');
const questionLabel = document.getElementById('question');
const currentSpan = document.getElementById('current');
const scoreSpan = document.getElementById('score');
const optionsContainer = document.querySelector('.options-container');

let currentQuestion = 0;
let correctAnswers = 0;
let questions = [];

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function generateOptions(correctAnswer) {
    const options = [correctAnswer];
    while (options.length < 4) {
        const option = randomInt(2, 100);
        if(!options.includes(option)) {
            options.push(option);
        }
    }

    return shuffle(options);
}

function generateQuestion() {
    const a = randomInt(1, 10);
    const b = randomInt(1, 10);
    const correctAnswer = a * b;
    const options = generateOptions(correctAnswer);
    return { a, b, correctAnswer, options };
}

function startTest() {
    for (let i = 0; i < 10; i++)
        questions.push(generateQuestion());
    currentQuestion = 0;
    correctAnswers = 0;
    updateScore();
    showQuestion();
}

function clearOptions() {
    optionsContainer.innerHTML = '';
}

function createAnswerLine(value, id) {
    const line = document.createElement('div');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'test-option';
    input.id = id;
    input.value = value;

    const label = document.createElement('label');
    label.htmlFor = input.id;
    label.textContent = value;

    line.appendChild(input);
    line.appendChild(label);
    return line;
}

function showQuestion() {
    const q = questions[currentQuestion];

    resultDiv.textContent = '';
    resultDiv.style.display = 'none';
    nextBtn.style.display = 'none';

    questionLabel.textContent = `${q.a} × ${q.b} =`;
    currentSpan.textContent = String(currentQuestion + 1);

    clearOptions();

    q.options.forEach((opt, i) => {
        const line = createAnswerLine(opt, i);
        optionsContainer.appendChild(line);
    });

    optionsContainer.onchange = (e) => {
        if (e.target && e.target.name === 'test-option') {
            optionsContainer.querySelectorAll('input[name="test-option"]')
                .forEach((inp) => (inp.disabled = true));
            checkAnswer(e.target.value);
            optionsContainer.onchange = null;
        }
    };
}

function checkAnswer(selectedValue) {
    const q = questions[currentQuestion];
    if (parseInt(selectedValue) === q.correctAnswer) {
        resultDiv.textContent = `Правильно!`;
        resultDiv.style.color = 'green';
        resultDiv.style.display = 'block';
        correctAnswers++;
    } else {
        resultDiv.textContent = `Помилка, правильна відповідь: ${q.correctAnswer}`;
        resultDiv.style.color = 'red';
        resultDiv.style.display = 'block';
    }

    updateScore();

    if (currentQuestion < 9) {
        nextBtn.style.display = 'inline-block';
    } else {
        showResult();
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
    <button id="restartBtn">Почати знову</button>`;
    document.getElementById('restartBtn').addEventListener('click', () => location.reload());
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
}

startTest();