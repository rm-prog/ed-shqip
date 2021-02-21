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
        question: "Kur i filloi punimet Konferenca e Paqes?",
        alternatives: [
            { a: "28 korrik 1946", correct: false},
            { b: "29 korrik 1946", correct: true},
            { c: "20 korrik 1947", correct: false}
        ],
        correct: "29 korrik 1946 - ne Paris"
    },
    {
        question: "Kush u vu ne krye te Partise Komuniste te BS-se mbas vdekjes se Stalinit?",
        alternatives: [
            { a: "Leon Trocki", correct: false},
            { b: "Leonid Brezhnjev", correct: false},
            { c: "Nikita Hrushovi", correct: true}
        ],
        correct: "Nikita Hrushovi"
    },
    {
        question: "Kur u shperbe Bashkimi Sovjetik?",
        alternatives: [
            { a: "26 dhjetor 1991", correct: true},
            { b: "26 dhjetor 1992", correct: false},
            { c: "20 dhjetor 1991", correct: false}
        ],
        correct: "26 dhjetor 1991"
    },
    {
        question: "Ne cilin vit erdhi ne pushtet Gorbacovi?",
        alternatives: [
            { a: "1984", correct: false},
            { b: "1985", correct: true},
            { c: "1986", correct: false}
        ],
        correct: "1985"
    },
    {
        question: "Nga cila parti vinin presidentet e Amerikes mbas L.II.B deri ne vitin 1957?",
        alternatives: [
            { a: "Partia Laburist", correct: false},
            { b: "Partia Demokratike", correct: false},
            { c: "Partia Republikane", correct: true}
        ],
        correct: "Partia Republikane - me president Hari Truman dhe Ajzenhauer"
    },
    {
        question: "Cili mori postin e presidentit te Amerikes mbas vdekjes se Xhon Kenedit?",
        alternatives: [
            { a: "Lindon Xhonson", correct: true},
            { b: "Ronald Regan", correct: false},
            { c: "Richard Nikson", correct: false}
        ],
        correct: "Lindon Xhonson - mbas vdekjes se Xhon Kenedit ne vitin 1963 postin e tij e zuri zevendespresidenti Lindon Xhonson"
    },
    {
        question: "Kush u zgjodh president i Amerikes ne vitin 1980?",
        alternatives: [
            { a: "Bill Klinton", correct: false},
            { b: "Ronald Regan", correct: true},
            { c: "Xhorxh Bush", correct: false}
        ],
        correct: "Ronald Regan - nga partia republikane"
    },
    {
        question: "Ne cilin vit fituan Mozambiku dhe Angola pavaresine?",
        alternatives: [
            { a: "1971", correct: false},
            { b: "1972", correct: false},
            { c: "1973", correct: true}
        ],
        correct: "1973"
    },
    {
        question: "Kur u mbajt referendumi ne Itali qe solli triumfin e Republikes?",
        alternatives: [
            { a: "2 qershor 1946", correct: true},
            { b: "3 qershor 1946", correct: false},
            { c: "10 qershor 1947", correct: false}
        ],
        correct: "2 qershor 1946"
    },
    {
        question: "Kush u zgjodh president i Frances ne dhjetor 1958?",
        alternatives: [
            { a: "Leon Blum", correct: false},
            { b: "Sharl de Gol", correct: true},
            { c: "Lavali", correct: false}
        ],
        correct: "Sharl de Gol"
    },
    {
        question: "Cfare lloj republike ishte Republika e peste e Frances?",
        alternatives: [
            { a: "Republike parlamentare", correct: false},
            { b: "Republike konfederale", correct: false},
            { c: "Republike parlamentare-presidenciale", correct: true}
        ],
        correct: "Republike parlamentare-presidenciale"
    },
    {
        question: "Cila parti fitoi zgjedhjet elektorale te Britanise se Madhe ne 14 korrik 1945?",
        alternatives: [
            { a: "Partia Laburiste", correct: true},
            { b: "Partia Konservative", correct: false},
            { c: "Partia Demokratike", correct: false}
        ],
        correct: "Partia Laburiste"
    },
    {
        question: "Kush u vu ne krye te qeverise ne Britani ne vitin 1951?",
        alternatives: [
            { a: "Klement Etli", correct: false},
            { b: "Winston Churchill", correct: true},
            { c: "Makmilan", correct: false}
        ],
        correct: "Winston Churchill - pas fitimit te zgjedhjeve ne vitin 1951 nga Partia Konservatore"
    },
    {
        question: "Kur ra Muri i Berlinit?",
        alternatives: [
            { a: "Dhjetor 1991", correct: false},
            { b: "Nentor 1990", correct: false},
            { c: "Nentor 1991", correct: true}
        ],
        correct: "Nentor 1991"
    },
    {
        question: "Kur zyrtarisht u be ribashkimi i Gjermanise?",
        alternatives: [
            { a: "Tetor 1991", correct: true},
            { b: "Nentor 1991", correct: false},
            { c: "Tetor 1991", correct: false}
        ],
        correct: "Tetor 1991"
    },
    {
        question: "Ne sa zona admnistrimi u nda Gjermania mbas Luftes se dyte Boterore?",
        alternatives: [
            { a: "3", correct: false},
            { b: "4", correct: true},
            { c: "5", correct: false}
        ],
        correct: "4 - Zona e administrimit e SHBA-se, Bashkimit Sovjetik, Frances dhe Britanise"
    },
    {
        question: "Cili u be shteti i pare demokratik ne Europen Lindore?",
        alternatives: [
            { a: "Hungaria", correct: false},
            { b: "Rumania", correct: false},
            { c: "Polonia", correct: true}
        ],
        correct: "Polonia - ne fillim te vitit 1989"
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
                                   - Kur u themelua OKB-ja? ${"<strong>"} Qershor 1945 ne San-Francisko ${"</strong>"}`;
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