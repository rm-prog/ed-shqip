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
        question: "Me cilen nga keto menyra mund te rrisim momentin e forces?",
        alternatives: [
            { a: "Forcen qe vepron e largojme nga qendra e rrotullimit", correct: true},
            { b: "Forcen qe vepron e afrojme me qendren e rrotullimit", correct: false},
            { c: "Asnjera nga keto me siper", correct: false}
        ],
        correct: "Forcen qe vepron e largojme nga qendra e rrotullimit"
    },
    {
        question: "Cila eshte formula e momentit te forces?",
        alternatives: [
            { a: "M = F/d", correct: false},
            { b: "M = F*d", correct: true},
            { c: "M = F*v", correct: false}
        ],
        correct: "M = F*d"
    },
    {
        question: "Cila eshte njesia matese e momentit te forces?",
        alternatives: [
            { a: "N", correct: false},
            { b: "N/m", correct: false},
            { c: "Nm", correct: true}
        ],
        correct: "Nm - Njuton meter"
    },
    {
        question: "Momenti i forces eshte i barabarte me 80Nm, ndersa forca eshte e barabarte me 40N. Sa eshte momenti i krahut?",
        alternatives: [
            { a: "2m", correct: true},
            { b: "3200m", correct: false},
            { c: "40m", correct: false}
        ],
        correct: "2m || M = F * d || d = M / F || d = 80Nm / 40N = 2m"
    },
    {
        question: "Cila force vepron vertikalisht lart ne piken e mbeshtetjes?",
        alternatives: [
            { a: "Forca e rendeses", correct: false},
            { b: "Forca e kontaktit", correct: true},
            { c: "momenti i forces", correct: false}
        ],
        correct: "Forca e kontaktit"
    },
    {
        question: "Si mund ta perkufizojme qendren e mases?",
        alternatives: [
            { a: "qendra e nje trupi", correct: false},
            { b: "pika me e larte e nje trupi", correct: false},
            { c: "pika ku sasia e mases eshte e shperndare ne menyre te barabarte nga te gjitha anet", correct: true}
        ],
        correct: "pika ku sasia e mases eshte e shperndare ne menyre te barabarte nga te gjitha anet"
    },
    {
        question: "Pika mbeshtetese e nje trari ndodhet ne mes te tij. Pesha e trarit eshte 200N. \
        Njera force 100N vepron 2m larg qendres se rrotullimit, ndersa nje force tjeter 200N vepron 1m larg qendres se rrotullimit.\
        Me sa eshte e barabarte forca e kontaktit dhe momenti rrotullues rezultant?",
        alternatives: [
            { a: "Forca e kontaktit: 500N, momenti rrotullues rezultant: 0Nm", correct: true},
            { b: "Forca e kontaktit: 400N, momenti rrotullues rezultant: 200Nm", correct: false},
            { c: "Forca e kontaktit: 200N, momenti rrotullues rezultant: 400Nm", correct: false}
        ],
        correct: "Forca e kontaktit: 500N, momenti rrotullues rezultant: 0N || Forca e kontaktit = 200N + 100 + 200N, Mr = momenti orar - momenti kunderorar, Mr = 200Nm - 200Nm = 0N "
    },
    {
        question: "Kur nje trup eshte ne ekuiliber, efekti rrotullues rezultant mbi te eshte ..?",
        alternatives: [
            { a: "0Nm", correct: true},
            { b: "> 0Nm", correct: false},
            { c: "< 0Nm", correct: false}
        ],
        correct: "0Nm"
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
                                   - Madhesia qe tregon efektin rrotullues te nje force rreth qendres se rrotullimit eshte ... ? ${"<strong>"} Momenti i forces ${"</strong>"}`;
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