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
        question: "Cfare energjie i jepni nje trupi nese ate e ngrini ne lartesi?",
        alternatives: [
            { a: "Energji eletrike", correct: false},
            { b: "Energji potenciale te rendeses", correct: true},
            { c: "Energji e lartesise", correct: false}
        ],
        correct: "Energji potenciale te rendeses - Epg"
    },
    {
        question: "Cila nga keto nuk eshte nje depozite e energjise?",
        alternatives: [
            { a: "Energji kinetike", correct: false},
            { b: "Energji potenciale e rendeses", correct: false},
            { c: "Energji termike", correct: true}
        ],
        correct: "Energji termike || Energjia termike eshte nje transferim i energjise"
    },
    {
        question: "Cfare energjie depozitojne trupat e nxehte?",
        alternatives: [
            { a: "Energji te brendshme", correct: true},
            { b: "Energji termike", correct: false},
            { c: "Energji berthamore", correct: false}
        ],
        correct: "Energji te brendshme"
    },
    {
        question: "Cila nga keto nuk eshte nje transferim i energjise?",
        alternatives: [
            { a: "Energji elektrike", correct: false},
            { b: "Energji kinetike", correct: true},
            { c: "Energjia e drites", correct: false}
        ],
        correct: "Energji kinetike || Energjia kinetike eshte nje depozite energjie"
    },
    {
        question: "Nje llambe elektrike perdor 25J energji elektrike. 15J shkon ne energji te drites ndersa 10J ne energji termike. Sa eshte rendimenti i shnderrimit te energjise?",
        alternatives: [
            { a: "50%", correct: false},
            { b: "40%", correct: false},
            { c: "60%", correct: true}
        ],
        correct: "60% || rendimeti = energji e dobishme / energji e konsumuar * 100& || rendimeti = 15J / 25J * 100% = 60%"
    },
    {
        question: "Cila eshte njesia matese e energjise?",
        alternatives: [
            { a: "J", correct: true},
            { b: "N", correct: false},
            { c: "Pa", correct: false}
        ],
        correct: "J - Xhaul"
    },
    {
        question: "Cila eshte formula e energjise kinetike?",
        alternatives: [
            { a: `Ek = m * v${'<sup>'}2${'</sup>'}`, correct: false},
            { b: `Ek = m * v${'<sup>'}2${'</sup>'} / 2`, correct: true},
            { c: `Ek = m * v${'<sup>'}2${'</sup>'} * 2`, correct: false}
        ],
        correct: `Ek = m * v${'<sup>'}2${'</sup>'}/2`
    },
    {
        question: "Cila eshte formula e energjise potenciale te rendeses?",
        alternatives: [
            { a: "Epg = mg/h", correct: false},
            { b: "Epg = mh / g", correct: false},
            { c: "Epg = mgh", correct: true}
        ],
        correct: "Epg = mgh"
    },
    {
        question: "Nje trup me mase 50kg zoteron nje energji potenciale te rendeses 10 000N. Ne cfare lartesie ndodhet trupi?",
        alternatives: [
            { a: "20m", correct: true},
            { b: "200m", correct: false},
            { c: "2m", correct: false}
        ],
        correct: "20m || Epg = mgh || h = Epg / mg || h = 10 000N / 50kg * 10 = 20m"
    },
    {
        question: "Si quhet procesi ane te te cilit Dielli prodhon energji?",
        alternatives: [
            { a: "Fuzion berthamor", correct: true},
            { b: "Fision berthamor", correct: false},
            { c: "Reaksion termik", correct: false}
        ],
        correct: "Fuzion berthamor - ose ndryshe bashkim berthamor eshte procesi ku dy atome goditen dhe bashkohen duke formuar nje atom tjeter dhe duke cliruar energji \
        . Ne rastin e Diellit dy atome hidrogjeni goditen dhe bashkohen duke formuar nje atom heliumi dhe duke cliruar nje sasi te madhe energjie"
    },
    {
        question: "Cila nga keto burime energjie nuk eshte e rinovueshme?",
        alternatives: [
            { a: "Energji diellore", correct: false},
            { b: "Qymyri", correct: true},
            { c: "Energjia e baticave", correct: false}
        ],
        correct: "Qymyri - Qymyri eshte nje burim energjie i parinovueshem"
    },
    {
        question: "Cilat jane transformimet e energjise qe ndodhin ne nje hidrocentral?",
        alternatives: [
            { a: "Energji kinetike - Energji eletrike", correct: false},
            { b: "Energji termike - Energji elektrike", correct: false},
            { c: "Energji potenciale e rendeses - Energji kinetike - Energji elektrike", correct: true}
        ],
        correct: "Energji potenciale e rendeses - Energji kinetike - Energji elektrike || Uji qe ndodhet ne lartesi zoteron energji potenciale e rendeses dhe kur bie poshte transformohet ne energji kinetike qe ve ne levizje turbinen. Me ane te gjeneratorit energjia kinetike transformohet ne energji elektrike"
    },
    {
        question: "Cfare transformimi energjie ndodh tek baterite kur ato shkarkohen?",
        alternatives: [
            { a: "Energji kimike ne energji elektrike", correct: true},
            { b: "Energji elektrike ne energji kinetike", correct: false},
            { c: "Energji kimike ne energji kinetike", correct: false}
        ],
        correct: "Energji kimike ne energji elektrike"
    },
    {
        question: "Nje objekt me mase 50 kg zoteron nje energji kinetike prej 10000J. Me cfare shpejtesie leviz ky objekt?",
        alternatives: [
            { a: "20 m/s", correct: true},
            { b: "500 m/s", correct: false},
            { c: "200 m/s", correct: false}
        ],
        correct: `20 m/s || Ek = mv${'<sup>'}2${'</sup>'} / 2 || v = ${'&#8730;'} Ek*2/m || v = ${'&#8730;'} 10000J*2 / 50kg = 20m/s`
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
                                   - Cfare energjie ruajne muskujt tane? ${"<strong>"} Energji kimike ${"</strong>"}`;
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