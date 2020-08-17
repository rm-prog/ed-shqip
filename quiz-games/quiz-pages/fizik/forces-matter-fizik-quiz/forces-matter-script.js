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
        question: "Cila eshte formula e ligjit te Hukut?",
        alternatives: [
            { a: "F = kl", correct: false},
            { b: "F = kx", correct: true},
            { c: "F = dx", correct: false}
        ],
        correct: "F = kx || Ngarkesa = konstantja e sustes * zgjatja e sustes"
    },
    {
        question: "Kur nje suste peson demtim te perhershem(shformim joelastik) themi se ...?",
        alternatives: [
            { a: "Ngarkesa i ka kaluar 100N", correct: false},
            { b: "Ngarkesa eshte shume e vogel", correct: false},
            { c: "eshte kaluar kufiri i perpjesetueshmerise", correct: true}
        ],
        correct: "eshte kaluar kufiri i perpjesetueshmerise"
    },
    {
        question: "Forca qe terheq susten eshte 200N, ndersa konstantja e sustes eshte  10N/cm. Sa cm eshte zgjatur susta?",
        alternatives: [
            { a: "20cm", correct: true},
            { b: "2000cm", correct: false},
            { c: "10cm", correct: false}
        ],
        correct: "20cm || F = kx || x = F/k || x = 200N / 10N/cm = 20cm"
    },
    {
        question: "Aq me e madhe konstantja e sustes ...",
        alternatives: [
            { a: "aq me e lehte eshte ta zgjasim susten", correct: false},
            { b: "aq me e veshtire eshte ta zgjasim susten", correct: true},
            { c: "nuk ndikon ne veshtiresin e zgjatjes se sustes", correct: false}
        ],
        correct: "aq me e veshtire eshte ta zgjasim susten - sipas ekuacionit F = kx, aq me e madhe te jete \
        k-ja(konstantja e sustes) aq me shume force duhet ushtruar per te zgjatur susten ne nje gjatesi te caktuar (x)"
    },
    {
        question: "Nje suste e pazgjatur e ka gjatesine 12.0cm. Konstantja e saj eshte 8.0N/cm. Sa eshte ngarkesa qe nevojitet per ta zgjatur susten deri ne gjatesine 15.0cm?",
        alternatives: [
            { a: "240N", correct: false},
            { b: "3N", correct: false},
            { c: "24N", correct: true}
        ],
        correct: "24N || x = 15cm - 12cm = 3cm || F = kx || F = 8N/cm * 3cm= 24N"
    },
    {
        question: "Per cfare perdoret manometri?",
        alternatives: [
            { a: "Per te treguar ndryshimin e shtypjes midis dy lengjeve apo gazeve", correct: true},
            { b: "Per te matur shtypjes atmosferike", correct: false},
            { c: "Per te treguar shtypjen absolute te nje gazi", correct: false}
        ],
        correct: "Per te treguar ndryshimin e shtypjes midis dy lengjeve apo gazeve"
    },
    {
        question: "Cfare nenkupton njesia matese mm Hg?",
        alternatives: [
            { a: "milimetra magnez", correct: false},
            { b: "milimetra merkur", correct: true},
            { c: "mikrometra merkur", correct: false}
        ],
        correct: "milimetra merkur"
    },
    {
        question: "Cila eshte formula e shtypjes qe vepron mbi nje njesi siperfaqeje?",
        alternatives: [
            { a: "p = F * S", correct: false},
            { b: "Sh = F / S", correct: false},
            { c: "p = F / S", correct: true}
        ],
        correct: "p = F / S"
    },
    {
        question: "Cila eshte njesia matese e shtypjes ne sistemin SI?",
        alternatives: [
            { a: "Pa", correct: true},
            { b: "N/m(katror)", correct: false},
            { c: "N", correct: false}
        ],
        correct: `Pa - Paskal || edhe N/m${'<sup>'}2${'</sup>'} perdoret per te matur shtypjen por Pa eshte njesia matese e shtypjes e regjistruar ne sistemin SI`
    },
    {
        question: "Me cilen nga keto menyra mund te rrisim shtypjen?",
        alternatives: [
            { a: "Duke ulur forcen qe vepron", correct: false},
            { b: "Duke zvogeluar siperfaqen", correct: true},
            { c: "Duke zmadhuar siperfaqen", correct: false}
        ],
        correct: "Duke zmadhuar siperfaqen - p = F/S -> shtypja eshte ne perpjestim te zhdrejte me siperfaqen"
    },
    {
        question: "Siperfaqja mbi te cilen vepron nje force eshte 2m katror ndersa shtypja 10Pa. Me sa eshte e barabarte forca qe vepron mbi kete siperfaqe?",
        alternatives: [
            { a: "5Pa", correct: false},
            { b: "5N", correct: false},
            { c: "20N", correct: true}
        ],
        correct: `20N || p = F/S || F = p * S || F = 10Pa * 2m${'<sup>'}2${'</sup>'} = 20N`
    },
    {
        question: "Cila eshte formula e shtypjes ne lengje mbi trupat ne prehje?",
        alternatives: [
            { a: "p = dgh", correct: true},
            { b: "p = dah", correct: false},
            { c: "p = dgv", correct: false}
        ],
        correct: "p = dgh"
    },
    {
        question: "Mbi nje trup, qe ndodhet ne nje thellesi te caktuar ne nje leng me dendesi 1000kg/m3, ushtrohet nje shtypje 50 000Pa. \
        Ne cfare thellesi ndodhet trupi?",
        alternatives: [
            { a: "50m", correct: false},
            { b: "500m", correct: false},
            { c: "5m", correct: true}
        ],
        correct: "5m || d = 1000kg/m3 || p = dgh || h = (p/d) / g|| h = (50000Pa/1000kg/m3) / 10 = 5m || h = 5m"
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
                                   - Cfare force duhet te veproje mbi nje trup per ta zgjatur ate? ${"<strong>"} Force tensioni ${"</strong>"}`;
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