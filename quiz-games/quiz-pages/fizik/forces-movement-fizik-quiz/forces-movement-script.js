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
        question: "Cilen force perdorin frenat e makines per te ngadalesuar makinen?",
        alternatives: [
            { a: "Shtypjen", correct: false},
            { b: "Rezistencen e ajrit", correct: false},
            { c: "Forcen e ferkimit", correct: true}
        ],
        correct: "Forcen e ferkimit"
    },
    {
        question: "Cila eshte formula e forces rezultante kur forcat jane te njejtin kah?",
        alternatives: [
            { a: "Fr = F1 + F2", correct: true},
            { b: "Fr = F1 - F2", correct: false},
            { c: "Fr = F1 * F2", correct: false}
        ],
        correct: "Fr = F1 + F2"
    },
    {
        question: "Shtytja e motorit te makines eshte 600N ndersa rezistenca e ajrit ne kah te kundert eshte 400N. Sa eshte forca rezultante?",
        alternatives: [
            { a: "1000N", correct: false},
            { b: "200N", correct: true},
            { c: "400N", correct: false}
        ],
        correct: "200N || Fr = F1 - F2, Fr = 600N - 400N"
    },
    {
        question: "Cila eshte formula e peshes?",
        alternatives: [
            { a: "P = mf", correct: false},
            { b: "P = Nm", correct: false},
            { c: "P = mg", correct: true}
        ],
        correct: "P = mg  || pesha = mase * nxitimi i renies se lire"
    },
    {
        question: "Graviteti eshte nje force kontakti. E vertet apo e gabuar?",
        alternatives: [
            { a: "E vertet", correct: false},
            { b: "E gabuar", correct: true},
            { c: "Nuk e di", correct: false}
        ],
        correct: "E gabuar - gravitet eshte nje force pa kontakt sepse ajo vepron pa pasur kontakt midis objekteve. \
         Graviteti eshte nje force qe vepron mbi te gjithe trupat qe kane mase"
    },
    {
        question: "Me cilen formule gjendet masa kur dime peshen?",
        alternatives: [
            { a: "m = P/g", correct: true},
            { b: "m = Pg", correct: false},
            { c: "m = P - g", correct: false}
        ],
        correct: "m = P/g || P = mg || P / g = mg / g ||  P / g = m || masa = peshe / nxitimi i renies se lire"
    },
    {
        question: "Sa eshte pesha e nje trupi me mase 25 kg?",
        alternatives: [
            { a: "250N", correct: true},
            { b: "2,5N", correct: false},
            { c: "2500N", correct: false}
        ],
        correct: "250 N || P = mg, P = 25 * 10, P = 250N"
    },
    {
        question: "Cfare ndodh me rezistencen e ajrit kur nje makine rrit shpejtesine?",
        alternatives: [
            { a: "Ajo zvogelohet", correct: false},
            { b: "Ajo rritet", correct: true},
            { c: "Nuk ndryshon", correct: false}
        ],
        correct: "Ajo rritet - Rezistenca e ajrit eshte ne perpjestim te drejte me shpejtesine e objektit"
    },
    {
        question: "Cili eshte simboli i nxitimit?",
        alternatives: [
            { a: "F", correct: false},
            { b: "n", correct: false},
            { c: "a", correct: true}
        ],
        correct: "a"
    },
    {
        question: "Cila eshte formula qe perdoret per te gjetur nxitimin kur dime forcen dhe masen?",
        alternatives: [
            { a: "a = F / m", correct: true},
            { b: "a = F * m", correct: false},
            { c: "a = F + m", correct: false}
        ],
        correct: "a = F / m"
    },
    {
        question: "Cilen formule mund te perdorim per te gjetur impulsin e nje trupi?",
        alternatives: [
            { a: "p = m / v", correct: false},
            { b: "p = m * v", correct: true},
            { c: "p = m - v", correct: false}
        ],
        correct: "p = m * v || impulsi i trupit = mase * shpejtesi"
    },
    {
        question: "Cila eshte njesia matese e impulsit?",
        alternatives: [
            { a: "mv", correct: false},
            { b: "m/s", correct: false},
            { c: "Ns", correct: true}
        ],
        correct: "Ns || ose kg m/s"
    },
    {
        question: "Cila eshte njesia matese e nxitimit?",
        alternatives: [
            { a: "m/s2", correct: true},
            { b: "m/s", correct: false},
            { c: "ms", correct: false}
        ],
        correct: "m/s2"
    },
    {
        question: "Cili eshte simboli i kohes ne fizike?",
        alternatives: [
            { a: "k", correct: false},
            { b: "t", correct: true},
            { c: "T", correct: false}
        ],
        correct: "t"
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
                                   - Si quhet njesia matese e forces dhe simboli i tij? ${"<strong>"} Njuton - N ${"</strong>"}`;
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