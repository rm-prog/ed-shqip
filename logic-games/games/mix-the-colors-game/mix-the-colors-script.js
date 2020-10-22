
const startButton1 = document.getElementById("startButton");
const questionDiv = document.getElementById("question");
const mixedColors = document.getElementsByClassName("mixed-colors");
const alternativesContainer = document.getElementById("alternatives-container");
const alternativeButtons = document.getElementsByClassName("alternatives");

alternativeButtons[0].disabled = true;
alternativeButtons[1].disabled = true;
alternativeButtons[2].disabled = true;

startButton1.addEventListener("click", startGame);

let correctAnswers = 0;
let incorrectAnswers = 0;

let questionIndex = -1;

const questionAndAnswers = [
    {
        correctAnswer: "lejla",
        mixed_colors: ["red", "blue"],
        alternatives_: [{
            color: "orange",
            value: 0
        },
        {
            color: "purple",
            value: 1
        },
        {
            color: "pink",
            value: 0
        }]
    },
    {
        correctAnswer: "kafe",
        mixed_colors: ["red", "lightgreen"],
        alternatives_: [{
            color: "brown",
            value: 1
        },
        {
            color: "orange",
            value: 0
        },
        {
            color: "purple",
            value: 0
        }]
    },
    {
        correctAnswer: "e gjelbert",
        mixed_colors: ["blue", "yellow"],
        alternatives_: [{
            color: "orange",
            value: 0
        },
        {
            color: "red",
            value: 0
        },
        {
            color: "green",
            value: 1
        }]
    },
    {
        correctAnswer: "gri",
        mixed_colors: ["black", "white"],
        alternatives_: [{
            color: "black",
            value: 0
        },
        {
            color: "grey",
            value: 1
        },
        {
            color: "blue",
            value: 0
        }]
    },
    {
        correctAnswer: "roze",
        mixed_colors: ["red", "white"],
        alternatives_: [{
            color: "orange",
            value: 0
        },
        {
            color: "pink",
            value: 1
        },
        {
            color: "yellow",
            value: 0
        }]
    }
];

function startGame(){
    startButton1.innerHTML = "Next";
    questionDiv.style.display = "block";
    questionIndex++;
    startButton1.disabled = true;
    if(questionAndAnswers[questionIndex] != undefined){
        questionDiv.innerHTML = "Cfare ngjyre krijojme nese perziejme ";
        mixedColors[0].style.backgroundColor = questionAndAnswers[questionIndex].mixed_colors[0];
        mixedColors[1].style.backgroundColor = questionAndAnswers[questionIndex].mixed_colors[1];
        for(let i=0; i<3; i++){
            alternativeButtons[i].disabled = false;
            alternativeButtons[i].style.backgroundColor = questionAndAnswers[questionIndex].alternatives_[i].color;
            alternativeButtons[i].value = questionAndAnswers[questionIndex].alternatives_[i].value;
        }
    } else{
        alternativesContainer.style.display = "none";
        mixedColors[0].style.display = "none";
        mixedColors[1].style.display = "none";
        questionDiv.style.fontSize = "2rem";
        questionDiv.innerHTML = `Pergjigje te sakta: ${correctAnswers} ${'<br>'}
                                Pergjigje te gabuara: ${incorrectAnswers}`
    }
}

function alternativeClick(btn){
    if(btn.value == "1"){
        correctAnswers++;
        questionDiv.innerHTML = "Bravo!! Pergjigje e sakte."
    } else{
        incorrectAnswers++;
        questionDiv.innerHTML = `Gabim!! Formohet ngjyra ${questionAndAnswers[questionIndex].correctAnswer}`;
    }
    startButton1.disabled = false;
    for(let i=0; i<3; i++){
        alternativeButtons[i].disabled = "true";
    }
}
