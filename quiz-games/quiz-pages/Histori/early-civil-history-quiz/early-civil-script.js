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
        question: "Cfare ishte Revolucioni Neolitik?",
        alternatives: [
            { a: "Tranzicioni nga fshati ne qytet", correct: false},
            { b: "Tranzicioni nga jeta nomadike ne jete sedentare", correct: true},
            { c: "Tranzicioni nga gjuetia ne agrikulture", correct: false}
        ],
        correct: "Tranzicioni nga jeta nomadike ne jete sedentare - dmth kalimi nga jeta si endacak ne jeten ne nje banese te perhershme"
    },
    {
        question: "Ku u zhvilluan qyteterimet e para?",
        alternatives: [
            { a: "Prane liqeneve", correct: false},
            { b: "Prane deteve", correct: false},
            { c: "Prane lumenjve", correct: true}
        ],
        correct: "Prane lumenjve"
    },
    {
        question: "Si quhej sistemi i shkrimit ne Mesopotami?",
        alternatives: [
            { a: "Kuneiform", correct: true},
            { b: "Herioglife", correct: false},
            { c: "Kaligraf", correct: false}
        ],
        correct: "Kuneiform"
    },
    {
        question: "Afer cilit lum u zhvillua Egjipti i Lashte?",
        alternatives: [
            { a: "Lumi Eufrat", correct: false},
            { b: "Lumi Nil", correct: true},
            { c: "Lumi Jangtze", correct: false}
        ],
        correct: "Lumi Nil"
    },
    {
        question: "Mbreterite ne Egjiptin e Lashte quheshin ...?",
        alternatives: [
            { a: "Oligark", correct: false},
            { b: "Sulltan", correct: false},
            { c: "Faraon", correct: true}
        ],
        correct: "Faraon"
    },
    {
        question: "Cili qyteterim u zhvillua afer Lumit te Verdhe?",
        alternatives: [
            { a: "Kina e lashte", correct: true},
            { b: "Mesopotamia", correct: false},
            { c: "Greqia e lashte", correct: false}
        ],
        correct: "Kina e lashte"
    },
    {
        question: "Cili ishte qellimi kryesor i sistemit te shkrimit kuneiform?",
        alternatives: [
            { a: "Edukimi", correct: false},
            { b: "Perdorej per te regjistruar shkembimet dhe tregtit", correct: true},
            { c: "Ishte nje census", correct: false}
        ],
        correct: "Perdorej per te regjistruar shkembimet dhe tregtit"
    },
    {
        question: "Kush shkruajti ligjin e pare?",
        alternatives: [
            { a: "Moisiu", correct: false},
            { b: "Solomoni", correct: false},
            { c: "Hamurabi", correct: true}
        ],
        correct: "Hamurabi - Hamurabi shkruajti kodin e Hamurabit 1754 vite para eres sone"
    },
    {
        question: "Si quhej rruga qe ndiqnin njerezit per te marre mendafsh dhe ereza?",
        alternatives: [
            { a: "Rruga e Mendafshit", correct: true},
            { b: "Rruga e Erezave", correct: false},
            { c: "Rruga e Kines", correct: false}
        ],
        correct: "Rruga e Mendafshit"
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
                                   - Cili qyteterim u zhvillua afer lumit Tiger dhe Eufrat? ${"<strong>"} Mesopotamia ${"</strong>"}`;
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