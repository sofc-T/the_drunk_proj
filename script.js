const questions = [
    { q: "What is 77 + 33?", a: 110 },
    { q: "What is 105 - 28?", a: 77 },
    { q: "What is 15 + 16 + 17?", a: 48 },
    { q: "What is 123 - 45?", a: 78 },
    { q: "What is 7 * 8?", a: 56 },
    { q: "What is 12 * 11?", a: 132 },
    { q: "What is 108 ÷ 9?", a: 12 },
    { q: "What is 54 ÷ 6?", a: 9 },
    { q: "What is 15 * 4 ÷ 2?", a: 30 },
    { q: "What is (8 + 5) * 6?", a: 78 }
];

let currentQuestion = 0;
let score = 0;

function startTest() {
    document.getElementById('start-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    document.getElementById('question-text').innerText = questions[currentQuestion].q;
    document.getElementById('q-num-display').innerText = currentQuestion + 1;
    document.getElementById('answer-input').value = '';
    document.getElementById('answer-input').focus();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        submitAnswer();
    }
}

function submitAnswer() {
    const answerInput = document.getElementById('answer-input').value;
    
    // Validate it's not totally empty (though an empty answer just counts as wrong)
    const answer = parseInt(answerInput, 10);
    
    // Increment score if math is correct
    if (!isNaN(answer) && answer === questions[currentQuestion].a) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('score-text').innerText = score;

    let drunkMessage = "";
    let color = "#333";

    if (score === 10) {
        drunkMessage = "100% Sober. You are stone cold sober.";
        color = "#28a745"; // green
    } else if (score >= 8) {
        drunkMessage = "Slightly buzzed. You've probably had a drink or two.";
        color = "#856404"; // yellow-dark
    } else if (score >= 5) {
        drunkMessage = "Tipsy. You're definitely feeling it.";
        color = "#fd7e14"; // orange
    } else if (score >= 3) {
        drunkMessage = "Drunk. You should probably call an Uber.";
        color = "#dc3545"; // red
    } else {
        drunkMessage = "Absolutely Hammered. Go to sleep immediately!";
        color = "#721c24"; // dark red
    }
    
    const levelTextElement = document.getElementById('drunk-level-text');
    levelTextElement.innerText = drunkMessage;
    levelTextElement.style.color = color;
}