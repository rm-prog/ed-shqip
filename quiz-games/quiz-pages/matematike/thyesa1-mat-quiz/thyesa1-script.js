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
        question: "Sa eshte 25% e 42?",
        alternatives: [
            { a: "11,5", correct: false},
            { b: "10,5", correct: true},
            { c: "13", correct: false}
        ],
        correct: "10,5 || 25% e 42 || 1/4 e 42 || 42/4=10,5"
    },
    {
        question: "Sa eshte 1/5 * 8,4?",
        alternatives: [
            { a: "1,518", correct: false},
            { b: "1,6", correct: false},
            { c: "1,68", correct: true}
        ],
        correct: "1,68 || 1/5 * 8,4 || 8,4/5 = 1,68"
    },
    {
        question: "Sa eshte 3/5 e 1/6 e 90 kilogrameve?",
        alternatives: [
            { a: "9 kilogram", correct: true},
            { b: "10 kilogram", correct: false},
            { c: "270 kilogram", correct: false}
        ],
        correct: "9 kilogram|| 3/5 * 1/6 = 3/30 = 1/10 || 1/10 e 90 = 9 kilogram"
    },
    {
        question: "Sa eshte 25% e 35% e 48 kilogrameve?",
        alternatives: [
            { a: "4 kilogram", correct: false},
            { b: "4,2 kilogram", correct: true},
            { c: "8 kilogram", correct: false}
        ],
        correct: "4,2 kilogram || 25/100 * 35/100 -> 1/4 * 7/20 = 7/80 || 7/80 e 48 = 7*80/48 = 4,2 kilogram"
    },
    {
        question: "Sa eshte 2/3 e 33?",
        alternatives: [
            { a: "11", correct: false},
            { b: "21", correct: false},
            { c: "22", correct: true}
        ],
        correct: "22 || 2/3 e 33 || 2*33/3 = 22"
    },
    {
        question: "Sa eshte 19/76 e 4?",
        alternatives: [
            { a: "1", correct: true},
            { b: "3", correct: false},
            { c: "1,5", correct: false}
        ],
        correct: "1 || 19/76 * 4 || 1/4 * 4 = 1"
    },
    {
        question: "Sa eshte 15% e 38?",
        alternatives: [
            { a: "5", correct: false},
            { b: "5,7", correct: true},
            { c: "6,1", correct: false}
        ],
        correct: "5,7 || 15/100 * 38 || 3/20 * 38 || 3 * 38/20 = 5,7"
    },
    {
        question: "Beni bleu nje pice para dy ditesh. Dje hengri 1/8 e pices ndersa sot 3/5. Sa perqind e pices ka ngelur pa ngrene?",
        alternatives: [
            { a: "25%", correct: false},
            { b: "26%", correct: false},
            { c: "27,5%", correct: true}
        ],
        correct: "27,5% || 1 - 1/8 - 3/5 || (40 - 5 - 24 / 40) * 100 = 11/40 * 100 = 0.275 * 100 = 27.5%"
    },
    {
        question: "Me sa eshte e barabarte 3/6 / 2/4?",
        alternatives: [
            { a: "1", correct: true},
            { b: "2", correct: false},
            { c: "3/5", correct: false}
        ],
        correct: "1 || 3/6 / 2/4 || 3/6 * 4/2 = 12/12 = 1"
    },
    {
        question: "Me sa eshte e barabarte 3/4 - 1/2?",
        alternatives: [
            { a: "2/4", correct: false},
            { b: "1/4", correct: true},
            { c: "1/6", correct: false}
        ],
        correct: "1/4 || 3/4 - 1/2 || 3 - 2 / 4 = 1/4"
    },
    {
        question: "Me sa eshte e barabarte 4/8 + 3/6?",
        alternatives: [
            { a: "1/2", correct: false},
            { b: "3/24", correct: false},
            { c: "1", correct: true}
        ],
        correct: "1 || 4/8 + 3/6 = 12 + 12 / 24 = 24/24 = 1"
    },
    {
        question: "Plotesoni vendin bosh. 21/63 = .../9",
        alternatives: [
            { a: "3", correct: true},
            { b: "4", correct: false},
            { c: "6", correct: false}
        ],
        correct: "3 || 21/7 / 63/7 = 3/9"
    },
    {
        question: "Plotesoni vendin bosh. 5/6 = 35/...?",
        alternatives: [
            { a: "48", correct: false},
            { b: "42", correct: true},
            { c: "36", correct: false}
        ],
        correct: "42 || 5*7 / 6*7 = 35/42"
    },
    {
        question: "Nxirrni perfundimin si thyese te thjeshtuar. 3 7/8 + 2 1/4.",
        alternatives: [
            { a: "40/8", correct: false},
            { b: "24/4", correct: false},
            { c: "49/8", correct: true}
        ],
        correct: "49/8 || 3*8+7 / 8 + 2*4+1 / 4 || 31/8 + 9/4 -> 31 + 18 / 8 = 49/8"
    },
    {
        question: "Llogaritni (3/4 - 1/8) (3/4 + 1/8)",
        alternatives: [
            { a: "35/64", correct: true},
            { b: "34/64", correct: false},
            { c: "5/8", correct: false}
        ],
        correct: "35/64"
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
                                   - Sa eshte 1/2 e 7,5? ${"<strong>"} 3,75 || 1/2 3 7,5 || 7,5 * 1 / 2 = 7,5/2 = 3,75 ${"</strong>"}`;
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