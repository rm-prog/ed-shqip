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
        question: "Cfare lloje qeverisje kishte Rusia ne fillim te shekullit XX?",
        alternatives: [
            { a: "Monarki absolute", correct: true},
            { b: "Republike Demokratike", correct: false},
            { c: "Diktature proletariate", correct: false}
        ],
        correct: "Monarki absolute"
    },
    {
        question: "Ne cilin vit zevendesoj Stalini Leninin?",
        alternatives: [
            { a: "1925", correct: false},
            { b: "1924", correct: true},
            { c: "1926", correct: false}
        ],
        correct: "1924 - ne janar 1924 pas vdekjes se Leninit"
    },
    {
        question: "Ne cilen date shpalli Kongresi i Sovjeteve sistemin njepartiak te qeverisjes?",
        alternatives: [
            { a: "21 janar 1919", correct: false},
            { b: "22 janar 1918", correct: false},
            { c: "21 janar 1918", correct: true}
        ],
        correct: "21 janar 1918"
    },
    {
        question: "Kur u mbajten zgjedhjet parlamentare ne te cilat fituan fashistet ne Itali?",
        alternatives: [
            { a: "Prill 1924", correct: true},
            { b: "Maj 1924", correct: false},
            { c: "Prill 1925", correct: false}
        ],
        correct: "Prill 1924 - fashistet fituan shumicen e vendeve ne parlament"
    },
    {
        question: "Cilin shtet sulmoi ushtria italiane ne tetor te vitit 1935?",
        alternatives: [
            { a: "Libine", correct: false},
            { b: "Etiopine", correct: true},
            { c: "Shqiperine", correct: false}
        ],
        correct: "Etiopine - ne tetor 1935 ushtria italiane sulmoi Etiopine te cilen arriti ta pushtonte 8 muaj pas luftimeve te ashpra"
    },
    {
        question: "Kur shpalli Gjermania republiken, e cila u  njoh si Republika e Vajmarit?",
        alternatives: [
            { a: "Nentor 1919", correct: false},
            { b: "Tetor 1918", correct: false},
            { c: "Nentor 1918", correct: true}
        ],
        correct: "Nentor 1918"
    },
    {
        question: "Kur u shpall Hitleri kancelar?",
        alternatives: [
            { a: "30 janar 1933", correct: true},
            { b: "31 janar 1933", correct: false},
            { c: "30 janar 1934", correct: false}
        ],
        correct: "30 janar 1933"
    },
    {
        question: "Kush e zuri vendin e presidentit te Republikes se Vajmarit Fridrih Ebert pas vdekjes se tij?",
        alternatives: [
            { a: "Hitleri", correct: false},
            { b: "Hidenburgu", correct: true},
            { c: "Adenauer", correct: false}
        ],
        correct: "Hidenburgu - pas vdekjes se Ebertit (1925) vendin e tij e zuri ish-kryekomandati i ushtrise se Kajzerit, Hindeburgu"
    },
    {
        question: "Ne sa pushtete ndahej sistemi politik amerikan?",
        alternatives: [
            { a: "2", correct: false},
            { b: "4", correct: false},
            { c: "3", correct: true}
        ],
        correct: "3 - pushtet ekzekutiv, legjislativ, gjyqesor"
    },
    {
        question: "Ne cilin vit u zgjodh Franklin Ruzvelt president per here te pare",
        alternatives: [
            { a: "1932", correct: true},
            { b: "1933", correct: false},
            { c: "1934", correct: false}
        ],
        correct: "1932 - me 7 milion me shume vota se rivali i tij, Huver"
    },
    {
        question: "Ne cilin vit fituan grate amerikane te drejten e votes?",
        alternatives: [
            { a: "1919", correct: false},
            { b: "1920", correct: true},
            { c: "1921", correct: false}
        ],
        correct: "1920"
    },
    {
        question: "Cili kryesonte qeverine e Britanise ne vitin 1919?",
        alternatives: [
            { a: "Llojd Xhorxh", correct: true},
            { b: "Winston Churchill", correct: false},
            { c: "Harold MekMillen", correct: false}
        ],
        correct: "Llojd Xhorxh"
    },
    {
        question: "Ne cilin vit e njohu Britania, Irlanden si shtet te pavarur?",
        alternatives: [
            { a: "1920", correct: false},
            { b: "1921", correct: true},
            { c: "1922", correct: false}
        ],
        correct: "1921"
    },
    {
        question: "Cili sistem politik qeveriste Francen ne periudhen midis dy lufterave?",
        alternatives: [
            { a: "Monarki absolute", correct: false},
            { b: "Republike konfederale", correct: false},
            { c: "Republike parlamentare", correct: true}
        ],
        correct: "Republike parlamentare"
    },
    {
        question: "Kush u vendos ne krye te qeverise se Frances ne vitin 1936?",
        alternatives: [
            { a: "Leon Blum", correct: true},
            { b: "Lavali", correct: false},
            { c: "Sharl de Gol", correct: false}
        ],
        correct: "Leon Blum - Leon Blum u vendos ne krye te qeverise pas fitores se Frontit Popullor ne zgjedhjet parlamentare ne vitin 1936"
    },
    {
        question: "Cili ishte presidenti i pari i republikes Turke?",
        alternatives: [
            { a: "Cemal Gyrsek", correct: false},
            { b: "Mustafa Kemal Ataturk", correct: true},
            { c: "Abdulmexhiti i dyte", correct: false}
        ],
        correct: "Mustafa Kemal Ataturk - mbas fitimit te luftes clirimtare ne Anadoll ne drejtim te Ataturkut u shpall Republika e Turqise me 29 tetor 1923 me president Mustafa Kemal Ataturkun"
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
                                   - Cili drejtues propozoj krijimin e Lidhjes se Kombeve? ${"<strong>"} Uillson ${"</strong>"}`;
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