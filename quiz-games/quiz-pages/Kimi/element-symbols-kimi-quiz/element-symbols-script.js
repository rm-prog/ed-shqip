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
        question: "Cili eshte simboli kimik i merkurit?",
        alternatives: [
            { a: "Mr", correct: false},
            { b: "Mg", correct: false},
            { c: "Hg", correct: true}
        ],
        correct: "Hg"
    },
    {
        question: "Cili eshte simboli kimik i arit?",
        alternatives: [
            { a: "Au", correct: true},
            { b: "Ar", correct: false},
            { c: "Gl", correct: false}
        ],
        correct: "Au"
    },
    {
        question: "Cili eshte simboli kimik i bariumit?",
        alternatives: [
            { a: "Br", correct: false},
            { b: "Ba", correct: true},
            { c: "Bm", correct: false}
        ],
        correct: "Ba"
    },
    {
        question: "Cili eshte simboli kimik i bakrit?",
        alternatives: [
            { a: "Ba", correct: false},
            { b: "Cr", correct: false},
            { c: "Cu", correct: true}
        ],
        correct: "Cu"
    },
    {
        question: "Cili eshte simboli kimik i kalciumit?",
        alternatives: [
            { a: "Ca", correct: true},
            { b: "Ka", correct: false},
            { c: "K", correct: false}
        ],
        correct: "Ca"
    },
    {
        question: "Cili eshte simboli kimik i magnezit?",
        alternatives: [
            { a: "Ma", correct: false},
            { b: "Mg", correct: true},
            { c: "Mn", correct: false}
        ],
        correct: "Mg"
    },
    {
        question: "Cili eshte simboli kimik i kromit?",
        alternatives: [
            { a: "Kr", correct: false},
            { b: "Cm", correct: false},
            { c: "Cr", correct: true}
        ],
        correct: "Cr"
    },
    {
        question: "Cili eshte simboli kimik i fosforit?",
        alternatives: [
            { a: "P", correct: true},
            { b: "F", correct: false},
            { c: "Fs", correct: false}
        ],
        correct: "P"
    },
    {
        question: "Cili eshte simboli kimik i squfurit?",
        alternatives: [
            { a: "Sq", correct: false},
            { b: "S", correct: true},
            { c: "Se", correct: false}
        ],
        correct: "S"
    },
    {
        question: "Cili eshte simboli kimik i azotit?",
        alternatives: [
            { a: "Az", correct: false},
            { b: "A", correct: false},
            { c: "N", correct: true}
        ],
        correct: "N"
    },
    {
        question: "Cili eshte simboli kimik i klorit?",
        alternatives: [
            { a: "Cl", correct: true},
            { b: "Kl", correct: false},
            { c: "Ko", correct: false}
        ],
        correct: "Cl"
    },
    {
        question: "Cili eshte simboli kimik i jodit?",
        alternatives: [
            { a: "J", correct: false},
            { b: "I", correct: true},
            { c: "Jd", correct: false}
        ],
        correct: "I"
    },
    {
        question: "Cili eshte simboli kimik i argjendit?",
        alternatives: [
            { a: "A", correct: false},
            { b: "Ar", correct: false},
            { c: "Ag", correct: true}
        ],
        correct: "Ag"
    },
    {
        question: "Cili eshte simboli kimik i ksenonit?",
        alternatives: [
            { a: "Xe", correct: true},
            { b: "Ks", correct: false},
            { c: "Ke", correct: false}
        ],
        correct: "Xe"
    },
    {
        question: "Cili eshte simboli kimik i plumbit?",
        alternatives: [
            { a: "Pl", correct: false},
            { b: "Pb", correct: true},
            { c: "P", correct: false}
        ],
        correct: "Pb"
    },
    {
        question: "Cili eshte simboli kimik i plutonit?",
        alternatives: [
            { a: "Pl", correct: false},
            { b: "Pt", correct: false},
            { c: "Pu", correct: true}
        ],
        correct: "Pu"
    },
    {
        question: "Cili eshte simboli kimik i uranit?",
        alternatives: [
            { a: "U", correct: true},
            { b: "Ur", correct: false},
            { c: "Ua", correct: false}
        ],
        correct: "U"
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
                                   - Cili eshte simboli kimik i hidrogjenit? ${"<strong>"} H ${"</strong>"}`;
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