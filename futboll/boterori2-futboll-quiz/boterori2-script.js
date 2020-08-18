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
        question: "Cila kombetare, mikpritese e boterorit eshte eleminuar ne fazen e grupeve?",
        alternatives: [
            { a: "SHBA", correct: false},
            { b: "Afrika e Jugut", correct: true},
            { c: "Turqia", correct: false}
        ],
        correct: "Afrika e Jugut - ne vitin 2010 ishte mikpritese e boterorit dhe u eleminua gjate fazes se grupeve"
    },
    {
        question: "Cili lojtar ka shenuar me shume gola ne nje boteror te vetem?",
        alternatives: [
            { a: "Pele", correct: false},
            { b: "Ronaldo Fenomeni", correct: false},
            { c: "Just Fontaine", correct: true}
        ],
        correct: "Just Fontaine - me 13 gola ne boterorin e vitit 1933"
    },
    {
        question: "Cila kombetare fitoi vendin e trete ne boterorin e pare?",
        alternatives: [
            { a: "SHBA", correct: true},
            { b: "Argjentina", correct: false},
            { c: "Gjermania", correct: false}
        ],
        correct: "SHBA"
    },
    {
        question: "Ne cilin nga keto boterore jane shenuar me shume gola?",
        alternatives: [
            { a: "Rusi 2018", correct: false},
            { b: "Brazil 2014", correct: true},
            { c: "Afrika e Jugut 2010", correct: false}
        ],
        correct: "Brazil 2014 - 171 gola"
    },
    {
        question: "Cila nga keto kombetare mori pjese per here te pare ne nje boteror ne boterorin Rusi 2018?",
        alternatives: [
            { a: "Tunizia", correct: false},
            { b: "Arabia Saudite", correct: false},
            { c: "Islanda", correct: true}
        ],
        correct: "Islanda"
    },
    {
        question: "Cili lojtar shenoi me shume gola ne boterorin Rusi 2018?",
        alternatives: [
            { a: "Harry Kane", correct: true},
            { b: "Antoine Griezmann", correct: false},
            { c: "Cristiano Ronaldo", correct: false}
        ],
        correct: "Harry Kane - me 6 gola ne 6 ndeshje"
    },
    {
        question: "Cila nga keto kombetare ka fituar kupen e botes dy here rresht?",
        alternatives: [
            { a: "Argjentina", correct: false},
            { b: "Italia", correct: true},
            { c: "Uruguaji", correct: false}
        ],
        correct: "Italia - ka fituar dy here njera pas tjetres boterorin e vitit 1934 dhe 1938"
    },
    {
        question: "Cili boteror nuk pati nje finale?",
        alternatives: [
            { a: "Suedi 1958", correct: false},
            { b: "Brazil 2014", correct: false},
            { c: "Brazil 1950", correct: true}
        ],
        correct: "Brazil 1950 - Fituesi i boterorit u vendos ne fazen e grupeve te cilen e fitoi Uruguaji"
    },
    {
        question: "Cili eshte lojtari i vetem qe ka luajtur ne tre finale boterori njera pas tjetres?",
        alternatives: [
            { a: "Cafu", correct: true},
            { b: "Ronaldo Fenomeni", correct: false},
            { c: "Pele", correct: false}
        ],
        correct: "Cafu - ka luajtur ne finalen e boterorit te vitit 1994, 1998 dhe 2002"
    },
    {
        question: "Cila kombetare fitoi te treja ndeshjet e fazes se grupeve pa pesuar gol ne boterorin Rusi 2018?",
        alternatives: [
            { a: "Franca", correct: false},
            { b: "Uruguaji", correct: true},
            { c: "Kroacia", correct: false}
        ],
        correct: "Uruguaji"
    },
    {
        question: "Cristiano Ronaldo shenoi 3 gola, ndersa Diego Costa 2 gola ne barazim 3-3 midis Spanjes dhe Portugalise. Kush shenoi golin tjeter?",
        alternatives: [
            { a: "Isco", correct: false},
            { b: "Andres Iniesta", correct: false},
            { c: "Nacho", correct: true}
        ],
        correct: "Nacho"
    },
    {
        question: "Cila kombetare zuri vendin e katert ne boterorin Rusi 2018?",
        alternatives: [
            { a: "Anglia", correct: true},
            { b: "Belgjika", correct: false},
            { c: "Rusia", correct: false}
        ],
        correct: "Anglia"
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
                                   - Cila lojtar ka bere me shuma gola ne boteroret e futbollit? ${"<strong>"} Miroslav Klose - me 16 gola  ${"</strong>"}`;
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