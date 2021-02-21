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
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}3x+2y=19${'</sup>'} ${'<br>'}{ ${'<sub>'}x+2y=9${'</sub>'}`,
        alternatives: [
            { a: "x=5 dhe y=4", correct: false},
            { b: "x=5 dhe y=2", correct: true},
            { c: "x=2 dhe y=5", correct: false}
        ],
        correct: " | x=5 dhe y2"
    },
    {
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}5x+3y=17${'</sup>'} ${'<br>'}{ ${'<sub>'}x+6y= -2${'</sub>'}`,
        alternatives: [
            { a: "x=4 dhe y = -2", correct: false},
            { b: "x=1 dhe y=4", correct: false},
            { c: "x=4 dhe y = - 1", correct: true}
        ],
        correct: " | x=4 dhe y = -1"
    },
    {
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}4x-4y=20${'</sup>'} ${'<br>'}{ ${'<sub>'}x-4y= 2${'</sub>'}`,
        alternatives: [
            { a: "x=6 dhe y=1", correct: true},
            { b: "x=5 dhe y=2", correct: false},
            { c: "x = -6 dhe y=1", correct: false}
        ],
        correct: " | x=6 dhe y=1"
    },
    {
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}x-2y=11${'</sup>'} ${'<br>'}{ ${'<sub>'}3x-2y=25${'</sub>'}`,
        alternatives: [
            { a: "x=4 dhe y = -2", correct: false},
            { b: "x=7 dhe y = -2", correct: true},
            { c: "x=5 dhe y=1", correct: false}
        ],
        correct: " | x=7 dhe y = -2"
    },
    {
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}5x-3y=27${'</sup>'} ${'<br>'}{ ${'<sub>'}5x-y= 29${'</sub>'}`,
        alternatives: [
            { a: "x=5 dhe y=2", correct: false},
            { b: "x=6 dhe y = -1", correct: false},
            { c: "x=6 dhe y=1", correct: true}
        ],
        correct: " | x=6 dhe y=1"
    },
    {
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}x-2y=5${'</sup>'} ${'<br>'}{ ${'<sub>'}4x-5y= 23${'</sub>'}`,
        alternatives: [
            { a: "x=7 dhe y=1", correct: true},
            { b: "x=5 dhe y=3", correct: false},
            { c: "x=6 dhe y=1", correct: false}
        ],
        correct: " | x=7 dhe y=1"
    },
    {
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}4x+2y=26${'</sup>'} ${'<br>'}{ ${'<sub>'}x-2y=4${'</sub>'}`,
        alternatives: [
            { a: "x=5 dhe y=1", correct: false},
            { b: "x=6 dhe y=1", correct: true},
            { c: "x=4 dhe y=2", correct: false}
        ],
        correct: " | x=6 dhe y=1"
    },
    {
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}3x+2y=10${'</sup>'} ${'<br>'}{ ${'<sub>'}3x+5y= 25${'</sub>'}`,
        alternatives: [
            { a: "x=0 dhe y=4", correct: false},
            { b: "x=6 dhe y=2", correct: false},
            { c: "x=0 dhe y=5", correct: true}
        ],
        correct: " | x=0 dhe y=5"
    },
    {
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}5x-2y=6${'</sup>'} ${'<br>'}{ ${'<sub>'}3x+2y= 10${'</sub>'}`,
        alternatives: [
            { a: "x=2 dhe y=2", correct: true},
            { b: "x=1 dhe y=3", correct: false},
            { c: "x=4 dhe y=1", correct: false}
        ],
        correct: " | x=2 dhe y=2"
    },
    {
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}x-2y=5${'</sup>'} ${'<br>'}{ ${'<sub>'}4x-5y= 23${'</sub>'}`,
        alternatives: [
            { a: "x=7 dhe y=1", correct: true},
            { b: "x=5 dhe y=3", correct: false},
            { c: "x=6 dhe y=1", correct: false}
        ],
        correct: " | x=7 dhe y=1"
    },
    {
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}2x-25y=17${'</sup>'} ${'<br>'}{ ${'<sub>'}15y-x= -6${'</sub>'}`,
        alternatives: [
            { a: "x=20 dhe y=1", correct: false},
            { b: "x=21 dhe y=1", correct: true},
            { c: "x=15 dhe y=3", correct: false}
        ],
        correct: " | x=21 dhe y=1"
    },
    {
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}2x+y=11${'</sup>'} ${'<br>'}{ ${'<sub>'}3x-y= 9${'</sub>'}`,
        alternatives: [
            { a: "x=5 dhe y=2", correct: false},
            { b: "x=3 dhe y=4", correct: false},
            { c: "x=4 dhe y=3", correct: true}
        ],
        correct: " | x=4 dhe y=3"
    },
    {
        question: `Gjeni vlerat e x-it dhe y-it. ${'<br>'} {${'<sup>'}3x+4y=253${'</sup>'} ${'<br>'}{ ${'<sub>'}y=5x${'</sub>'}`,
        alternatives: [
            { a: "x=11 dhe y=55", correct: true},
            { b: "x=10 dhe y=40", correct: false},
            { c: "x=12 dhe y=50", correct: false}
        ],
        correct: " | x=11 dhe y=55"
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
                                   - Gjeni vlerat e x-it dhe y-it. <br> {${'<sup>'}2x+y=11${'</sup>'}${'<br>'}{${'<sub>'}6x+y=27${'</sub>'}${"<strong>"} ${'<br>'} x=4 dhe y=3 ${"</strong>"}`;
        newQuestions.forEach(element => {
            correctAnswer.innerHTML += `${"<br>"} - ${element.question} ${"<br>"}${"<strong>"} ${element.correct} ${"</strong>"}`
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