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
        question: "Shkruaj 45/30 ne menyren me te thjeshte te mundshme.",
        alternatives: [
            { a: "9/6", correct: false},
            { b: "3/2", correct: true},
            { c: "3/1", correct: false}
        ],
        correct: "3/2 || 45/15 / 30/15 = 3/2"
    },
    {
        question: "Rendit thyesat nga me e vogla tek me e madhja 4/5, 1/3, 1/2",
        alternatives: [
            { a: "4/5, 1/2, 1/3", correct: false},
            { b: "1/2, 1/3, 4/5", correct: false},
            { c: "1/3, 1/2, 4/5", correct: true}
        ],
        correct: "1/3, 1/2, 4/5  ||  10/30 < 15/30 < 24/30"
    },
    {
        question: "Rendit thyesat nga me e madhja tek me e vogla 2/5, 3/8, 3/4, 17/40",
        alternatives: [
            { a: "3/4, 17/40, 2/5, 3/8", correct: true},
            { b: "3/4, 17/40, 3/8, 2/5", correct: false},
            { c: "3/4, 3/8, 17/40, 2/5", correct: false}
        ],
        correct: "3/4, 17/40, 2/5, 3/8  ||  30/40 > 17/40 > 16/40 > 15/40"
    },
    {
        question: "Vendos shenjen e duhur ne vendin bosh 1/2 ... 3/7 ",
        alternatives: [
            { a: "=", correct: false},
            { b: ">", correct: true},
            { c: "<", correct: false}
        ],
        correct: "1/2 < 3/7"
    },
    {
        question: "Ktheni thyesen 2/5 ne numer dhjetor",
        alternatives: [
            { a: "0,2", correct: false},
            { b: "0,5", correct: false},
            { c: "0,4", correct: true}
        ],
        correct: "0,4"
    },
    {
        question: "Ktheni numrin dhjetor 0,8 ne thyese",
        alternatives: [
            { a: "4/5", correct: true},
            { b: "3/5", correct: false},
            { c: "4/10", correct: false}
        ],
        correct: "4/5"
    },
    {
        question: "Vendosni shenjen e duhur ne vendin bosh. 2 1/3 ... 2 2/4",
        alternatives: [
            { a: "=", correct: false},
            { b: "<", correct: true},
            { c: ">", correct: false}
        ],
        correct: "2 1/3 < 2 2/4"
    },
    {
        question: "Kthe thyesen 5/8 ne perqindje",
        alternatives: [
            { a: "60%", correct: false},
            { b: "55%", correct: false},
            { c: "62,5%", correct: true}
        ],
        correct: "62,5% || 5 / 8 = 0,625 * 100 = 62,5%"
    },
    {
        question: "Renditni numrat ne rendin rrites 33.3%, 0.33, 33, 2/4",
        alternatives: [
            { a: "0.33, 33.3%, 2/4, 33", correct: true},
            { b: "0.33, 33, 33.3%, 2/4", correct: false},
            { c: "33.3%, 0.33, 2/4, 33", correct: false}
        ],
        correct: "0.33 < 33.3% < 2/4 < 33 || 0.33 < 0.333 < 0.5 < 33"
    },
    {
        question: "Kthe ne numer dhjetor 54%",
        alternatives: [
            { a: "5,4", correct: false},
            { b: "0,54", correct: true},
            { c: "54,0", correct: false}
        ],
        correct: "0,54"
    },
    {
        question: "Shkruani ne rend rrites thyesat : 9/16, 5/8, 2/3",
        alternatives: [
            { a: "9/16, 5/8, 2/3", correct: false},
            { b: "5/8, 2/3, 9/16", correct: false},
            { c: "9/16, 2/3, 5/8", correct: true}
        ],
        correct: "9/16 < 2/3 < 5/8 || 27/48 < 32/48 < 33/48"
    },
    {
        question: "Kthe thyesen 3/40 ne perqindje",
        alternatives: [
            { a: "7,5%", correct: true},
            { b: "2,5%", correct: false},
            { c: "5%", correct: false}
        ],
        correct: "7,5%"
    },
    {
        question: "Kthe ne thyese te parregullt numrin e perzier 2 6/7",
        alternatives: [
            { a: "21/7", correct: false},
            { b: "20/7", correct: true},
            { c: "19/7", correct: false}
        ],
        correct: "20/7 || 2*7+6/7 = 20/7"
    },
    {
        question: "Kthe ne thyese te pathjeshtueshme numrin dhjetor 0,125",
        alternatives: [
            { a: "3/20", correct: false},
            { b: "1/7", correct: false},
            { c: "1/8", correct: true}
        ],
        correct: "1/8 || 0,125 = 125/1000 || 125/1000 = 1/8"
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
                                   - Vendos shenjen e duhur ne vendin bosh. 2/6 ... 1/2 ${"<strong>"} 2/6 < 1/2 ${"</strong>"}`;
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