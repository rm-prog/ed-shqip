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
        question: "Cili eshte lumi me i gjate ne Ameriken e Jugut?",
        alternatives: [
            { a: "Lumi Orinoko", correct: false},
            { b: "Lumi Parana", correct: false},
            { c: "Lumi Amazon", correct: true}
        ],
        correct: "Lumi Amazon - 6840 km2"
    },
    {
        question: "Cili eshte liqeni me uje te embel me i madh ne Ameriken e Jugut?",
        alternatives: [
            { a: "Liqeni Poopo", correct: false},
            { b: "Liqeni Titikaka", correct: true},
            { c: "Liqeni Argentino", correct: false}
        ],
        correct: "Liqeni Titikaka - siperfaqja 8,372 km2"
    },
    {
        question: "Cila eshte shkretetira me e thate ne Ameriken e Jugut?",
        alternatives: [
            { a: "Shkretetira Atakama", correct: true},
            { b: "Shkretetira e Silolit", correct: false},
            { c: "Shkretetira Patagoniane", correct: false}
        ],
        correct: "Shkretetira Atakama - 15 mm shi ne vit"
    },
    {
        question: "Cili eshte mali me i larte ne Ameriken e Jugut?",
        alternatives: [
            { a: "Mali Mersedario", correct: false},
            { b: "Mali Ilimani", correct: false},
            { c: "Mali Akongagua", correct: true}
        ],
        correct: "Mali Akongagua - 6962 m i larte"
    },
    {
        question: "Cili eshte shteti me vijen bregdetare me te gjate ne Ameriken e Jugut?",
        alternatives: [
            { a: "Argjentina", correct: false},
            { b: "Brazili", correct: true},
            { c: "Kili", correct: false}
        ],
        correct: "Brazili - 7,491 km vije bregdetare e gjate"
    },
    {
        question: "Sa oqeane lagin Ameriken e Jugut?",
        alternatives: [
            { a: "3", correct: true},
            { b: "2", correct: false},
            { c: "1", correct: false}
        ],
        correct: "3 - Oqeani Atlantik, Paqesor dhe Antarktik"
    },
    {
        question: "Me sa shtete kufizohet Brazili?",
        alternatives: [
            { a: "11", correct: false},
            { b: "9", correct: false},
            { c: "10", correct: true}
        ],
        correct: "10 - Uruguaji, Peru, Bolivi, Paraguaji, Argjentina, Guinea Franceze, Suriname, Gujana, Venezuela, Kolumbia"
    },
    {
        question: "Gjej shtetin qe kufizohet nga Argjentina, Bolivia dhe Peruja?",
        alternatives: [
            { a: "Paraguaji", correct: false},
            { b: "Kili", correct: true},
            { c: "Uruguaji", correct: false}
        ],
        correct: "Kili"
    },
    {
        question: "Cili eshte shteti me perendimor i Amerikes se Jugut?",
        alternatives: [
            { a: "Peru", correct: true},
            { b: "Ekuador", correct: false},
            { c: "Kolumbia", correct: false}
        ],
        correct: "Peru"
    },
    {
        question: "Cili eshte shteti me jugor i Amerikes se Jugut?",
        alternatives: [
            { a: "Uruguaji", correct: false},
            { b: "Argjentina", correct: false},
            { c: "Kili", correct: true}
        ],
        correct: "Kili"
    },
    {
        question: "Cili shtet ndodhet ne lindje te Venezueles?",
        alternatives: [
            { a: "Kolumbia", correct: false},
            { b: "Gujana", correct: true},
            { c: "Kajene", correct: false}
        ],
        correct: "Gujana"
    },
    {
        question: "Cila eshte gjuha me e folur ne Ameriken e Jugut?",
        alternatives: [
            { a: "Spanjishtja", correct: true},
            { b: "Portugalishtja", correct: false},
            { c: "Anglishtja", correct: false}
        ],
        correct: "Spanjishtja - Rreth 210 milion njerez flasin Spanjisht ne Ameriken e Jugut"
    },
    {
        question: "Cili eshte shteti me popullsine me te madhe ne Ameriken e Jugut?",
        alternatives: [
            { a: "Argjentina", correct: false},
            { b: "Kolumbia", correct: false},
            { c: "Brazili", correct: true}
        ],
        correct: "Brazili - me rreth 212 milione banore"
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
                                   - Cili eshte shteti me i madh ne Ameriken e Jugut? ${"<strong>"} Brazili ${"</strong>"}`;
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