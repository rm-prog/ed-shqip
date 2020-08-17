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
        question: "Si u quajt faza e luftes nga shtatori 1938 deri ne qershor 1940?",
        alternatives: [
            { a: "Lufta e Genjeshtert", correct: true},
            { b: "Fitorja", correct: false},
            { c: "Blickrajg", correct: false}
        ],
        correct: "Lufta e Gjenjeshtert - per shkak se Italia dhe Japonia shpallen neutralitetin ne lufte  \
        ndersa Britania dhe Franca nuk ndermorren veprime ushtarake ndaj Gjermanise sic i kishin premtuar Polonise"
    },
    {
        question: "Ne cilen date i shpalli lufte Italia Britanise dhe Frances?",
        alternatives: [
            { a: "10 gusht 1940", correct: false},
            { b: "10 qershor 1940", correct: true},
            { c: "10 qershor 1939", correct: false}
        ],
        correct: "10 qershor 1940"
    },
    {
        question: "Ne cilen date pushtuan gjermanet Parisin?",
        alternatives: [
            { a: "14 qershor 1941", correct: false},
            { b: "14 korrik 1940", correct: false},
            { c: "14 qershor 1940", correct: true}
        ],
        correct: "14 qershor 1940"
    },
    {
        question: "Cili ishte kryeministri i Britanise qe drejtoj vendin e tij gjate L.II.B?",
        alternatives: [
            { a: "Winston Churchill", correct: true},
            { b: "Harry Truman", correct: false},
            { c: "Rusvelti", correct: false}
        ],
        correct: "Winston Churchill"
    },
    {
        question: "Si quhej plani me te cilin Hitleri kapi ne befasi BS-ne gjate L.II.B?",
        alternatives: [
            { a: "Plani Shlifen", correct: false},
            { b: "Operacioni Barboza", correct: true},
            { c: "Blickrajg", correct: false}
        ],
        correct: "Operacioni Barboza"
    },
    {
        question: "Tri shtetet kryesore te Boshtit kishin planifikuar ndarjen e botes mes tyre.  \
        Cilen pjese synonte Italia?",
        alternatives: [
            { a: "Europen", correct: false},
            { b: "Afriken", correct: false},
            { c: "Mesdheun", correct: true}
        ],
        correct: "Mesdheun"
    },
    {
        question: "Per cilin qytet u be lufta kryesore mes gjermaneve dhe sovjetikeve?",
        alternatives: [
            { a: "Moske", correct: true},
            { b: "Stalingard", correct: false},
            { c: "Shen Petersburg", correct: false}
        ],
        correct: "Moske"
    },
    {
        question: "Ne cilen ben japonezet sulmin ne bazen luftarake te amerikaneve me Pearl Harbor?",
        alternatives: [
            { a: "8 dhjetor 1941", correct: false},
            { b: "7 dhjetor 1941", correct: true},
            { c: "7 nentor 1941", correct: false}
        ],
        correct: "7 dhjetor 1941"
    },
    {
        question: "Cilet nga keto shtete i shpallen lufte SHBA-se me 12 dhjetor 1941?",
        alternatives: [
            { a: "Italia dhe Japonia", correct: false},
            { b: "Gjermania dhe Japonia", correct: false},
            { c: "Gjermania dhe Italia", correct: true}
        ],
        correct: "Gjermania dhe Italia - tri dite mbasi SHBA-ja shpalli lufte Japonise Gjermania dhe Italia i shpallen lufte SHBA-se"
    },
    {
        question: "Cila beteje rivendosi epersine detare te SHBA-se ne Oqeanin Paqesor?",
        alternatives: [
            { a: "Beteja e Midueit", correct: true},
            { b: "Beteja e Bataanit", correct: false},
            { c: "Beteja e Atlantikut", correct: false}
        ],
        correct: "Beteja e Midueit - ne qershor 1942 fitorja e SHBA-se ne betejen e Midueit shenoi kthesen e luftes ne Azi ne favor te Aleateve"
    },
    {
        question: "Ne cilen date u be deklarata e perbashket nga Rusvelti, Churchil dhe Stalini qe njihet si Karta e Atlantikut?",
        alternatives: [
            { a: "15 gusht 1941", correct: false},
            { b: "14 gusht 1941", correct: true},
            { c: "14 gusht 1940", correct: false}
        ],
        correct: "14 gusht 1941"
    },
    {
        question: "Si quhet deklarata e nenshkruar nga njezet e gjashte shtete me 1 janar 1942?",
        alternatives: [
            { a: "Karta e Atlantikut", correct: false},
            { b: "Deklarata e Paqes", correct: false},
            { c: "Deklarata e Kombeve te Bashkuara", correct: true}
        ],
        correct: "Deklarata e Kombeve te Bashkuara"
    },
    {
        question: "Cili ishte shkaku kryesor i fillimit te Luftes se dyte Boterore?",
        alternatives: [
            { a: "Politika e jashtme e Gjermanise dhe Italise", correct: true},
            { b: "Zhvillimi teknologjik", correct: false},
            { c: "Kriza ekonomike", correct: false}
        ],
        correct: "Politika e jashtme e Gjermanise dhe Italise"
    },
    {
        question: "Kur filloj L.II.B?",
        alternatives: [
            { a: "2 shtator 1939", correct: false},
            { b: "1 shtator 1939", correct: true},
            { c: "1 shtator 1940", correct: false}
        ],
        correct: "1 shtator 1939 - date kjo ku Gjermania sulmoi Polonin gje qe solli deklarimin e luftes nga Franca dhe Britania"
    },
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
                                   - Cilat shtete deklaruan te parat lufte ndaj Gjermanise gjate L.II.B? ${"<strong>"} Britania dhe Franca - ne 3 shtator 1939 Britania dhe Franca deklaruan lufte 
                                   ndaj Gjermanise pasi ajo sulmoi Polonine ne 1 shtator 1939 ${"</strong>"}`;
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