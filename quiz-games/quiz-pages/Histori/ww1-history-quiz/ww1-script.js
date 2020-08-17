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
        question: "Ne cilin qytet u vra princi Franc Ferdinand?",
        alternatives: [
            { a: "Beograd", correct: false},
            { b: "Vien", correct: false},
            { c: "Sarajevo", correct: true}
        ],
        correct: "Sarajevo - 28 qershor 1914"
    },
    {
        question: "Cilat nga keto ideologji qene ndezes te shperthimit te L.I.B?",
        alternatives: [
            { a: "Imperializmi dhe nacionalizmi", correct: true},
            { b: "Imperializmi dhe materializmi", correct: false},
            { c: "Imperializmi dhe racizmi", correct: false}
        ],
        correct: "Imperializmi dhe nacionalizmi"
    },
    {
        question: "Cilat nga keto shtete ishin pjese e Antantes?",
        alternatives: [
            { a: "Britania e Madhe, Franca, Gjermania", correct: false},
            { b: "Britania e Madhe, Franca, Rusia", correct: true},
            { c: "Serbia, Turqia, Rusia", correct: false}
        ],
        correct: "Britania e Madhe, Franca, Rusia"
    },
    {
        question: "Si quhej plani qe Gjermania pergatiti per te luftuar Francen dhe Rusine?",
        alternatives: [
            { a: "Plani Hindenburg", correct: false},
            { b: "Operacioni Barbosa", correct: false},
            { c: "Plani Shlifen", correct: true}
        ],
        correct: "Plani Shlifen"
    },
    {
        question: "Ne cilen date perfundoi Lufta e pare Boterore?",
        alternatives: [
            { a: "11 nentor 1918", correct: true},
            { b: "9 nentor 1918", correct: false},
            { c: "11 tetor 1918", correct: false}
        ],
        correct: "11 nentor 1918 - date ku Gjermania nenshkroi armepushimin"
    },
    {
        question: "Ne cilin vit u fut SHBA-ja ne lufte?",
        alternatives: [
            { a: "1915", correct: false},
            { b: "1916", correct: false},
            { c: "1917", correct: true}
        ],
        correct: "1917 - aleate me Antanten"
    },
    {
        question: "Ne cilin date u nenshkrua armepushimi midis Austro-Hungarise dhe Italise?",
        alternatives: [
            { a: "2 nentor 1918", correct: false},
            { b: "3 nentor 1918", correct: true},
            { c: "3 tetor 1918", correct: false}
        ],
        correct: "3 nentor 1918"
    },
    {
        question: "Cila beteja shenoi disfaten e pare madhore te Gjermanise ne L.I.B?",
        alternatives: [
            { a: "Beteja e Marnes", correct: true},
            { b: "Beteja e Tanenbergu", correct: false},
            { c: "Beteja e Monsit", correct: false}
        ],
        correct: "Beteja e Marnes"
    },
    {
        question: "Cilat shtete ishin pjese te Bllokut Qendror ne fillim te luftes?",
        alternatives: [
            { a: "Gjermania, Austro-Hungaria, Rusia", correct: false},
            { b: "Gjermania, Austro-Hungaria, Franca", correct: false},
            { c: "Gjermania, Austro-Hungaria, Italia", correct: true}
        ],
        correct: "Gjermania, Austro-Hungaria, Italia"
    },
    {
        question: "Sulmi ndaj cilit shtet nga Gjermania provokoj futjen ne lufte te Britanise?",
        alternatives: [
            { a: "Franca", correct: false},
            { b: "Belgjika", correct: true},
            { c: "Rusia", correct: false}
        ],
        correct: "Belgjika - sulmi ndaj Belgjikes ne 4 gusht 1914 pasi refuzoi te lejonte Gjermanine te kalonte ne France provokoj futjen ne lufte te Britanise"
    },
    {
        question: "Cila beteje ishte me e gjata gjate L.I.B?",
        alternatives: [
            { a: "Beteja e Verdunit", correct: true},
            { b: "Beteja e Marnes", correct: false},
            { c: "Beteja e Tanenburgu", correct: false}
        ],
        correct: "Beteja e Verdunit - zgjati 10 muaj nga 28 shkurt deri me 2 shtator 1916"
    },
    {
        question: "Cili nga keto shtete ishte neutral gjate L.I.B?",
        alternatives: [
            { a: "Austria", correct: false},
            { b: "Italia", correct: false},
            { c: "Norvegjia", correct: true}
        ],
        correct: "Norvegjia"
    },
    {
        question: "Cili ishte fronti kryesor i planit Shlifen?",
        alternatives: [
            { a: "Front lindor", correct: false},
            { b: "Front perendimor", correct: true},
            { c: "Fronti verior", correct: false}
        ],
        correct: "Fronti perendimor"
    },
    {
        question: "Kur u nenshkrua Traktati i Fshehte i Londres?",
        alternatives: [
            { a: "26 prill 1915", correct: true},
            { b: "26 prill 1916", correct: false},
            { c: "24 prill 1915", correct: false}
        ],
        correct: "26 prill 1915"
    },
    {
        question: "Pjese e ciles aleance u be Turqia ne vitin 1915?",
        alternatives: [
            { a: "Blloku Qendror", correct: true},
            { b: "Antanta", correct: false},
            { c: "Asnjera", correct: false}
        ],
        correct: "Blloku Qendror"
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
                                   - Cili eshte shtet beri deklarimin e pare te luftes? ${"<strong>"} Austro-Hungaria ${"</strong>"}`;
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