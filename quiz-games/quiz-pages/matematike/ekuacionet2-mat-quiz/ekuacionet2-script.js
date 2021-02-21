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
        question: `Gjeni vleren e x-it. ${'<br>'}4/x-1 - 2/x-3 = 2/x+3`,
        alternatives: [
            { a: "8", correct: false},
            { b: "9", correct: true},
            { c: "7", correct: false}
        ],
        correct: "| x=9"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}3/x+1 + 1/x-3 = 4/x-1`,
        alternatives: [
            { a: "3", correct: false}, 
            { b: "4", correct: false},
            { c: "5", correct: true}
        ],
        correct: "| x=5"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'}4/x+1 - 3/x+2 = 2/2x-1`,
        alternatives: [
            { a: "5", correct: false}, 
            { b: "4", correct: false},
            { c: "3", correct: true}
        ],
        correct: "| x=3"
    },
    {
        question: `Gjeni vleren e y-it. ${'<br>'}(y-7)${'<sup>'}2${'</sup>'} = (y+5)${'<sup>'}2${'</sup>'}`,
        alternatives: [
            { a: "1", correct: true}, 
            { b: "3", correct: false},
            { c: "2", correct: false}
        ],
        correct: "| y=1"
    },
    {
        question: `Gjeni vleren e y-it. ${'<br>'}6 - (3y-9) = -2(5-y)`,
        alternatives: [
            { a: "4", correct: false}, 
            { b: "5", correct: true},
            { c: "6", correct: false}
        ],
        correct: "| y=5"
    },
    {
        question: `Cili nga keto ekuacione ka numer infinit zgjidhjesh`,
        alternatives: [
            { a: "46x + 23 = 46x - 23", correct: false}, 
            { b: "-46x - 23 = 46x + 23", correct: false},
            { c: "46x + 23 = 46x + 23", correct: true}
        ],
        correct: "46x + 23 = 46x + 23"
    },
    {
        question: `Sa zgjidhje ka ky ekuacion. ${"<br>"}5x+8-7x = -4x+1`,
        alternatives: [
            { a: "Vetem nje zgjidhje", correct: true}, 
            { b: "Nuk ka zgjidhje", correct: false},
            { c: "Numer i pafundem zgjidhjesh", correct: false}
        ],
        correct: "Vetem nje zgjidhje "
    },
    {
        question: `Gjeni vleren e y-it. ${'<br>'}py + qy = -4y + 8`,
        alternatives: [
            { a: "8/pq+4", correct: false}, 
            { b: "8/p+q+4", correct: true},
            { c: "8/p+q-4", correct: false}
        ],
        correct: "| y = 8/p+q+4"
    },
    {
        question: `Sa zgjidhje ka ky ekuacion ${'<br>'} 9z-6+7z = 16z-6`,
        alternatives: [
            { a: "Nuk ka zgjidhje", correct: false}, 
            { b: "Vetem nje zgjidhje", correct: false},
            { c: "Numer i pafundem zgjidhjesh", correct: true}
        ],
        correct: "Numer i pafundem zgjidhjesh"
    },
    {
        question: `Cili nga ekuacionet e meposhtme nuk ka zgjidhje?`,
        alternatives: [
            { a: "45x-45 = -15x+75", correct: false}, 
            { b: "15x-45 = 15x+75", correct: true},
            { c: "-45x-45 = -75x+75", correct: false}
        ],
        correct: "| 15x-45 = 15x+75"
    },
    {
        question: `Gjeni vleren e x-it. ${'<br>'} (x+3)(x+4) = (x+7)(x-2)`,
        alternatives: [
            { a: "11", correct: false}, 
            { b: "13", correct: false},
            { c: "-13", correct: true}
        ],
        correct: "| x = -13"
    },
    {
        question: `Gjeni vleren e z. ${'<br>'} 3/z-1 = 9/2z-1`,
        alternatives: [
            { a: "z = 2", correct: true}, 
            { b: "z = 3", correct: false},
            { c: "z = 3,5", correct: false}
        ],
        correct: "| z = 2"
    },
    {
        question: `Gjeni vleren e h. ${'<br>'} 20-4h = 10-2h`,
        alternatives: [
            { a: "4", correct: false}, 
            { b: "5", correct: true},
            { c: "6", correct: false}
        ],
        correct: "| h = 5"
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
                                   - Gjeni vleren e x-it. 5/x+1 - 2/x+2 = 3/x+3 ${"<strong>"} | x= -2,25 ${"</strong>"}`;
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