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
        question: "Cili eshte shteti me i madh ne Ameriken Veriore per nga popullsia?",
        alternatives: [
            { a: "Kanada", correct: false},
            { b: "ShBA", correct: true},
            { c: "Meksika", correct: false}
        ],
        correct: "SHBA - me rreth 328 milion banore"
    },
    {
        question: "Cili eshte shteti me vijen bregdetare me te gjate ne Ameriken Veriore?",
        alternatives: [
            { a: "Meksika", correct: false},
            { b: "ShBA", correct: false},
            { c: "Kanada", correct: true}
        ],
        correct: "Kanadaja - 202,080 km vije bregdetare e gjate"
    },
    {
        question: "Cili eshte shteti me i vizituar ne Ameriken Veriore?",
        alternatives: [
            { a: "SHBA", correct: true},
            { b: "Meksika", correct: false},
            { c: "Kanada", correct: false}
        ],
        correct: "SHBA - me rreth 75 milion vizitore ne vit"
    },
    {
        question: "Cili eshte mali me i larte ne Ameriken Veriore?",
        alternatives: [
            { a: "Mali Logan", correct: false},
            { b: "Mali Denal", correct: true},
            { c: "Mali Shen Elias", correct: false}
        ],
        correct: "Mali Denal - lartesia 6190 m"
    },
    {
        question: "Cili eshte lumi me i gjate ne Ameriken Veriore?",
        alternatives: [
            { a: "Lumi Misuri", correct: false},
            { b: "Lumi Jukon", correct: false},
            { c: "Lumi Misisipi", correct: true}
        ],
        correct: "Lumi Misisipi - 3378 km i gjate"
    },
    {
        question: "Cili eshte qyteti me i populluar ne Ameriken Veriore?",
        alternatives: [
            { a: "Meksiko Siti", correct: true},
            { b: "New York", correct: false},
            { c: "Los Angeles", correct: false}
        ],
        correct: "Meksiko Siti - rreth 22 500 000 banore"
    },
    {
        question: "Cili eshte kryeqyteti i Kanadase?",
        alternatives: [
            { a: "Toronto", correct: false},
            { b: "Otava", correct: true},
            { c: "Vankuver", correct: false}
        ],
        correct: "Otava"
    },
    {
        question: "Cili eshte kryeqyteti i SHBA-se?",
        alternatives: [
            { a: "New York", correct: false},
            { b: "Virxhinia", correct: false},
            { c: "Uashington D.C.", correct: true}
        ],
        correct: "Uashington D.C."
    },
    {
        question: "Cili eshte kryeqyteti i Meksikes?",
        alternatives: [
            { a: "Meksiko Siti", correct: true},
            { b: "Guadalahara", correct: false},
            { c: "Monterrej", correct: false}
        ],
        correct: "Meksiko Siti"
    },
    {
        question: "Nga sa oqeane laget Amerika Veriore?",
        alternatives: [
            { a: "2", correct: false},
            { b: "3", correct: true},
            { c: "4", correct: false}
        ],
        correct: "3 - Oqeani Arktik, Paqesor dhe Atlantik"
    },
    {
        question: "Kontinenti i Amerikes Veriore per nga madhesia eshte i ...?",
        alternatives: [
            { a: "i pari", correct: false},
            { b: "i dyti", correct: false},
            { c: "i treti", correct: true}
        ],
        correct: "i treti - siperfaqja 24 709 000 km2"
    },
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
                                   - Cili eshte shteti me i madh ne Ameriken Veriore per nga siperfaqja? ${"<strong>"} Kanadaja - siperfaqja 9.985 milion km2 ${"</strong>"}`;
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