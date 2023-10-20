let allQuestion = [
    {
        question: "Q1: What is 2 + 2 ?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Q2: What is 2 - 2 ?",
        options: ["3", "4", "5", "0"],
        correctAnswer: "0"
    },
    {
        question: "Q3: What is 2 * 2 ?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Q4: What is 12 / 2 ?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "6"
    },
    {
        question: "Q5: What is 22 + 2 ?",
        options: ["24", "44", "55", "26"],
        correctAnswer: "24"
    },
    {
        question: "Q6: What is 222 - 100 ?",
        options: ["123", "154", "125", "122"],
        correctAnswer: "122"
    },
    {
        question: "Q7: What is 25 * 2 ?",
        options: ["35", "154", "50", "60"],
        correctAnswer: "50"
    },
    {
        question: "Q8: What is 90 / 2 ?",
        options: ["36", "25", "45", "60"],
        correctAnswer: "45"
    },
    {
        question: "Q9: What is 800 / 2 ?",
        options: ["300", "400", "500", "600"],
        correctAnswer: "400"
    },
    {
        question: "Q1:: What is 27 * 2 ?",
        options: ["35", "54", "56", "68"],
        correctAnswer: "54"
    },

    
];

let nameInput = document.getElementById("name");
let questioncontainer = document.getElementById("question-container");
let submitButton = document.getElementById("submit");
let resultName = document.getElementById("result-name");
let resultMarks = document.getElementById("result-marks");
let resultPercentage = document.getElementById("result-percentage");


function generateQuestion() {
    questioncontainer.innerHTML = ""; 

    allQuestion.forEach((questionData, index) => {
        let questionElement = document.createElement("div");
        questionElement.innerHTML = `<p>${questionData.question}</p>`;

        questionData.options.forEach((option, optionIndex) => {
            questionElement.innerHTML += `
                <input type="radio" name="q${index}" value="${option}" id="q${index}o${optionIndex}">
                <label for="q${index}o${optionIndex}">${option}</label>
            `;
        });

        questioncontainer.appendChild(questionElement);
    });
}


function calculateResult() {
    let marks = 0;
    let totalQuestions = allQuestion.length;

    allQuestion.forEach((questionData, index) => {
        let selectedOption = document.querySelector(`input[name="q${index}"]:checked`);

        if (selectedOption) {
            if (selectedOption.value === questionData.correctAnswer) {
                marks++;
            }
        }
    });

    let percentage = (marks / totalQuestions) * 100;

    resultName.textContent = nameInput.value;
    resultMarks.textContent = marks;
    resultPercentage.textContent = percentage.toFixed(2);

    }

submitButton.addEventListener("click", () => {
    calculateResult();
});


generateQuestion();
