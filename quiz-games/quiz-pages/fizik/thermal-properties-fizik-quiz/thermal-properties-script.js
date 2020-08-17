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
        question: "Cfare na tregon termometri?",
        alternatives: [
            { a: "Energjine kinetike mesatare te objektit", correct: true},
            { b: "Energjine e brendshem te objektit", correct: false},
            { c: "Energjine elektrike", correct: false}
        ],
        correct: "Energji kinetike mesatare te objektit"
    },
    {
        question: "Cfare ndodh me nje trup kur ai ftohet?",
        alternatives: [
            { a: "Bymehet", correct: false},
            { b: "Tkurret", correct: true},
            { c: "Nuk ndryshon", correct: false}
        ],
        correct: "Tkurret"
    },
    {
        question: "Cilat trupa bymehen me shpejt?",
        alternatives: [
            { a: "Trupat e ngurte", correct: false},
            { b: "Trupat e lenge", correct: false},
            { c: "Trupat e gazte", correct: true}
        ],
        correct: "Trupat e gazte"
    },
    {
        question: "Energjia e brendshme e nje substance ulet kur ...?",
        alternatives: [
            { a: "Temperatura e saj ulet", correct: true},
            { b: "Temperatura e saj rritet", correct: false},
            { c: "po thith nxehtesi", correct: false}
        ],
        correct: "Temperatura e saj ulet"
    },
    {
        question: "Nje trup me kapacitet te ulet termik ...?",
        alternatives: [
            { a: "Nuk nxehen shpejt", correct: false},
            { b: "Nxehet shpejte", correct: true},
            { c: "Nuk nxehet fare", correct: false}
        ],
        correct: "Nxehet shpejte - sepse nevojitet me pak energji per ta ngrohur ate"
    },
    {
        question: "Cila eshte formula per energjine qe nevojitet per ngrohur nje trup me nje temperature te caktuar?",
        alternatives: [
            { a: "mc / (t2-t1)", correct: false},
            { b: "m + c * (t2-t1)", correct: false},
            { c: "mc * (t2-t1)", correct: true}
        ],
        correct: "mc * (t2-t1)"
    },
    {
        question: "Cfare eshte kapaciteti termik specifik?",
        alternatives: [
            { a: "Sasia e energjise qe nevojitet per te ngritur me nje grade temperaturen e nje kilogrami te asaj substance", correct: true},
            { b: "Temperatura maksimale e mundshme e nje objekti", correct: false},
            { c: "Nxehtesine e nje trupi", correct: false}
        ],
        correct: "Sasia e energjise qe nevojitet per te ngritur me nje grade temperaturen e nje kilogrami te asaj substance"
    },
    {
        question: "Kapaciteti termik i celikut eshte 420J/(kg grade C). Sa energji duhet per te ngritur me 20 grade C temperaturen e nje blloku 1kg prej celiku?",
        alternatives: [
            { a: "840J", correct: false},
            { b: "8400J", correct: true},
            { c: "4200J", correct: false}
        ],
        correct: "8400J || E=mc*(t2-t1) || E = 1kg * 420J/(kg grade C) * 20 grade C = 8400J"
    },
    {
        question: "Kapaciteti termik i aluminit eshte 910J/(kg grade C). Nje bllok alumini me mase 0.5kg, ka temperature 16 grade C dhe merr nxehtesi Q=13350J. Gjeni temperaturen perfundimatare te aluminit.",
        alternatives: [
            { a: "44 grade C", correct: false},
            { b: "29,3 grade C", correct: false},
            { c: "45,3 grade C", correct: true}
        ],
        correct: "45,3 grade C || Q = mc*(t2-t1) || t2 = Q / mc + t1 || t2 = 13350J / 0.5kg * 910J/(kg grade C) + 16 grade C = 45,3 grade C"
    },
    {
        question: "Cila eshte formula e nxehtesise se fshehte specifike?",
        alternatives: [
            { a: "L = E/m", correct: true},
            { b: "L = E*m", correct: false},
            { c: "L = E+m", correct: false}
        ],
        correct: "L = E/m"
    },
    {
        question: "Nje tenxhere permban 0.8 kg uje ne 100 grade C. Sa energji duhet t'i japim qe i gjithe uji te avulloje dhe tenxherja te mbetet e thate? Nxehtesia e fshehte specifike e avullimit te ujit eshte 330kJ/kg",
        alternatives: [
            { a: "264kJ", correct: true},
            { b: "264J", correct: false},
            { c: "80kJ", correct: false}
        ],
        correct: "264kJ || E = mL || E = 0.8kg * 330kJ = 264 kJ"
    },
    {
        question: "Per te kthyer 2g uje ne 100 grade C, duhen 4500J. Llogaritni nxehtesine e fshehte specifike te avullimit te ujit.",
        alternatives: [
            { a: "2500 J/kg", correct: false},
            { b: "2 250 000 J/kg", correct: true},
            { c: "9000 J/kg", correct: false}
        ],
        correct: "2 250 000 J/kg || L = E/m || L = 4500J / 0.002kg = 2 250 000 J/kg"
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
                                   - Cfare eshte energjia e brendshme? ${"<strong>"} Shuma e energjise e te gjithe grimcave te nje objekti${"</strong>"}`;
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