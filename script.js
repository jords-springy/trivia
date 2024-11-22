const quizData = [
    { question: "1/50: What is the capital of France?", answers: ["Berlin", "Madrid", "Paris", "Rome"], correct: "Paris" },
    { question: "2/50: Which element has the chemical symbol O?", answers: ["Oxygen", "Ozone", "Osmium", "Ocelot"], correct: "Oxygen" },
    { question: "3/50: What is the largest planet in our solar system?", answers: ["Earth", "Jupiter", "Saturn", "Mars"], correct: "Jupiter" },
    { question: "4/50: Who painted the Mona Lisa?", answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], correct: "Leonardo da Vinci" },
    { question: "5/50: What is the capital of Japan?", answers: ["Beijing", "Tokyo", "Seoul", "Bangkok"], correct: "Tokyo" },
    { question: "6/50: How many continents are there?", answers: ["5", "6", "7", "8"], correct: "7" },
    { question: "7/50: Which gas do plants absorb from the atmosphere?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], correct: "Carbon Dioxide" },
    { question: "8/50: Who wrote 'Romeo and Juliet'?", answers: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: "William Shakespeare" },
    { question: "9/50: What is the smallest unit of life?", answers: ["Atom", "Molecule", "Cell", "Tissue"], correct: "Cell" },
    { question: "10/50: Which country is famous for its tulips?", answers: ["Netherlands", "Canada", "Australia", "Japan"], correct: "Netherlands" },
    { question: "11/50: What is the boiling point of water in Celsius?", answers: ["50°C", "100°C", "200°C", "150°C"], correct: "100°C" },
    { question: "12/50: Which instrument has 88 keys?", answers: ["Piano", "Violin", "Guitar", "Flute"], correct: "Piano" },
    { question: "13/50: Who discovered gravity?", answers: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Thomas Edison"], correct: "Isaac Newton" },
    { question: "14/50: What is the national sport of Canada?", answers: ["Hockey", "Basketball", "Cricket", "Baseball"], correct: "Hockey" },
    { question: "15/50: Which ocean is the largest?", answers: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: "Pacific" },
    { question: "16/50: What does DNA stand for?", answers: ["Deoxyribonucleic Acid", "Dioxygen Nitrogen Acetate", "Dynamic Neutral Atom", "Diploid Nuclear Acid"], correct: "Deoxyribonucleic Acid" },
    { question: "17/50: Which city hosted the 2016 Summer Olympics?", answers: ["London", "Tokyo", "Rio de Janeiro", "Beijing"], correct: "Rio de Janeiro" },
    { question: "18/50: What is the main ingredient in guacamole?", answers: ["Tomato", "Avocado", "Cucumber", "Lettuce"], correct: "Avocado" },
    { question: "19/50: Which planet is closest to the Sun?", answers: ["Earth", "Venus", "Mars", "Mercury"], correct: "Mercury" },
    { question: "20/50: What is the chemical formula for water?", answers: ["H2O", "O2", "CO2", "H2SO4"], correct: "H2O" },
    { question: "21/50: Which famous scientist developed the theory of relativity?", answers: ["Nikola Tesla", "Isaac Newton", "Albert Einstein", "Stephen Hawking"], correct: "Albert Einstein" },
    { question: "22/50: How many colors are there in a rainbow?", answers: ["5", "6", "7", "8"], correct: "7" },
    { question: "23/50: What is the hardest natural substance on Earth?", answers: ["Gold", "Iron", "Diamond", "Quartz"], correct: "Diamond" },
    { question: "24/50: Which language has the most native speakers worldwide?", answers: ["English", "Spanish", "Mandarin", "Hindi"], correct: "Mandarin" },
    { question: "25/50: What is the name of the longest river in the world?", answers: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: "Nile" },
    { question: "26/50: Who was the first person to step on the moon?", answers: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], correct: "Neil Armstrong" },
    { question: "27/50: What is the square root of 64?", answers: ["6", "7", "8", "9"], correct: "8" },
    { question: "28/50: What is the capital city of Australia?", answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: "Canberra" },
    { question: "29/50: Which animal is known as the King of the Jungle?", answers: ["Tiger", "Elephant", "Lion", "Bear"], correct: "Lion" },
    { question: "30/50: What is the largest organ in the human body?", answers: ["Heart", "Liver", "Skin", "Brain"], correct: "Skin" },
    { question: "31/50: Which fictional detective is famous for saying, 'Elementary, my dear Watson'?", answers: ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "Columbo"], correct: "Sherlock Holmes" },
    { question: "32/50: Which ancient wonder is still standing?", answers: ["Hanging Gardens of Babylon", "Statue of Zeus", "Great Pyramid of Giza", "Colossus of Rhodes"], correct: "Great Pyramid of Giza" },
    { question: "33/50: What is the national animal of India?", answers: ["Peacock", "Elephant", "Tiger", "Cow"], correct: "Tiger" },
    { question: "34/50: How many sides does a hexagon have?", answers: ["5", "6", "7", "8"], correct: "6" },
    { question: "35/50: Who directed 'Titanic'?", answers: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Peter Jackson"], correct: "James Cameron" },
    { question: "36/50: What is the fastest land animal?", answers: ["Cheetah", "Lion", "Horse", "Leopard"], correct: "Cheetah" },
    { question: "37/50: Which country is home to the kangaroo?", answers: ["South Africa", "Australia", "India", "Brazil"], correct: "Australia" },
    { question: "38/50: What is the smallest country in the world?", answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: "Vatican City" },
    { question: "39/50: Which metal is liquid at room temperature?", answers: ["Gold", "Mercury", "Silver", "Aluminum"], correct: "Mercury" },
    { question: "40/50: Which planet is known as the Red Planet?", answers: ["Venus", "Mars", "Jupiter", "Saturn"], correct: "Mars" },
    { question: "41/50: What is the study of mushrooms called?", answers: ["Botany", "Mycology", "Ecology", "Zoology"], correct: "Mycology" },
    { question: "42/50: Which country has the maple leaf on its flag?", answers: ["Canada", "Norway", "Sweden", "Denmark"], correct: "Canada" },
    { question: "43/50: How many legs does a spider have?", answers: ["6", "8", "10", "12"], correct: "8" },
    { question: "44/50: What is the speed of light?", answers: ["186,000 miles/sec", "150,000 miles/sec", "200,000 miles/sec", "100,000 miles/sec"], correct: "186,000 miles/sec" },
    { question: "45/50: What is the largest mammal?", answers: ["Elephant", "Blue Whale", "Hippopotamus", "Giraffe"], correct: "Blue Whale" },
    { question: "46/50: Who was the first President of the United States?", answers: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], correct: "George Washington" },
    { question: "47/50: What is the tallest mountain in the world?", answers: ["Mount Kilimanjaro", "Mount Everest", "Mount McKinley", "K2"], correct: "Mount Everest" },
    { question: "48/50: Which gas is most abundant in the Earth's atmosphere?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], correct: "Nitrogen" },
    { question: "49/50: What is the freezing point of water in Fahrenheit?", answers: ["32°F", "0°F", "100°F", "212°F"], correct: "32°F" },
    { question: "50/50: What is the name of the currency used in Japan?", answers: ["Dollar", "Yen", "Won", "Peso"], correct: "Yen" },
];


let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeRemaining = 15;

const gameContainer = document.getElementById("game-container");
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");
const gameOverElement = document.getElementById("game-over");

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    nextButton.style.display = "none";
    gameOverElement.style.display = "none";
    gameContainer.style.display = "block";
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.innerText = currentQuestion.answers[index];
        button.disabled = false;
        button.classList.remove("correct", "incorrect");
    });
    timeRemaining = 15;
    timerElement.innerText = timeRemaining;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerElement.innerText = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            answerButtons.forEach(button => (button.disabled = true));
            nextButton.style.display = "block";
        }
    }, 1000);
}

function handleAnswer(selectedAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswer = currentQuestion.correct;
    const selectedButton = [...answerButtons].find(
        button => button.innerText === selectedAnswer
    );

    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add("correct");
        score++;
        updateScore();
        toastify("Correct Answer!", "success");
    } else {
        selectedButton.classList.add("incorrect");
        toastify("Wrong Answer!", "error");
    }

    answerButtons.forEach(button => (button.disabled = true));
    nextButton.style.display = "block";
}

function handleNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
        startTimer();
        nextButton.style.display = "none";
    } else {
        showGameOver();
    }
}

function updateScore() {
    scoreElement.innerText = `Score: ${score}`;
}

function showGameOver() {
    clearInterval(timerInterval);
    gameContainer.style.display = "none";
    gameOverElement.style.display = "block";
    gameOverElement.innerHTML = `
        <h2>Game Over</h2>
        <p>Your final score is: ${score}</p>
        <button id="restart-btn">Restart Game</button>
    `;
    document.getElementById("restart-btn").addEventListener("click", startGame);
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < quizData.length) {
        handleNext();
    }
});

answerButtons.forEach(button => {
    button.addEventListener("click", e => handleAnswer(e.target.innerText));
});

function toastify(message, type) {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Initialize the game
startGame();
