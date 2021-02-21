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
        question: "Cili eshte kryeqyteti me popullsine me te madhe ne Ameriken e Jugut?",
        alternatives: [
            { a: "Sao Paolo", correct: false},
            { b: "Brazilia", correct: false},
            { c: "Buenos Aires", correct: true}
        ],
        correct: "Buenos Aires - rreth 15 milion banore"
    },
    {
        question: "Cili eshte kryeqyteti me i vizituar ne Ameriken e Jugut?",
        alternatives: [
            { a: "Brazilia", correct: false},
            { b: "Buenos Aires", correct: true},
            { c: "Rio de Zhanerio", correct: false}
        ],
        correct: "Buenos Aires - me rreth 2.4 milion vizitor cdo vit"
    },
    {
        question: "Cili eshte kryeqyteti i Argjentines?",
        alternatives: [
            { a: "Buenos Aires", correct: true},
            { b: "Rozario", correct: false},
            { c: "Santiago", correct: false}
        ],
        correct: "Buenos Aires"
    },
    {
        question: "Kryeqytet i cilit shtet eshte Santiago?",
        alternatives: [
            { a: "Kolumbia", correct: false},
            { b: "Venezuela", correct: false},
            { c: "Kili", correct: true}
        ],
        correct: "Kili"
    },
    {
        question: "Cili eshte kryeqyteti i Venezueles?",
        alternatives: [
            { a: "Lima", correct: false},
            { b: "Karakas", correct: true},
            { c: "Bogota", correct: false}
        ],
        correct: "Karakas"
    },
    {
        question: "Cili eshte kryeqyteti i Ekuadorit?",
        alternatives: [
            { a: "Kuiro", correct: true},
            { b: "Kuenka", correct: false},
            { c: "Santa Domingo", correct: false}
        ],
        correct: "Kuiro"
    },
    {
        question: "Kryeqyteti i cilit shteti eshte Montovideo?",
        alternatives: [
            { a: "Paraguaji", correct: false},
            { b: "Bolivi", correct: false},
            { c: "Uruguaji", correct: true}
        ],
        correct: "Uruguaji"
    },
    {
        question: "Cili eshte kryeqyteti i Gujanes?",
        alternatives: [
            { a: "Bartika", correct: false},
            { b: "XhorxhTaun", correct: true},
            { c: "Kajene", correct: false}
        ],
        correct: "XhorxhTaun"
    },
    {
        question: "Kryeqyteti administrativ i cilit shteti eshte La Pazi?",
        alternatives: [
            { a: "Bolivi", correct: true},
            { b: "Suriname", correct: false},
            { c: "Peru", correct: false}
        ],
        correct: "Bolivi"
    },
    {
        question: "Cili eshte kryeqyteti i Surinames?",
        alternatives: [
            { a: "Brokpondo", correct: false},
            { b: "Arekuipa", correct: false},
            { c: "Paramaribo", correct: true}
        ],
        correct: "Paramaribo"
    },
    {
        question: "Cili eshte kryeqyteti i Guineas Franceze?",
        alternatives: [
            { a: "Maturi", correct: false},
            { b: "Kajene", correct: true},
            { c: "Sucre", correct: false}
        ],
        correct: "Kajene"
    },
    {
        question: "Cili eshte kryeqyteti i Trinidad Tobagos?",
        alternatives: [
            { a: "Porti i Spanjes", correct: true},
            { b: "San Fernando", correct: false},
            { c: "Sucre", correct: false}
        ],
        correct: "Porti i Spanjes"
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
                                   - Cili eshte kryeqyteti i Brazilit? ${"<strong>"} Brazilia ${"</strong>"}`;
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