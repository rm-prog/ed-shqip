const quizCont = document.getElementById("quiz-container");
const alternativesCont = document.getElementById("alternatives");
const alt1 = document.getElementById("alt1");
const alt2 = document.getElementById("alt2");
const alt3 = document.getElementById("alt3");
const quesCont = document.getElementById("question");
const correctAnswer = document.getElementById("corrAnswer");
const nextBtn = document.getElementById("next1");

nextBtn.disabled = true;

nextBtn.addEventListener("click", goNextQuestion);



let quesNumber = -1;
let numOfRightAnswers = 0;
let numOfWrongAnswers = 0;

function backHistory(){
    window.history.back();
}

function mouseOver1(btn){
    btn.style.borderWidth = "3px";
}

function mouseOut1(btn){
    btn.style.borderWidth = "1px";
}



function altClick(b){
    if(b.value == "0"){
        b.style.backgroundColor = "red";
        b.style.color = "white";
        numOfWrongAnswers++;
    } else{
        b.style.backgroundColor = "green";
        b.style.color = "white";
        correctAnswer.innerHTML += " . Bravoo!!"
        numOfRightAnswers++;
    }
    alt1.disabled = true;
    alt2.disabled = true;
    alt3.disabled = true;   
    correctAnswer.style.display = "block";
    quesNumber++;
    nextBtn.disabled = false;
}

const newQuestions = [
    {
        question: `Gjeni vleren e x-it. ${'<br>'}3x - 2 < 19`,
        alternatives: [
            { a: "x < 7", correct: true},
            { b: "x <= 7", correct: false},
            { c: "x > 6", correct: false}
        ],
        correct: "| x < 7 || 3x < 19+2 || x < 21/3 || x < 7"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}3(x-2) < 36`,
        alternatives: [
            { a: "x <= 12", correct: false},
            { b: "x < 15", correct: true},
            { c: "x > 10", correct: false}
        ],
        correct: "| x < 15 || 3x - 6 < 36 || 3x < 36+6 || x < 42/3 || x < 14"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}2x + 1 < 17`,
        alternatives: [
            { a: "x > 8", correct: false},
            { b: "x < 7", correct: false},
            { c: "x < 8", correct: true}
        ],
        correct: "| x < 8 || 2x < 17 - 1 || x < 16/2 || x < 8"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}5x-2 <= 28`,
        alternatives: [
            { a: "x <= 6", correct: true},
            { b: "x <= 7", correct: false},
            { c: "x > 6", correct: false}
        ],
        correct: "| x <= 6 || 5x <= 28+2 || x <= 30/5 || x <= 6"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}5(x-2) <= 20`,
        alternatives: [
            { a: "x < 6", correct: false},
            { b: "x <= 6", correct: true},
            { c: "x > 6", correct: false}
        ],
        correct: "| x <= 6 || 5x - 10 <= 20 || 5x <= 20+10 || x <= 30/5 || x <= 6"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}10 > 2x > 2`,
        alternatives: [
            { a: "4 > x > 1", correct: false},
            { b: "5 >= x > 1", correct: false},
            { c: "5 > x > 1", correct: true}
        ],
        correct: "| 5 > x > 1 || 10/2 > x > 2/2 || 5 > x > 1"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}2x + 3 > 23`,
        alternatives: [
            { a: "x > 10", correct: true},
            { b: "x >= 10", correct: false},
            { c: "x > 9", correct: false}
        ],
        correct: "| x > 10 || 2x > 23-3 || x > 20/2 || x > 10"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}5x + 5 > 30`,
        alternatives: [
            { a: "x > 7", correct: false},
            { b: "x > 5", correct: true},
            { c: "x > 6", correct: false}
        ],
        correct: "| x > 5 || 5x > 30-5 || x > 25/5 || x > 5"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}3x - 3 < 12`,
        alternatives: [
            { a: "x < 7", correct: false},
            { b: "x > 6", correct: false},
            { c: "x < 5", correct: true}
        ],
        correct: "| x < 5 || 3x < 12+3 || x < 15/3 || x < 5"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}5x - 1 > 9`,
        alternatives: [
            { a: "x > 2", correct: true},
            { b: "x > 3", correct: false},
            { c: "x < 5", correct: false}
        ],
        correct: "| x > 2 || 5x > 9+1 || x > 10/5 || x > 2"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}4(x – 1) < 3(x + 1)`,
        alternatives: [
            { a: "x < 6", correct: false},
            { b: "x < 7", correct: true},
            { c: "x < 9", correct: false}
        ],
        correct: "| x < 7 || 4x-4 < 3x+3 || 4x-3x < 3+4 || x < 7"
    },
    {
        question: `Gjeni vleren e z. ${'<br>'}z + 5 >= 3`,
        alternatives: [
            { a: "z >= -3", correct: false},
            { b: "z >= 2", correct: false},
            { c: "z >= -2", correct: true}
        ],
        correct: "| z >= -2 || z >= 3-5 || z>= -2"
    },
    {
        question: `Gjeni vleren e y-it. ${'<br>'}7y + 2 <= 65`,
        alternatives: [
            { a: "y <= 9", correct: true},
            { b: "y <= 8", correct: false},
            { c: "y <= 12", correct: false}
        ],
        correct: "| y <= 9 || 7y <= 65-2 || y <= 63/7 || y <= 9"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}5(x + 2) – 3x <= 4 + 2x + 3(x – 1)`,
        alternatives: [
            { a: "x >= 4", correct: false},
            { b: "x >= 3", correct: true},
            { c: "x >= 5", correct: false}
        ],
        correct: "| x >= 3 || 5x+10 - 3x <= 4 + 2x + 3x - 3 || 2x+10 <= 1+5x || 10-1 <= 5x-2x || 3x >= 9 || x >= 9/3 || x >= 3"
    }
]

// Rendit rastesisht
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

shuffle(newQuestions);

function goNextQuestion(){
    if(newQuestions[quesNumber] == undefined){
        quizCont.removeChild(alternativesCont);
        quizCont.style.fontSize = "2rem";
        quesCont.innerHTML = "Rezultatet";
        quesCont.style.fontSize = "1.5rem";
        correctAnswer.innerHTML = `Pergjigje te sakta: ${numOfRightAnswers} ${"<br>"} \
                                   Pergjigje te gabuara: ${numOfWrongAnswers} ${"<br>"} ${"<br>"}
                                   - Gjeni vleren e x-it. 2x > 12${"<strong>"} | x > 6 ${"</strong>"}`;
        newQuestions.forEach(element => {
            correctAnswer.innerHTML += `${"<br>"} - ${element.question} ${"<strong>"} ${element.correct} ${"</strong>"}`
        })
                            

    } else{
        quesCont.innerHTML = newQuestions[quesNumber].question;
        alt1.innerHTML = newQuestions[quesNumber].alternatives[0].a;
        alt1.style.backgroundColor = "cyan";
        alt1.disabled = false;
        alt1.style.color = "black";
        if(newQuestions[quesNumber].alternatives[0].correct == false){
            alt1.value = "0";
        } else{
            alt1.value = "1";
        }

        alt2.innerHTML = newQuestions[quesNumber].alternatives[1].b;
        alt2.style.backgroundColor = "cyan";
        alt2.disabled = false;
        alt2.style.color = "black";
        if(newQuestions[quesNumber].alternatives[1].correct == false){
            alt2.value = "0";
        } else{
            alt2.value = "1";
        }

        alt3.innerHTML = newQuestions[quesNumber].alternatives[2].c;
        alt3.style.backgroundColor = "cyan";
        alt3.disabled = false;
        alt3.style.color = "black";
        if(newQuestions[quesNumber].alternatives[2].correct == false){
            alt3.value = "0";
        } else{
            alt3.value = "1";
        }
        correctAnswer.innerHTML = `Pergjigja e sakte: ${newQuestions[quesNumber].correct}`;
        correctAnswer.style.display = "none"; 
    }
}