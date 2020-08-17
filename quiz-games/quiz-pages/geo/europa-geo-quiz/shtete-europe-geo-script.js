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
        question: "Cili eshte shteti me i madh ne Europe?",
        alternatives: [
            { a: "Gjermania", correct: false},
            { b: "Franca", correct: false},
            { c: "Rusia", correct: true}
        ],
        correct: "Rusia: 3,972,400km2 siperfaqe"
    },
    {
        question: "Me sa shtete kufizohet Shqiperia?",
        alternatives: [
            { a: "4", correct: true},
            { b: "3", correct: false},
            { c: "5", correct: false}
        ],
        correct: "4: Mali i Zi, Kosova, Maqedonia e Veriut, Greqia"
    },
    {
        question: "Cili det lag ne veri Polonine?",
        alternatives: [
            { a: "Deti i Veriut", correct: false},
            { b: "Deti Baltik", correct: true},
            { c: "Deti Mesdhe", correct: false}
        ],
        correct: "Deti Baltik"
    },
    {
        question: "Gjej shtetin qe kufizohet nga Italia, Gjermania, Belgjika, Spanja, \
        Monako, Andora, Zvicra, dhe Luksemburgu?",
        alternatives: [
            {a: "Polonia", correct: false},
            {b: "Austria", correct: false},
            {c: "Franca", correct: true}
        ],
        correct: "Franca"
    },
    {
        question: "Cili eshte shteti me i vizituar nga turistet ne Europe?",
        alternatives: [
            {a: "Spanja", correct: false},
            {b: "Franca", correct: true},
            {c: "Italia", correct: false}
        ],
        correct: "Franca: 86.9 milion vizitor ne vit"
    },
    {
        question: "Cili eshte shteti me vijen me te gjate bregdetare ne Europe?",
        alternatives: [
            {a: "Greqia", correct: false},
            {b: "Norvegjia", correct: true},
            {c: "Italia", correct: false}
        ],
        correct: "Norvegjia: 58,133km vije bregdetare e gjate"
    },
    {
        question: "Cili oqean lag Europen ne perendim?",
        alternatives: [
            {a: "Oqeani Atlantik", correct: true},
            {b: "Oqeani Paqesor", correct: false},
            {c: "Oqeani i ngrire i Veriut", correct: false}
        ],
        correct: "Oqeani Atlantik"
    },
    {
        question: "Cili eshte lumi me i gjate ne Europe?",
        alternatives: [
            {a: "Lumi Danub", correct: false},
            {b: "Lumi Ural", correct: false},
            {c: "Lumi i Vollges", correct: true}
        ],
        correct: "Lumi i Vollges:  3,690 km i gjate"
    },
    {
        question: "Me cilin shtet kufizohet Gjermania ne Veri?",
        alternatives: [
            {a: "Danimarka", correct: true},
            {b: "Polonia", correct: false},
            {c: "Hollanda", correct: false}
        ],
        correct: "Danimarka"
    },
    {
        question: "Cili eshte liqeni me i madh ne Europe?",
        alternatives: [
            {a: "Liqeni Lagoda", correct: true},
            {b: "Liqeni i Gjeneves", correct: false},
            {c: "Liqeni i Ohrit", correct: false}
        ],
        correct: "Liqeni Lagoda - Siperfaqja: 17,700 km²"
    },
    {
        question: "Cili eshte shteti me perendimor i Europes?",
        alternatives: [
            {a: "Spanja", correct: false},
            {b: "Portugalia", correct: true},
            {c: "Italia", correct: false}
        ],
        correct: "Portugalia"
    },
    {
        question: "Cili det lag jugun e Europes?",
        alternatives: [
            {a: "Deti Baltik", correct: false},
            {b: "Deti i Zi", correct: false},
            {c: "Deti Mesdhe", correct: true}
        ],
        correct: "Deti Mesdhe"
    },
    {
        question: "Nga sa shtete perbehet Gadishulli Iberik?",
        alternatives: [
            {a: "3", correct: true},
            {b: "2", correct: false},
            {c: "1", correct: false}
        ],
        correct: "3 - Spanja, Portugalia, Andora"
    },
    {
        question: "Cili eshte kufiri lindor i kontinentit te Europes?",
        alternatives: [
            {a: "Malet Urale", correct: true},
            {b: "Mali i Bardhe", correct: false},
            {c: "Oqeani Atlantik", correct: false}
        ],
        correct: "Malet Urale"
    },
    {
        question: "Nga sa oqeane laget Europa?",
        alternatives: [
            {a: "1", correct: false},
            {b: "3", correct: false},
            {c: "2", correct: true}
        ],
        correct: "2 - Oqeani Atlantik dhe Arktik"
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
                                   - Cili kontinent ndodhet ne jug te Europes? ${"<strong>"} Afrika ${"</strong>"}`;
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

