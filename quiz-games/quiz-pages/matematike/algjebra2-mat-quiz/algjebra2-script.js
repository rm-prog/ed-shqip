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
        question: "Reduktoni shprehjen 2(b-3) - 5(4-b)?",
        alternatives: [
            { a: "7b - 26", correct: true},
            { b: "3b - 26", correct: false},
            { c: "5b - 14", correct: false}
        ],
        correct: "7b - 26 || 2b - 6 - 20 + 5b = 7b - 26"
    },
    {
        question: `Reduktoni shprehjen p${'<sup>'}3${'</sup>'} * q${'<sup>'}7${'</sup>'} * r${'<sup>'}4${'</sup>'} : q${'<sup>'}2${'</sup>'} / r${'<sup>'}3${'</sup>'}*p*q${'<sup>'}3${'</sup>'}?`,
        alternatives: [
            { a: `pqr${'<sup>'}2${'</sup>'}`, correct: false},
            { b: `p${'<sup>'}2${'</sup>'}q${'<sup>'}2${'</sup>'}r`, correct: true},
            { c: `p${'<sup>'}2${'</sup>'}q${'<sup>'}3${'</sup>'}r`, correct: false}
        ],
        correct: `p${'<sup>'}2${'</sup>'}q${'<sup>'}2${'</sup>'}r`
    },
    {
        question: "Reduktoni shprehjen 2/5 * m - 4/5 - 3/5 * m?",
        alternatives: [
            { a: "1/5m - 4/5", correct: false},
            { b: "2/5m - 3/5", correct: false},
            { c: "- 1/5m - 4/5", correct: true}
        ],
        correct: "- 1/5m - 4/5"
    },
    {
        question: "Cila nga shprehjet e meposhtme eshte e barabarte me j + j + 2k?",
        alternatives: [
            { a: "2jk", correct: false},
            { b: "2(j + j + k)", correct: false},
            { c: "Asnjera nga shprehjet e mesiperme", correct: true}
        ],
        correct: "Asnjera nga shprehjet e mesiperme || 2j + 2k nuk eshte e barabarte me 2jk dhe 2j + 2k nuk eshte e barabarte me 2(j + j + k)"
    },
    {
        question: "Cila nga shprehjet e meposhtme eshte e barabarte me k/2?",
        alternatives: [
            { a: "1/2 * k", correct: true},
            { b: "2/k", correct: false},
            { c: "k - 2", correct: false}
        ],
        correct: "1/2 * k"
    },
    {
        question: `Redukto p${'<sup>'}4${'</sup>'} * q${'<sup>'}8${'</sup>'} / p${'<sup>'}0${'</sup>'} * q`,
        alternatives: [
            { a: `p${'<sup>'}3${'</sup>'}q${'<sup>'}7${'</sup>'}`, correct: false},
            { b: `p${'<sup>'}4${'</sup>'}q${'<sup>'}7${'</sup>'}`, correct: true},
            { c: `${'<sup>'}4${'</sup>'}q${'<sup>'}8${'</sup>'}`, correct: false}
        ],
        correct: `p${'<sup>'}4${'</sup>'}q${'<sup>'}7${'</sup>'}`
    },
    {
        question: `Paraqit me thjesht shprehjen (-2x)${'<sup>'}-2${'</sup>'}`,
        alternatives: [
            { a: `2x${'<sup>'}2${'</sup>'}`, correct: false},
            { b: `-2x${'<sup>'}-2${'</sup>'}`, correct: false},
            { c: `1/4x${'<sup>'}2${'</sup>'}`, correct: true}
        ],
        correct: `1/4x${'<sup>'}2${'</sup>'}`
    },
    {
        question: "Redukto shprehjen - 2/3 * a + 5/6 * a - 1/6?",
        alternatives: [
            { a: "1/6 * a + 1/6", correct: true},
            { b: "-2/3 + 4/6 * a", correct: false},
            { c: "3/6 * a - 1/6", correct: false}
        ],
        correct: "1/6 * a + 1/6"
    },
    {
        question: `Thjeshto shprehjen 5${'<sup>'}2${'</sup>'} * 5${'<sup>'}5${'</sup>'}?`,
        alternatives: [
            { a: `5${'<sup>'}10${'</sup>'}`, correct: false},
            { b: `5${'<sup>'}7${'</sup>'}`, correct: true},
            { c: `5${'<sup>'}3${'</sup>'}`, correct: false}
        ],
        correct: `5${'<sup>'}7${'</sup>'} || 5${'<sup>'}2+5${'</sup>'} = 5${'<sup>'}7${'</sup>'}`
    },
    {
        question: `Reduktoni shprehjen p${'<sup>'}-3${'</sup>'} * p${'<sup>'}-4${'</sup>'}?`,
        alternatives: [
            { a: `p${'<sup>'}12${'</sup>'}`, correct: false},
            { b: `p${'<sup>'}7${'</sup>'}`, correct: false},
            { c: `p${'<sup>'}-7${'</sup>'}`, correct: true}
        ],
        correct: `p${'<sup>'}-7${'</sup>'}`
    },
    {
        question: "Redukto shprehjen d + 5d - 2d?",
        alternatives: [
            { a: "4d", correct: true},
            { b: "3d", correct: false},
            { c: "2d", correct: false}
        ],
        correct: "4d"
    },
    {
        question: "Me cilat nga keto shprehje eshte e barabarte shprehja 3*a*b?",
        alternatives: [
            { a: "b*3*a", correct: true},
            { b: "3a+b", correct: false},
            { c: "3b+a", correct: false}
        ],
        correct: "b*3*a"
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
                                   - Reduktoni shprehjen 3*b*8/6*a? ${"<strong>"} 4b/a ${"</strong>"}`;
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