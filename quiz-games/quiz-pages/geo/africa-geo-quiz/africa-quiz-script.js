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
        question: "Cili eshte lumi me i gjate ne Afrike?",
        alternatives: [
            { a: "Lumi Nil", correct: true},
            { b: "Lumi Kongo", correct: false},
            { c: "Lumi Zambez", correct: false}
        ],
        correct: "Lumi Nil - 6650 km i gjate"
    },
    {
        question: "Cili eshte mali me i larte ne Afrike?",
        alternatives: [
            { a: "Mali Meru", correct: false},
            { b: "Mali Kenia", correct: false},
            { c: "Mali Kilimanxharo", correct: true}
        ],
        correct: "Mali Kilimanxharo - 5895 m i larte"
    },
    {
        question: "Cili eshte liqeni me i madh ne Afrike?",
        alternatives: [
            { a: "Liqeni Tanganika", correct: false},
            { b: "Liqeni Viktoria", correct: true},
            { c: "Liqeni Malavi", correct: false}
        ],
        correct: "Liqeni Viktoria - Siperfaqja 68 800 km2"
    },
    {
        question: "Cili eshte shteti me i vizituar ne Afrike?",
        alternatives: [
            { a: "Tunizia", correct: false},
            { b: "Egjipti", correct: false},
            { c: "Maroku", correct: true}
        ],
        correct: "Maroku - Rreth 12 300 000 vizitor ne vit"
    },
    {
        question: "Me sa shtete ka Algjeria kufi tokesor?",
        alternatives: [
            { a: "4", correct: false},
            { b: "7", correct: true},
            { c: "6", correct: false}
        ],
        correct: "7 - Maroku, Mauritani, Libia, Mali, Tunizia, Saharaja perendimore dhe Nigeri"
    },
    {
        question: "Nga sa oqeane laget Afrika?",
        alternatives: [
            { a: "1", correct: false},
            { b: "3", correct: true},
            { c: "2", correct: false}
        ],
        correct: "3 - Oqeani Atlantik, Oqeani Antarktik dhe Oqeani Indian"
    },
    {
        question: "Gjej shtetin qe kufizohet nga Sudani, Etiopia, Kenia, Uganda, Republika Demokratike e Kongos, Republika e Afrikes Qendrore?",
        alternatives: [
            { a: "Sudani Jugor", correct: true},
            { b: "Tanzania", correct: false},
            { c: "Kongo", correct: false}
        ],
        correct: "Sudani Jugor"
    },
    {
        question: "Cili eshte shteti me vijen bregdetare me te gjate ne Afrike?",
        alternatives: [
            { a: "Egjipti", correct: false},
            { b: "Afrika e Jugut", correct: false},
            { c: "Madagaskari", correct: true}
        ],
        correct: "Madagaskari - 4,828 km vije bregdetare te gjate"
    },
    {
        question: "Cili eshte shteti me popullsine me te madhe ne Afrike?",
        alternatives: [
            { a: "Etiopia", correct: false},
            { b: "Nigeria", correct: true},
            { c: "Algjeria", correct: false}
        ],
        correct: "Nigeria - me rreth 200 milion banore"
    },
    {
        question: "Cili eshte shteti me perendimor i Afrikes?",
        alternatives: [
            { a: "Senegali", correct: true},
            { b: "Guinea", correct: false},
            { c: "Saharaja perendimore", correct: false}
        ],
        correct: "Senegali"
    },
    {
        question: "Cili eshte shteti me lindor i Afrikes?",
        alternatives: [
            { a: "Egjipti", correct: false},
            { b: "Sudani", correct: false},
            { c: "Somalia", correct: true}
        ],
        correct: "Somalia"
    },
    {
        question: "Ne sa hemisfera shtrihet kontinenti i Afrikes?",
        alternatives: [
            { a: "3", correct: false},
            { b: "4", correct: true},
            { c: "2", correct: false}
        ],
        correct: "4 - Afrika shtrihet ne te katerta hemisferat: veri-perendimore, veri-lindore, jug-lindore, jug-perendimore"
    },
    {
        question: "Kontinenti i Afrikes per nga madhesia eshte i ...?",
        alternatives: [
            { a: "i dyti", correct: true},
            { b: "i pari", correct: false},
            { c: "i treti", correct: false}
        ],
        correct: "I dyti - siperfaqja e Afrikes: 30.37 milion km2"
    },
    {
        question: "Cili qyteterim i lashte u zhvillua prane lumit Nil?",
        alternatives: [
            { a: "Egjipti i lashte", correct: true},
            { b: "Mesopotamia", correct: false},
            { c: "Kina e lashte", correct: false}
        ],
        correct: "Egjipti i lashte"
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
                                   - Cili eshte shteti me i madh ne Afrike? ${"<strong>"} Algjeria ${"</strong>"}`;
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