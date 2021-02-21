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
        question: "Ku u luajt europiani i pare?",
        alternatives: [
            { a: "France", correct: false},
            { b: "Jugosllavi", correct: true},
            { c: "Itali", correct: false}
        ],
        correct: "Jugosllavi"
    },
    {
        question: "Cili shtet nuk ka fituar ndonjehere nje europian?",
        alternatives: [
            { a: "Danimarka", correct: false},
            { b: "Cekosllovakia", correct: false},
            { c: "Suedia", correct: true}
        ],
        correct: "Suedia"
    },
    {
        question: "Cili lojtar mban rekordin per me shume gola ne nje europian te vetem?",
        alternatives: [
            { a: "Michel Platini", correct: true},
            { b: "Luis Figo", correct: false},
            { c: "Zinedine Zidane", correct: false}
        ],
        correct: "Michel Platini - me 9 gola gjate europiani te vitit 1984"
    },
    {
        question: "Sa here e ka fituar europianin Franca?",
        alternatives: [
            { a: "1", correct: false},
            { b: "2", correct: true},
            { c: "3", correct: false}
        ],
        correct: "2 - ne vitin 1984 dhe 2000"
    },
    {
        question: "Kush e fitoi europianin e vitit 2008?",
        alternatives: [
            { a: "Franca", correct: false},
            { b: "Gjermania", correct: false},
            { c: "Spanja", correct: true}
        ],
        correct: "Spanja"
    },
    {
        question: "Ku u luajt europiani i vitit 2004?",
        alternatives: [
            { a: "Portugali", correct: true},
            { b: "Greqi", correct: false},
            { c: "Danimark", correct: false}
        ],
        correct: "Portugali"
    },
    {
        question: "Kush doli golashenuesi i europianit 2016?",
        alternatives: [
            { a: "Cristiano Ronaldo", correct: false},
            { b: "Antoine Griezmann", correct: true},
            { c: "Gareth Bale", correct: false}
        ],
        correct: "Antoine Griezmann - me 6 gola"
    },
    {
        question: "Cila lojtar u shpall me i miri i europianit 2008?",
        alternatives: [
            { a: "David Villa", correct: false},
            { b: "Fernando Torres", correct: false},
            { c: "Xavi", correct: true}
        ],
        correct: "Xavi"
    },
    {
        question: "Cili nga keto shtete debutoj ne europianin 2012?",
        alternatives: [
            { a: "Ukraina", correct: true},
            { b: "Suedia", correct: false},
            { c: "Irlanda", correct: false}
        ],
        correct: "Ukraina"
    },
    {
        question: "Ne cilin qytet u luajt finalja e europianit 2012?",
        alternatives: [
            { a: "Donetsk", correct: false},
            { b: "Kiev", correct: true},
            { c: "Varshave", correct: false}
        ],
        correct: "Kiev - ne stadiumin olimpik te Kievit"
    },
    {
        question: "Sa ekipe moren pjese ne europianin e vitit 2016?",
        alternatives: [
            { a: "16", correct: false},
            { b: "32", correct: false},
            { c: "24", correct: true}
        ],
        correct: "24"
    },
    {
        question: "Cili nga keto shtete nuk ka mikepritur ndonjehere nje europian?",
        alternatives: [
            { a: "Rusia", correct: true},
            { b: "Danimarka", correct: false},
            { c: "Polonia", correct: false}
        ],
        correct: "Rusia"
    },
    {
        question: "Cili lojtar doli golashenues i europianit 2012?",
        alternatives: [
            { a: "Mario Gomez", correct: false},
            { b: "Fernando Torres", correct: true},
            { c: "David Villa", correct: false}
        ],
        correct: "Fernando Torres - me 3 gola te shenuar"
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