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
        question: "Me sa eshte e barabarte 1/4 c + 3d, nese c = 6 dhe d = 7?",
        alternatives: [
            { a: "20", correct: false},
            { b: "25", correct: false},
            { c: "22,5", correct: true}
        ],
        correct: "22,5 || 1/4 * 6 + 3 * 7 = 6/4 + 21/1 = 6+84/4 = 90/4 = 22,5"
    },
    {
        question: "Me sa eshte e barabarte 1/3 m - 1 - 1/2 n, nese m=21 dhe n=12?",
        alternatives: [
            { a: "0", correct: true},
            { b: "1", correct: false},
            { c: "5", correct: false}
        ],
        correct: "0 || 1/3 * 21 - 1 - 1/2 * 12 = 7-1-6 = 0"
    },
    {
        question: "Me sa eshte e barabarte e/4 + 2f - 3, nese e=12 dhe f=1/2?",
        alternatives: [
            { a: "0", correct: false},
            { b: "1", correct: true},
            { c: "4", correct: false}
        ],
        correct: "1 || 12/4 + 2 * 1/2 - 3 = 3+1-3 = 1"
    },
    {
        question: "Me sa eshte e barabarte 7j + 5 - 8k, nese j=0.5 dhe k=0.25?",
        alternatives: [
            { a: "6", correct: false},
            { b: "8", correct: false},
            { c: "6.5", correct: true}
        ],
        correct: "6.5 || 7*1/2 + 5 - 8*1/4 = 3.5 + 5 - 2 = 6.5"
    },
    {
        question: "Me sa eshte e barabarte 4 - 0.25g + 0.5h, nese g=10 dhe h=5?",
        alternatives: [
            { a: "4", correct: true},
            { b: "5", correct: false},
            { c: "5,5", correct: false}
        ],
        correct: "4 || 4 - 1/4 * 10 + 1/2 * 5 = 4 - 2,5 + 2,5 = 4"
    },
    {
        question: "Me sa eshte e barabarte ab - 0.5b, nese a=1 dhe b=5?",
        alternatives: [
            { a: "2", correct: false},
            { b: "2,5", correct: true},
            { c: "4", correct: false}
        ],
        correct: "2,5 || 1 * 5 - 0,5 * 5 = 5 - 2,5 = 2,5"
    },
    {
        question: "Me sa eshte e barabarte 6t - 20 - 32u, nese t=6 dhe u=1/4?",
        alternatives: [
            { a: "6.5", correct: false},
            { b: "7", correct: false},
            { c: "8", correct: true}
        ],
        correct: "8 || 6*6 - 20 - 32 * 0.25 = 36 - 20 - 8 = 8"
    },
    {
        question: "Me sa eshte e barabarte j/k - 0.2k, nese j=25 dhe k=5?",
        alternatives: [
            { a: "4", correct: true},
            { b: "5", correct: false},
            { c: "3", correct: false}
        ],
        correct: "4 || 25/5 - 0.2 * 5 = 5 - 1 = 4"
    },
    {
        question: "Me sa eshte e barabarte rs + 14s, nese r=6 dhe s=1/4?",
        alternatives: [
            { a: "5", correct: false},
            { b: "6", correct: true},
            { c: "7,5", correct: false}
        ],
        correct: "6 || 6 * 1/4 + 14 * 1/4 = 1.5 + 3.5 = 5"
    },
    {
        question: "Me sa eshte e barabarte 0.1m +8 - 12n, nese m=30 dhe n=1/4?",
        alternatives: [
            { a: "7", correct: false},
            { b: "6,5", correct: false},
            { c: "8", correct: true}
        ],
        correct: "8 || 0.1 * 30 + 8 - 12 * 1/4 = 3 + 8 - 3 = 8"
    },
    {
        question: "Reduktoni shprehjen a + 2b + a?",
        alternatives: [
            { a: "2a + 2b", correct: true},
            { b: "a + b + b + a", correct: false},
            { c: "2a + b + b", correct: false}
        ],
        correct: "2a + 2b"
    },
    {
        question: "Paraqitni me thjesht shprehjen 3 * a * b",
        alternatives: [
            { a: "3a * b", correct: false},
            { b: "3ab", correct: true},
            { c: "3a + b", correct: false}
        ],
        correct: "3ab"
    },
    {
        question: "Redukto shprehjen -r + 8(-5r -2)",
        alternatives: [
            { a: "-6r - 16", correct: false},
            { b: "-41r - 2", correct: false},
            { c: "-41r - 16", correct: true}
        ],
        correct: "-41r - 16 || -r + 8 * -5r + 8 * -2 = -r - 40r -16 = -41r - 16"
    },
    {
        question: "Redukto shprehjen -4(z+3) -4(5-4z)?",
        alternatives: [
            { a: "12z - 32", correct: true},
            { b: "12z + 32", correct: false},
            { c: "-24z - 32", correct: false}
        ],
        correct: "12z - 32 || -4*z -4*3 -4*5 -4*-4z = -4z-12-20+16z = 12z - 32"
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
                                   - Me sa eshte e barabarte 5c + cd nese c = 1/5 dhe d = 15? ${"<strong>"} 4 || 5 * 1/5 + 1/5 * 15 = 1 + 3 = 4 ${"</strong>"}`;
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