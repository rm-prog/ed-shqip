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
        question: "Sa eshte masa atomike e oksigjenit?",
        alternatives: [
            { a: "16", correct: true},
            { b: "15", correct: false},
            { c: "8", correct: false}
        ],
        correct: `Ar${'<sub>'}O${'</sub>'} = 16`
    },
    {
        question: "Sa eshte masa atomike e fluorit?",
        alternatives: [
            { a: "20", correct: false},
            { b: "19", correct: true},
            { c: "18", correct: false}
        ],
        correct: `Ar${'<sub>'}F${'</sub>'} = 19`
    },
    {
        question: "Sa eshte masa atomike e fosforit?",
        alternatives: [
            { a: "29,5", correct: false},
            { b: "30", correct: false},
            { c: "31", correct: true}
        ],
        correct: `Ar${'<sub>'}P${'</sub>'} = 31`
    },
    {
        question: "Sa eshte masa atomike e aluminit?",
        alternatives: [
            { a: "27", correct: true},
            { b: "27,5", correct: false},
            { c: "29", correct: false}
        ],
        correct: `Ar${'<sub>'}Al${'</sub>'} = 27`
    },
    {
        question: "Sa eshte masa atomike e heliumit?",
        alternatives: [
            { a: "2", correct: false},
            { b: "4", correct: true},
            { c: "4,5", correct: false}
        ],
        correct: `Ar${'<sub>'}He${'</sub>'} = 4`
    },
    {
        question: "Sa eshte masa atomike e natriumit?",
        alternatives: [
            { a: "20", correct: false},
            { b: "22", correct: false},
            { c: "23", correct: true}
        ],
        correct: `Ar${'<sub>'}Na${'</sub>'} = 23`
    },
    {
        question: "Sa eshte masa atomike e azotit?",
        alternatives: [
            { a: "14", correct: true},
            { b: "16", correct: false},
            { c: "16,5", correct: false}
        ],
        correct: `Ar${'<sub>'}N${'</sub>'} = 14`
    },
    {
        question: "Sa eshte masa atomike e karbonit?",
        alternatives: [
            { a: "6", correct: false},
            { b: "12", correct: true},
            { c: "13", correct: false}
        ],
        correct: `Ar${'<sub>'}C${'</sub>'} = 12`
    },
    {
        question: "Sa eshte masa atomike e klorit?",
        alternatives: [
            { a: "34", correct: false},
            { b: "17", correct: false},
            { c: "35,5", correct: true}
        ],
        correct: `Ar${'<sub>'}Cl${'</sub>'} = 35,5`
    },
    {
        question: "Sa eshte masa atomike e squfurit?",
        alternatives: [
            { a: "32,1", correct: true},
            { b: "30", correct: false},
            { c: "15", correct: false}
        ],
        correct: `Ar${'<sub>'}S${'</sub>'} = 32,1`
    },
    {
        question: "Sa eshte masa atomike e kalciumit?",
        alternatives: [
            { a: "39", correct: false},
            { b: "40,1", correct: true},
            { c: "20", correct: false}
        ],
        correct: `Ar${'<sub>'}Ca${'</sub>'} = 40,1`
    },
    {
        question: "Sa eshte masa atomike e magnezit?",
        alternatives: [
            { a: "23", correct: false},
            { b: "20", correct: false},
            { c: "24,3", correct: true}
        ],
        correct: `Ar${'<sub>'}Mg${'</sub>'} = 24,3`
    },
    {
        question: "Sa eshte masa atomike e bakrit?",
        alternatives: [
            { a: "63,5", correct: true},
            { b: "62", correct: false},
            { c: "29", correct: false}
        ],
        correct: `Ar${'<sub>'}Cu${'</sub>'} = 63,5`
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
                                   - Sa eshte masa atomike e hidrogjenit? ${"<strong>"} Ar${'<sub>'}H${'</sub'} = 1 ${"</strong>"}`;
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