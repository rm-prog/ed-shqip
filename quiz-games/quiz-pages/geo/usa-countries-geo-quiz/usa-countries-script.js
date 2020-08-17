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
        question: "Cili eshte shteti me i populluar i SHBA-se?",
        alternatives: [
            { a: "Teksasi", correct: false},
            { b: "New York", correct: false},
            { c: "Kalifornia", correct: true}
        ],
        correct: "Kalifornia - rreth 38 milion banore"
    },
    {
        question: "Sa shtete ka SHBA-ja?",
        alternatives: [
            { a: "50", correct: true},
            { b: "51", correct: false},
            { c: "49", correct: false}
        ],
        correct: "50 shtete"
    },
    {
        question: "Cili eshte kryeqyteti i Kalifornise?",
        alternatives: [
            { a: "Los Angeles", correct: false},
            { b: "Sakramento", correct: true},
            { c: "San Diego", correct: false}
        ],
        correct: "Sakramento"
    },
    {
        question: "Cili eshte shteti me i vizituar i SHBA-se?",
        alternatives: [
            { a: "Teksasi", correct: false},
            { b: "New York", correct: false},
            { c: "Kalifornia", correct: true}
        ],
        correct: "Kalifornia - rreth 50 milione vizitore cdo vit"
    },
    {
        question: "Cili eshte shteti me vijen bregdetare me te gjate ne SHBA?",
        alternatives: [
            { a: "Alaska", correct: true},
            { b: "Florida", correct: false},
            { c: "Kalifornia", correct: false}
        ],
        correct: "Alaska - 10 690 km vije bregdetare e gjate"
    },
    {
        question: "Kryeqytet i cilit shteti eshte Trentoni?",
        alternatives: [
            { a: "Michigan", correct: false},
            { b: "New Jersey", correct: true},
            { c: "Pensilvania", correct: false}
        ],
        correct: "New Jersey"
    },
    {
        question: "Gjej shtetin qe kufizohet nga Idaho dhe Oregoni?",
        alternatives: [
            { a: "Montana", correct: false},
            { b: "Navada", correct: false},
            { c: "Uashingtoni", correct: true}
        ],
        correct: "Uashingtoni"
    },
    {
        question: "Cili eshte kryeqyteti i Arizones?",
        alternatives: [
            { a: "Feniksi", correct: true},
            { b: "Tuksoni", correct: false},
            { c: "Madisoni", correct: false}
        ],
        correct: "Feniksi"
    },
    {
        question: "Cili eshte kryeqyteti i Uashingtonit?",
        alternatives: [
            { a: "Uashington D.C.", correct: false},
            { b: "Olimpia", correct: true},
            { c: "Siatell", correct: false}
        ],
        correct: "Olimpia"
    },
    {
        question: "Nga sa shtete te SHBA-se kufizohet Kalifornia?",
        alternatives: [
            { a: "2", correct: false},
            { b: "4", correct: false},
            { c: "3", correct: true}
        ],
        correct: "3 - Oregoni, Navada, Arizona"
    },
    {
        question: "Cili eshte shteti me lindor i SHBA-se?",
        alternatives: [
            { a: "Alaska", correct: true},
            { b: "Massachusetts", correct: false},
            { c: "Maine", correct: false}
        ],
        correct: "Alaska - Alaska eshte shteti me perendimor dhe lindor i SHBA-se sepse pjese te Alaskes zgjaten ne perendim dhe arrin hemisferen lindore"
    },
    {
        question: "Cili shtet ndodhet ne veri te New Mexico?",
        alternatives: [
            { a: "Kansas", correct: false},
            { b: "Kolorado", correct: true},
            { c: "Arizona", correct: false}
        ],
        correct: "Kolorado"
    },
    {
        question: "Cili eshte kryeqyteti i Kolorados?",
        alternatives: [
            { a: "Aspeni", correct: false},
            { b: "Kolombus", correct: false},
            { c: "Denveri", correct: true}
        ],
        correct: "Denveri"
    },
    {
        question: "Kryeqytet i cilit shteti eshte Helena?",
        alternatives: [
            { a: "Montana", correct: true},
            { b: "Michigani", correct: false},
            { c: "Arkansas", correct: false}
        ],
        correct: "Montana"
    },
    {
        question: "Cili eshte kryeqyteti eshte i New York-ut?",
        alternatives: [
            { a: "Batavia", correct: false},
            { b: "Albani", correct: true},
            { c: "Bufalo", correct: false}
        ],
        correct: "Albani"
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
                                   - Cili eshte shteti me i madh i SHBA-se? ${"<strong>"} Alaska ${"</strong>"}`;
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