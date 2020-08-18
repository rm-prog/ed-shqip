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
        question: "Sa kupa bote ka fituar Franca?",
        alternatives: [
            { a: "1", correct: false},
            { b: "2", correct: true},
            { c: "3", correct: false}
        ],
        correct: "2 - ne vitin 1998 dhe 2018"
    },
    {
        question: "Kush e ka fituar boterorin e pare?",
        alternatives: [
            { a: "Brazili", correct: false},
            { b: "Argjentina", correct: false},
            { c: "Uruguaji", correct: true}
        ],
        correct: "Uruguaji - ne vitin 1930"
    },
    {
        question: "Cila kombetare ka fituar boterorin e vitit 2002?",
        alternatives: [
            { a: "Brazili", correct: true},
            { b: "Italia", correct: false},
            { c: "Franca", correct: false}
        ],
        correct: "Brazili"
    },
    {
        question: "Cili futbollist ka fituar me shume kupa bote?",
        alternatives: [
            { a: "Maradona", correct: false},
            { b: "Pele", correct: true},
            { c: "Messi", correct: false}
        ],
        correct: "Pele - me 3 kupa bote me Brazilin"
    },
    {
        question: "Sa kupa bote ka fituar Hollanda?",
        alternatives: [
            { a: "2", correct: false},
            { b: "1", correct: false},
            { c: "0", correct: true}
        ],
        correct: "0"
    },
    {
        question: "Ne cilin shtet u luajt boterori i pare i futbollit?",
        alternatives: [
            { a: "Uruguaji", correct: true},
            { b: "Brazil", correct: false},
            { c: "Argjentine", correct: false}
        ],
        correct: "Uruguaji"
    },
    {
        question: "Ne cilat shtete u mbajt boterori i vitit 2002?",
        alternatives: [
            { a: "Gjermani dhe France", correct: false},
            { b: "Japoni dhe Korene e Jugut", correct: true},
            { c: "Katar dhe Arabi Saudite", correct: false}
        ],
        correct: "Japoni dhe Korene e Jugut"
    },
    {
        question: "Sa kombetare moren pjese ne boterorin e vitit 2010?",
        alternatives: [
            { a: "64", correct: false},
            { b: "48", correct: false},
            { c: "32", correct: true}
        ],
        correct: "32"
    },
    {
        question: "Cila kombetare ka marre pjese ne cdo boteror futbolli?",
        alternatives: [
            { a: "Brazili", correct: true},
            { b: "Gjermania", correct: false},
            { c: "Italia", correct: false}
        ],
        correct: "Brazili"
    },
    {
        question: "Cila kombetare humbi ne finalen e boterorit te vitit 2006?",
        alternatives: [
            { a: "Italia", correct: false},
            { b: "Franca", correct: true},
            { c: "Gjermania", correct: false}
        ],
        correct: "Franca - humbi mbase goditjeve te penalltive kunder Italise"
    },
    {
        question: "Ne cilin shtet u mbajt boterori i vitit 2006?",
        alternatives: [
            { a: "Itali", correct: false},
            { b: "France", correct: false},
            { c: "Gjermani", correct: true}
        ],
        correct: "Gjermani"
    },
    {
        question: "Cila kombetare ka humbur me shume finale boterori?",
        alternatives: [
            { a: "Gjermania", correct: true},
            { b: "Hollanda", correct: false},
            { c: "Argjentina", correct: false}
        ],
        correct: "Gjermania - ne vitin 1966, 1982, 1986, 2002"
    },
    {
        question: "Sa kupa bote ka fituar Anglia?",
        alternatives: [
            { a: "0", correct: false},
            { b: "1", correct: true},
            { c: "2", correct: false}
        ],
        correct: "1 - ne vitin 1966"
    },
    {
        question: "Sa kupa bote ka fituar Argjentina?",
        alternatives: [
            { a: "1", correct: false},
            { b: "3", correct: false},
            { c: "2", correct: true}
        ],
        correct: "2 - ne vitin 1978 dhe 1986"
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
                                   - Cila kombetare ka fituar me shume kupa bote? ${"<strong>"} Brazili - me kupa bote ${"</strong>"}`;
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