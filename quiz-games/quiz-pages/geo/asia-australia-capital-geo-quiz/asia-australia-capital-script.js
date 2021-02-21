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
        question: "Cili eshte kryeqyteti me i populluar ne Azi?",
        alternatives: [
            { a: "Pekini", correct: false},
            { b: "Tokio", correct: true},
            { c: "Delhi", correct: false}
        ],
        correct: "Tokio - Rreth 38 milion banore"
    },
    {
        question: "Kryeqytet i cilit shtet eshte Pjong'jani?",
        alternatives: [
            { a: "Korea e Veriut", correct: true},
            { b: "Tailanda", correct: false},
            { c: "Korea e Jugut", correct: false}
        ],
        correct: "Korea e Veriut"
    },
    {
        question: "Cili eshte kryeqyteti i Tailandes?",
        alternatives: [
            { a: "Seuli", correct: false},
            { b: "Shangai", correct: false},
            { c: "Bangkok", correct: true}
        ],
        correct: "Bangkok"
    },
    {
        question: "Cili eshte kryeqyteti i Indonezise?",
        alternatives: [
            { a: "Manila", correct: false},
            { b: "Jakarta", correct: true},
            { c: "Delhi", correct: false}
        ],
        correct: "Jakarta"
    },
    {
        question: "Cili eshte kryeqyteti i Arabise Saudite?",
        alternatives: [
            { a: "Medina", correct: false},
            { b: "Meka", correct: false},
            { c: "Rijadi", correct: true}
        ],
        correct: "Rijadi"
    },
    {
        question: "Kryeqytet i cilit shtet eshte Baku?",
        alternatives: [
            { a: "Azerbaixhani", correct: true},
            { b: "Pakistani", correct: false},
            { c: "Afganistani", correct: false}
        ],
        correct: "Azerbaixhani"
    },
    {
        question: "Cili eshte kryeqyteti i Iranit?",
        alternatives: [
            { a: "Bagdadi", correct: false},
            { b: "Teherani", correct: true},
            { c: "Shirazi", correct: false}
        ],
        correct: "Teherani"
    },
    {
        question: "Cili eshte kryeqyteti i Katarit?",
        alternatives: [
            { a: "Doha", correct: true},
            { b: "Abu Dabi", correct: false},
            { c: "Dukhani", correct: false}
        ],
        correct: "Doha"
    },
    {
        question: "Cili eshte kryeqyteti i Sirise?",
        alternatives: [
            { a: "Bagdadi", correct: false},
            { b: "Alepo", correct: false},
            { c: "Damasku", correct: true}
        ],
        correct: "Damasku"
    },
    {
        question: "Kryeqytet i cilit shtet eshte Amani?",
        alternatives: [
            { a: "Taxhakistani", correct: false},
            { b: "Pakistani", correct: false},
            { c: "Jordania", correct: true}
        ],
        correct: "Jordania"
    },
    {
        question: "Cili eshte kryeqyteti i Afganistanit?",
        alternatives: [
            { a: "Kabuli", correct: true},
            { b: "Herati", correct: false},
            { c: "Manama", correct: false}
        ],
        correct: "Kabuli"
    },
    {
        question: "Kryqyteti i cilit shteti eshte Daka?",
        alternatives: [
            { a: "Butani", correct: false},
            { b: "Bangladeshi", correct: true},
            { c: "Uzbekistani", correct: false}
        ],
        correct: "Bangladeshi"
    },
    {
        question: "Cili eshte kryeqyteti i Australise?",
        alternatives: [
            { a: "Melburni", correct: false},
            { b: "Kanberra", correct: true},
            { c: "Sidnej", correct: false}
        ],
        correct: "Kanberra"
    },
    {
        question: "Cili eshte kryeqyteti i Zelandes se Re?",
        alternatives: [
            { a: "Uellingtoni", correct: true},
            { b: "Jakarta", correct: false},
            { c: "Auklendi", correct: false}
        ],
        correct: "Uellingtoni"
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
                                   - Cili eshte kryeqyteti i Kines? ${"<strong>"} Pekini ${"</strong>"}`;
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
