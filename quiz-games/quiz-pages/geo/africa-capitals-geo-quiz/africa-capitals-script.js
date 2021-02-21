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
        question: "Cili eshte kryeqyteti me popullsine me te madhe ne Afrike?",
        alternatives: [
            { a: "Lagos", correct: false},
            { b: "Kairo", correct: true},
            { c: "Kinshasa", correct: false}
        ],
        correct: "Kairo - me rreth 20 milion banore"
    },
    {
        question: "Cili eshte kryeqyteti me i madh per nga siperfaqja ne Afrike?",
        alternatives: [
            { a: "Lagos", correct: false},
            { b: "Nairobi", correct: false},
            { c: "Kairo", correct: true}
        ],
        correct: "Kairo - siperfaqja 17 267 km2"
    },
    {
        question: "Cili eshte kryeqyteti i Libise?",
        alternatives: [
            { a: "Akra", correct: false},
            { b: "Tripolia", correct: true},
            { c: "Misuratu", correct: false}
        ],
        correct: "Tripolia"
    },
    {
        question: "Kryeqytet i cilit shtet eshte Kampala?",
        alternatives: [
            { a: "Uganda", correct: true},
            { b: "Mali", correct: false},
            { c: "Sudani Jugor", correct: false}
        ],
        correct: "Uganda"
    },
    {
        question: "Cili eshte kryeqyteti i Malit?",
        alternatives: [
            { a: "Mogadishu", correct: false},
            { b: "Sikaso", correct: false},
            { c: "Bamako", correct: true}
        ],
        correct: "Bamako"
    },
    {
        question: "Cili eshte kryeqyteti i Angoles?",
        alternatives: [
            { a: "Kanokri", correct: false},
            { b: "Luanda", correct: true},
            { c: "Maputo", correct: false}
        ],
        correct: "Luanda"
    },
    {
        question: "Kryeqytet i cilit shtet eshte Dakari?",
        alternatives: [
            { a: "Senegali", correct: true},
            { b: "Sudani", correct: false},
            { c: "Kongo", correct: false}
        ],
        correct: "Senegali"
    },
    {
        question: "Cili eshte kryeqyteti i Sudanit?",
        alternatives: [
            { a: "Omduram", correct: false},
            { b: "Nairobi", correct: false},
            { c: "Kartumi", correct: true}
        ],
        correct: "Kartumi"
    },
    {
        question: "Cili eshte kryeqyteti i Marokut?",
        alternatives: [
            { a: "Marakeshi", correct: false},
            { b: "Rabati", correct: true},
            { c: "Kasablanka", correct: false}
        ],
        correct: "Rabati"
    },
    {
        question: "Cili eshte kryeqyteti administrativ i Afrikes se Jugut",
        alternatives: [
            { a: "Pretoria", correct: true},
            { b: "Johanesburgu", correct: false},
            { c: "Antananarivo", correct: false}
        ],
        correct: "Pretoria"
    },
    {
        question: "Kryeqytet i cilit shtet eshte Kinshasa?",
        alternatives: [
            { a: "Kongo", correct: false},
            { b: "Kenia", correct: false},
            { c: "Republika Demokratike e Kongos", correct: true}
        ],
        correct: "Republika Demokratike e Kongos"
    },
    {
        question: "Kryeqytet i cilit shtet eshte Port Louis?",
        alternatives: [
            { a: "Gana", correct: false},
            { b: "Mauritis", correct: true},
            { c: "Tanzania", correct: false}
        ],
        correct: "Mauritis"
    },
    {
        question: "Cili eshte kryeqyteti i Mozambikut?",
        alternatives: [
            { a: "Maputo", correct: true},
            { b: "Asmara", correct: false},
            { c: "Matola", correct: false}
        ],
        correct: "Maputo"
    },
    {
        question: "Cili eshte kryeqyteti i Nigerit?",
        alternatives: [
            { a: "Abuja", correct: false},
            { b: "Maradi", correct: false},
            { c: "Niamej", correct: true}
        ],
        correct: "Niamej"
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
                                   - Cili eshte kryeqyteti i Egjiptit? ${"<strong>"} Kario ${"</strong>"}`;
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