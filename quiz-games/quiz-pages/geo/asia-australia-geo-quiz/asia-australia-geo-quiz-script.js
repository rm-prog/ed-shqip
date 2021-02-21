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
        question: "Nga sa oqeane laget Azia?",
        alternatives: [
            { a: "2", correct: false},
            { b: "1", correct: false},
            { c: "3", correct: true}
        ],
        correct: "3 - Oqeani Paqesor ne lindje, Oqeani Arktik ne veri, Oqeani Indian ne Jug"
    },
    {
        question: "Nga sa shtete kufizohet Mongolia?",
        alternatives: [
            { a: "4", correct: false},
            { b: "2", correct: true},
            { c: "3", correct: false}
        ],
        correct: "2 - Rusia dhe Kina"
    },
    {
        question: "Cili kontinent ndodhet ne perendim te Azise?",
        alternatives: [
            { a: "Afrika", correct: false},
            { b: "Australia", correct: false},
            { c: "Europa", correct: true}
        ],
        correct: "Europa"
    },
    {
        question: "Cili eshte mali me i larte i Azise?",
        alternatives: [
            { a: "Mali Everest", correct: true},
            { b: "Mali K2", correct: false},
            { c: "Mali Makalu", correct: false}
        ],
        correct: "Mali Everest - Lartesia 8848m"
    },
    {
        question: "Cili eshte lumi me i gjate ne Azi?",
        alternatives: [
            { a: "Lumi i Verdhe", correct: false},
            { b: "Lumi Jangtze", correct: true},
            { c: "Lumi Mekong", correct: false}
        ],
        correct: "Lumi Jangtze - 6 300 km i gjate"
    },
    {
        question: "Cili eshte liqeni me i madh ne Azi?",
        alternatives: [
            { a: "Deti Kaspik", correct: true},
            { b: "Liqeni Bajkal", correct: false},
            { c: "Liqeni Kanka", correct: false}
        ],
        correct: "Deti Kaspik - Siperfaqja: 371 000 km2"
    },
    {
        question: "Cili eshte shteti me popullsine me te madhe ne Azi?",
        alternatives: [
            { a: "India", correct: false},
            { b: "Kina", correct: true},
            { c: "Rusia", correct: false}
        ],
        correct: "Kina - 1 393 000 000 banore"
    },
    {
        question: "Ne sa shtete kalojne Himalajet?",
        alternatives: [
            { a: "4", correct: false},
            { b: "3", correct: false},
            { c: "5", correct: true}
        ],
        correct: "5 - Butan, Nepal, Pakistan, Indi dhe Kine"
    },
    {
        question: "A eshte Azia kontinenti me i madh ne bote?",
        alternatives: [
            { a: "Po", correct: true},
            { b: "Jo", correct: false},
            { c: "Nuk e di", correct: false}
        ],
        correct: "Po - Siperfaqja 44.58 milion km2"
    },
    {
        question: "Cili shtet ne Azi ka vijen bregdetare me te gjate?",
        alternatives: [
            { a: "Japonia", correct: false},
            { b: "Indonesia", correct: true},
            { c: "Filipine", correct: false}
        ],
        correct: "Indonesia - Vije bregdetare 54 716 km e gjate"
    },
    {
        question: "Cili eshte shtet me i vizituar ne Azi?",
        alternatives: [
            { a: "Tailanda", correct: false},
            { b: "Japonia", correct: false},
            { c: "Kina", correct: true}
        ],
        correct: "Kina - Rreth 63 milion vizitor cdo vit"
    },
    {
        question: "Cili eshte shkretetira me e thate ne Azi?",
        alternatives: [
            { a: "Shkretetira Karakum", correct: false},
            { b: "Shkretetira e Gobit", correct: true},
            { c: "Shkretetira Muju-Kum", correct: false}
        ],
        correct: "Shkretetira e Gobit - Cdo vit mesatarisht bie 194 milimetra shi"
    },
    {
        question: "Cili eshte shteti qe kufizohet nga Kina, Mianmarmi, Butani, Nepali, Pakistani, Afganistani dhe Bangladeshi?",
        alternatives: [
            { a: "Korea e Jugut", correct: false},
            { b: "India", correct: true},
            { c: "Indonesia", correct: false}
        ],
        correct: "India"
    },
    {
        question: "Cili eshte qyteti me i populluar ne Australi?",
        alternatives: [
            { a: "Sidnej", correct: true},
            { b: "Melburni", correct: false},
            { c: "Bendigo", correct: false}
        ],
        correct: "Sidnej - Popullsia: 5.2 milion banore"
    },
    {
        question: "Cili eshte mali me i larte ne kontinentin e Australise?",
        alternatives: [
            { a: "Mali Taranaki", correct: false},
            { b: "Mali Bogong", correct: false},
            { c: "Mali Aoraki", correct: true}
        ],
        correct: "Mali Aoraki - Lartesia: 3 754 m"
    },
    {
        question: "Cila eshte feja me e perhapur ne Australi?",
        alternatives: [
            { a: "Kristianizmi", correct: true},
            { b: "Budizmi", correct: false},
            { c: "Islamizmi", correct: false}
        ],
        correct: "Kristianizmi - 73% e popullsise krishtere"
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
                                   - Cili eshte shteti me i madh i Azise? ${"<strong>"} Rusia ${"</strong>"}`;
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

