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
        question: "Kondesimi eshte kalimi nga ...",
        alternatives: [
            { a: "gjendja e lenget ne te gazte", correct: false},
            { b: "gjendja e gazte ne te lenget", correct: true},
            { c: "gjendja e lenget ne te ngurte", correct: false}
        ],
        correct: "Kondesimi eshte kalimi nga gjendja e gazte ne te lenget"
    },
    {
        question: "Cili nga keto pohime eshte i sakte per gjendjen e ngurte?",
        alternatives: [
            { a: "Grimcat nuk jane ne kontakt me te gjithe fqinjet", correct: false},
            { b: "Grimcat nuk lekunden fare", correct: false},
            { c: "Grimcat lekunden rreth nje pike fikse", correct: true}
        ],
        correct: "Grimcat lekunden rreth nje pike fikse"
    },
    {
        question: "Si mund te rritet shtypja e gazit ne nje ene te mbyllur?",
        alternatives: [
            { a: "Duke zvogeluar vellimin e enes", correct: true},
            { b: "Duke rritur vellimin e enes", correct: false},
            { c: "Duke ulur temperaturen", correct: false}
        ],
        correct: "Duke zvogeluar vellimin - sepse ne kete menyre grimcat e gazit do perplaseshin me shpesh me muret e enes"
    },
    {
        question: "Ne cilen gjendje agregate te lendes molekulat kane me shume energji kinetike?",
        alternatives: [
            { a: "Te lenget", correct: false},
            { b: "Te gazte", correct: true},
            { c: "te ngurte", correct: false}
        ],
        correct: "Ne gjendje te gazte"
    },
    {
        question: "Ne cilen gjendje agregate te lendes molekulat jane te paketuara me prane njera-tjetres?",
        alternatives: [
            { a: "Te gazte", correct: false},
            { b: "Te lenget", correct: false},
            { c: "Te ngurte", correct: true}
        ],
        correct: "Ne gjendje te ngurte"
    },
    {
        question: "Cfare ndodh me lengjet kur ato jane duke avulluar?",
        alternatives: [
            { a: "Ato ftohen", correct: true},
            { b: "Ato ngrohen", correct: false},
            { c: "Temperatura nuk ndryshon", correct: false}
        ],
        correct: "Ato ftohen sepse molekulat qe levizin me shpejt largohen ne formen e avullit dhe ngelen molekulat e lengut qe kane energji kinetike mesatare me te ulet, si pasoje temperatura ulet duke qene se energjia kinetike mesatare e molekulave eshte e njejta gje me temperaturen"
    },
    {
        question: "Si quhet procesi i kalimit te gjendjes agregate nga gjendja e ngurte ne te lenget?",
        alternatives: [
            { a: "Avullim", correct: false},
            { b: "Shkrirje", correct: true},
            { c: "Ngrirje", correct: false}
        ],
        correct: "Shkrirje"
    },
    {
        question: "Cfare ndodh me energjine mesatare kinetike te molekulave kur nje substance nxehet?",
        alternatives: [
            { a: "Nuk ndryshon", correct: false},
            { b: "Ajo ulet", correct: false},
            { c: "Ajo rritet", correct: true}
        ],
        correct: "Ajo rritet - Kur nje substance nxehet, nje pjese e energjise se thithur depozitohet ne molekulat e saj duke bere qe te rritet shpejtesia e levizjes se molekulave. Kjo rritje e shpejtesise se levizjes te molekulave regjistrohet si rritje e temperatures se substances"
    },
    {
        question: "Duhet me shume kohe per te vluar nje leng apo per te shkrire nje trup te ngurte?",
        alternatives: [
            { a: "Per te vluar nje leng", correct: true},
            { b: "Per te shkrire nje trup te ngurte", correct: false},
            { c: "Nuk ka ndryshim", correct: false}
        ],
        correct: "Per te vluar nje leng - sepse temperatura e vlimit eshte me e larte se temperatura e shkrirjes, keshtu qe nevojitet me shume energji per te vluar nje leng"
    },
    {
        question: "Kur ... e nje gazi ne nje ene te mbyllur eshte konstante, presioni dhe vellimi i tij jane ...?",
        alternatives: [
            { a: "temperatura, ne perpjestim te drejte", correct: false},
            { b: "masa, ne perpjestim te drejte", correct: false},
            { c: "temperatura, ne perpjestim te zhdrejte", correct: true}
        ],
        correct: `Kur ${"<b>"} temperatura ${"</b>"} e nje gazi ne nje ene te mbyllur eshte konstante, presioni dhe vellimi i tij jane ${"<b>"} ne perpjestim te zhdrejte ${"</b>"}`
    },
    {
        question: "Nje ene ka 600 litra ajer ne shtypje 2 atmosfere. Po qe se shtypja e gazit rritet ne 5 atmosfere sa do te behet vellimi i tij? (Pranojme se temperatura e ajrit mbetet konstante)",
        alternatives: [
            { a: "240 litra", correct: true},
            { b: "250 litra", correct: false},
            { c: "2400 litra", correct: false}
        ],
        correct: "240 litra || p1 * V1 = p2 * V2 || 2 atmosfere * 600 litra = 5 atmosfere * V2 || V2 = 1200/5 = 240 litra"
    },
    {
        question: "Cila nga keto formula eshte e sakte?",
        alternatives: [
            { a: "p1/V1 = p2/V2", correct: false},
            { b: "p1V1 = p2V2", correct: true},
            { c: "p ~ V", correct: false}
        ],
        correct: "p1V1 = p2V2 - Ligji i Bojlit"
    },
    {
        question: "Kemi nje gaz me vellim 4 litra ne shtypje 2 atmosfere. Sa do jete shtypja nese rrisim vellimin e gazit ne 16 litra? (Temperatura eshte konstante)",
        alternatives: [
            { a: "12 atm", correct: false},
            { b: "0.5 atm", correct: false},
            { c: "0.2 atm", correct: true}
        ],
        correct: "0.2 atm || p1V1 = p2V2 = 2 atm * 4 litra = p2 * 16 litra || p2 = 8/16 = 0.2atm"
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
                                   - Trupat e lenget ... ${"<strong>"} Trupat e lenget zene nje vellim te caktuar ${"</strong>"}`;
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