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
        question: `Gjeni vlerat e mundshme te x-it. ${'<br>'}x${'<sup>'}2${'</sup>'} + 7x + 12 = 0`,
        alternatives: [
            { a: "3 ose 4", correct: false},
            { b: "2 ose 3", correct: false},
            { c: "-3 ose -4", correct: true}
        ],
        correct: " | x = -3 ose x = -4"
    },
    {
        question: `Gjeni vlerat e mundshme te x-it. ${'<br>'}x${'<sup>'}2${'</sup>'} + 3x -18 = 0`,
        alternatives: [
            { a: "3 ose -6", correct: true},
            { b: "3 ose 6", correct: false},
            { c: "-6 ose 3", correct: false}
        ],
        correct: " | x = 3 ose x = -6"
    },
    {
        question: `Gjeni vlerat e mundshme te x-it. ${'<br>'}2x${'<sup>'}2${'</sup>'} + 12x + 10 = 0`,
        alternatives: [
            { a: "1 ose 5", correct: false},
            { b: "-1 ose -5", correct: true},
            { c: "-1 ose 5", correct: false}
        ],
        correct: " | x = -1 ose x = -5"
    },
    {
        question: `Gjeni vlerat e mundshme te x-it. ${'<br>'}x${'<sup>'}2${'</sup>'} - x - 12 = 0`,
        alternatives: [
            { a: "3 ose 4", correct: false},
            { b: "-2 ose 3", correct: false},
            { c: "-3 ose 4", correct: true}
        ],
        correct: " | x = -3 ose x = 4"
    },
    {
        question: `Gjeni vlerat e mundshme te x-it. ${'<br>'}4x${'<sup>'}2${'</sup>'} - 11x - 3 = 0`,
        alternatives: [
            { a: "-0,25 ose 3", correct: true},
            { b: "0,25 ose -3", correct: false},
            { c: "0,25 ose 3", correct: false}
        ],
        correct: " | x = -0,25 ose x = 3"
    },
    {
        question: `Gjeni vlerat e mundshme te x-it. ${'<br>'}2x${'<sup>'}2${'</sup>'} + 5x - 3 = 0`,
        alternatives: [
            { a: "0,5 ose 3", correct: false},
            { b: "0,5 ose -3", correct: true},
            { c: "-0,5 ose 3", correct: false}
        ],
        correct: " | x = 0,5 ose -3"
    },
    {
        question: `Gjeni vlerat e mundshme te x-it. ${'<br>'}x${'<sup>'}2${'</sup>'} + 2x - 3 = 0`,
        alternatives: [
            { a: "1 ose 3", correct: false},
            { b: "-1 ose 3", correct: false},
            { c: "1 ose -3", correct: true}
        ],
        correct: " | x = 1 ose -3"
    },
    {
        question: `Gjeni vlerat e mundshme te x-it. ${'<br>'}x${'<sup>'}2${'</sup>'} + 9x - 22 = 0`,
        alternatives: [
            { a: "2 ose -11", correct: true},
            { b: "-2 ose 11", correct: false},
            { c: "-5 ose 6", correct: false}
        ],
        correct: " | x = 2 ose x = -11"
    },
    {
        question: `Cili nga ekuacionet e meposhtme mund te konsiderohet si nje ekuacion kuadratik (ekuacion i fuqise se dyte).`,
        alternatives: [
            { a: `3x${'<sup>'}3${'</sup>'} - 2x + 1 = 0`, correct: false},
            { b: `2x${'<sup>'}2${'</sup>'} + 4x = 0`, correct: true},
            { c: "4x - 17 = 0", correct: false}
        ],
        correct: ` | 2x${'<sup>'}2${'</sup>'} + 4x = 0`
    },
    {
        question: `Gjeni vlerat e mundshme te x-it. ${'<br>'}x${'<sup>'}2${'</sup>'} - 2x - 15 = 0`,
        alternatives: [
            { a: "3 ose 5", correct: false},
            { b: "3 ose -5", correct: false},
            { c: "-3 ose 5", correct: true}
        ],
        correct: " | x = -3 ose 5"
    },
    {
        question: `Gjeni vlerat e mundshme te x-it. ${'<br>'}x${'<sup>'}2${'</sup>'} - x = 0`,
        alternatives: [
            { a: "-4 ose 5", correct: true},
            { b: "4 ose 5", correct: false},
            { c: "-3 ose 4", correct: false}
        ],
        correct: " | x = -4 ose x = 5"
    },
    {
        question: `Gjeni vlerat e mundshme te x-it. ${'<br>'}8 = x${'<sup>'}2${'</sup>'} + 2x`,
        alternatives: [
            { a: "2 ose 4", correct: false},
            { b: "2 ose -4", correct: true},
            { c: "2 ose -3", correct: false}
        ],
        correct: " | x = 2 ose x = -4"
    },
    {
        question: `Gjeni vlerat e mundshme te x-it. ${'<br>'}x${'<sup>'}2${'</sup>'} +4x = 21`,
        alternatives: [
            { a: "3 ose 7", correct: false},
            { b: "3 ose -5", correct: false},
            { c: "3 ose -7", correct: true}
        ],
        correct: " | x = 3 ose x = -7"
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
                                   - Gjeni vlerat e mundshme te x-it? | ${'<br>'}x${'<sup>'}2${'</sup>'}+5x+6=0${"<strong>"} x = -2 ose x = -3 ${"</strong>"}`;
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