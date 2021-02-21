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
        question: "Cili eshte kryeqyteti me popullsine me te madhe ne Europe?",
        alternatives: [
            { a: "Londra", correct: false},
            { b: "Berlini", correct: false},
            { c: "Moska", correct: true}
        ],
        correct: "Moska - Rreth 12 500 000 banore"
    },
    {
        question: "Kryeqytet i cilit shtet eshte Talini?",
        alternatives: [
            { a: "Letonia", correct: false},
            { b: "Estonia", correct: true},
            { c: "Lituania", correct: false}
        ],
        correct: "Estonia"
    },
    {
        question: "Cili eshte kryeqyteti i Zvicres?",
        alternatives: [
            { a: "Berna", correct: true},
            { b: "Gjeneva", correct: false},
            { c: "Zurihu", correct: false}
        ],
        correct: "Berna"
    },
    {
        question: "Cili qytet konsiderohet si kryeqyteti i Europes?",
        alternatives: [
            { a: "Berlini", correct: false},
            { b: "Strasburg", correct: false},
            { c: "Brukseli", correct: true}
        ],
        correct: "Brukseli - Sepse ne Bruksel ndodhen shume institucione te BE-se"
    },
    {
        question: "Cili eshte kryeqyteti i Hollandes?",
        alternatives: [
            { a: "Haga", correct: false},
            { b: "Amsterdami", correct: true},
            { c: "Roterdami", correct: false}
        ],
        correct: "Amsterdami - Megjithese ne Hage ndodhen institucionet me te rendesishme"
    },
    {
        question: "Cili eshte kryeqyteti me i vizituar i Europes?",
        alternatives: [
            { a: "Londra", correct: true},
            { b: "Parisi", correct: false},
            { c: "Madridi", correct: false}
        ],
        correct: "Londra - Rreth 20 milione vizitor cdo vit"
    },
    {
        question: "Kryeqytet i cilit shtet eshte Helsinki?",
        alternatives: [
            { a: "Norvegjia", correct: false},
            { b: "Danimarka", correct: false},
            { c: "Finlanda", correct: true}
        ],
        correct: "Finlanda"
    },
    {
        question: "Cili eshte kryqyteti i Cekise?",
        alternatives: [
            { a: "Bratislava", correct: false},
            { b: "Ljubjana", correct: false},
            { c: "Praga", correct: true}
        ],
        correct: "Praga"
    },
    {
        question: "Cili eshte kryeqyteti i Rumanise?",
        alternatives: [
            { a: "Sofia", correct: false},
            { b: "Budapeshti", correct: false},
            { c: "Bukureshti", correct: true}
        ],
        correct: "Bukureshti"
    },
    {
        question: "Cili eshte kryeqyteti i Lituanise?",
        alternatives: [
            { a: "Kishinau", correct: false},
            { b: "Riga", correct: false},
            { c: "Vilnusi", correct: true}
        ],
        correct: "Vilnusi"
    },
    {
        question: "Cili eshte kryeqyteti i Bjellorusise?",
        alternatives: [
            { a: "Minsku", correct: true},
            { b: "Kishinau", correct: false},
            { c: "Moska", correct: false}
        ],
        correct: "Minsku"
    },
    {
        question: "Kryeqyteti i cilit shtet eshte Valeta?",
        alternatives: [
            { a: "Andora", correct: false},
            { b: "Malta", correct: true},
            { c: "San Marino", correct: false}
        ],
        correct: "Malta"
    },
    {
        question: "Kryeqytet i cilit shtet eshte Dublini?",
        alternatives: [
            { a: "Irlanda", correct: true},
            { b: "Irlanda e Veriut", correct: false},
            { c: "Belgjika", correct: false}
        ],
        correct: "Irlanda"
    },
    {
        question: "Cili eshte kryeqyteti i Polonise?",
        alternatives: [
            { a: "Poznani", correct: false},
            { b: "Krakovi", correct: false},
            { c: "Varshava", correct: true}
        ],
        correct: "Varshava"
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
                                   - Cili eshte kryeqyteti i Ukraines? ${"<strong>"} Kievi ${"</strong>"}`;
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

