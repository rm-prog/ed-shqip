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
        question: `Gjeni vleren e x-it. ${'<br>'}20 = 2x+6`,
        alternatives: [
            { a: "6", correct: false},
            { b: "7", correct: true},
            { c: "8", correct: false}
        ],
        correct: "x=7 || 2x = 20-6 || x = 14/2 || x=7"
    },
    {
        question: `Gjeni vleren e m. ${'<br>'} 5(m+6) = 45`,
        alternatives: [
            { a: "5", correct: false},
            { b: "4", correct: false},
            { c: "3", correct: true}
        ],
        correct: "m=3 || 5m + 30 = 45 || 5m = 45-30 || 5m = 15 || m = 15/5 || m=3"
    },
    {
        question: `Gjeni vleren e x-it ${'<br>'} x/2 + 3 = 13`,
        alternatives: [
            { a: "20", correct: true},
            { b: "18", correct: false},
            { c: "5", correct: false}
        ],
        correct: "x=20 || x/2 = 13 - 3 || x = 10 * 2 || x=20"
    },
    {
        question: `Gjeni vleren e m. ${'<br>'} 2(m+4)/5 = 8`,
        alternatives: [
            { a: "14", correct: false},
            { b: "16", correct: true},
            { c: "20", correct: false}
        ],
        correct: "x=16 || 2m+8/5 = 8 || 2m+8 = 8*5 || 2m = 40 - 8 || 2m=32 || m=32/2=16"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'} 11-3x = 2x-4`,
        alternatives: [
            { a: "5", correct: false},
            { b: "4", correct: false},
            { c: "3", correct: true}
        ],
        correct: "x=3 || 11+4 = 2x+3x || 5x=15 || x=15/5=3"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'} 2(3-8x) = 3(3-6x)`,
        alternatives: [
            { a: "1,5", correct: true},
            { b: "2", correct: false},
            { c: "2,5", correct: false}
        ],
        correct: "x=1,5 || 6-16x = 9-18x || -16x+18x = 9-6 || 2x=3 || x=3/2 || x=1,5"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'} 6-2x = 8-x`,
        alternatives: [
            { a: "2", correct: false},
            { b: "-2", correct: true},
            { c: "4", correct: false}
        ],
        correct: "x = -2 || -2x+x = 8-6 || -x = 2 || x = -2"
    },
    {
        question: `Gjeni vleren e p. ${'<br>'} p/4 - 3 = 12`,
        alternatives: [
            { a: "58", correct: false},
            { b: "3", correct: false},
            { c: "60", correct: true}
        ],
        correct: "p=60 || p/4 = 12+3 || p = 15*4 || p=60"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'} 7x-15=20`,
        alternatives: [
            { a: "5", correct: true},
            { b: "6", correct: false},
            { c: "-5", correct: false}
        ],
        correct: "x=5 || 7x = 20+15 || x = 35/7 || x=5"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'} 8+x = 15+2x`,
        alternatives: [
            { a: "7", correct: false},
            { b: "-7", correct: true},
            { c: "8", correct: false}
        ],
        correct: "x=-7 || 8-15 = 2x-x || x = -7"
    },
    {
        question: `Gjeni vleren e c. ${'<br>'} 0.2(10-5c) = 5c-16`,
        alternatives: [
            { a: "-3", correct: false},
            { b: "4", correct: false},
            { c: "3", correct: true}
        ],
        correct: "c=3 || 2-c = 5c-16 || 2+16 = 5c+c || 6c=18 || c=18/6=3"
    },
    {
        question: `Gjej vleren e x-it. ${'<br>'} 4x+8 = 7.2+5x`,
        alternatives: [
            { a: "0.8", correct: true},
            { b: "1.2", correct: false},
            { c: "-0.8", correct: false}
        ],
        correct: "x=0.8 || 4x-5x = 7.2-8 || -x = -0.8 || x=0.8"
    },
    {
        question: `Gjej vleren e a. ${'<br>'} 3 + 0.5(4a+8) = 9-2a`,
        alternatives: [
            { a: "2", correct: false},
            { b: "0.5", correct: true},
            { c: "3", correct: false}
        ],
        correct: "0.5 || 3 + 2a + 4 = 9-2a || 2a+2a = 9-7 || 4a=2 || a=2/4 || a=0.5"
    },
    {
        question: `Gjej vleren e n. ${'<br>'}  2 - 1/2 n = 3n + 16`,
        alternatives: [
            { a: "4", correct: false},
            { b: "3.5", correct: false},
            { c: "-4", correct: true}
        ],
        correct: "x=-4 || 2-16 = 3n + 1/2n || -14 = 3.5n || n = -14/3.5 || n = -4"
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
                                   - Gjej vleren e x-it? ${"<strong>"} x=16 || 4x+7=71 || 4x = 71-7 || 4x = 64 || x = 64/4 || x=16 ${"</strong>"}`;
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