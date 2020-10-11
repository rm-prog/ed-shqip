const centerDiv = document.getElementById("center-div");
const displayAnswer = document.getElementById("display-answer");
const warningSpan = document.getElementById("warning-span");
const startButton1 = document.getElementById("startButton");
const wordContainer = document.getElementById("words-container");
const tableCells = document.getElementsByTagName("td");
const labelForInput1 = document.getElementById("labelForInput");
const answerInput = document.getElementById("answer-input");
const submitButton1 = document.getElementById("submitButton");
const helpButton1 = document.getElementById("helpButton");


answerInput.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        submitButton1.click();
    }
})

submitButton1.disabled = true;
helpButton1.disabled = true;

startButton1.addEventListener("click", startGame);
submitButton1.addEventListener("click", submitWord);
helpButton1.addEventListener("click", needHelp);

let arrayIndex = 0;

let crushedCells = 0;

let helpsUsed = 0;

const wordsArray = [
    {
        letters: ["P", "V", "I", "O", "I", "A", "N", "O", "F", "N", "I", "L", "L", "U", "T", "E"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "PIANO",
                indexes: [0, 4, 5, 6, 7],
                loopingVar: 5
            },
            {
                theWord: "VIOLIN",
                indexes: [1, 2, 3, 11, 10, 9],
                loopingVar: 6
            },
            {
                theWord: "FLUTE",
                indexes: [8, 12, 13, 14, 15],
                loopingVar: 5
            }
        ]
    },
    {
        letters: ["G", "B", "E", "L", "E", "L", "Y", "L", "K", "C", "A", "B", "N", "E", "C", "K"],
        numberOfWords: 4,
        correctWords:  [
            {
                theWord: "BACK",
                indexes: [8, 9, 10, 11],
                loopingVar: 4
            },
            {
                theWord: "NECK",
                indexes: [12, 13, 14, 15],
                loopingVar: 4
            },
            {
                theWord: "LEG",
                indexes: [5, 4, 0],
                loopingVar: 3
            },
            {
                theWord: "BELLY",
                indexes: [1, 2, 3, 7, 6],
                loopingVar: 5
            }
        ]
    },
    {
        letters: ["T", "T", "A", "R", "R", "I", "X", "A", "A", "I", "N", "C", "B", "I", "K", "E"],
        numberOfWords: 4,
        correctWords:  [
            {
                theWord: "TRAIN",
                indexes: [0, 4, 8, 9, 10],
                loopingVar: 5
            },
            {
                theWord: "TAXI",
                indexes: [1, 2, 6, 5],
                loopingVar: 4
            },
            {
                theWord: "BIKE",
                indexes: [12, 13, 14, 15],
                loopingVar: 4
            },
            {
                theWord: "CAR",
                indexes: [3, 7, 11],
                loopingVar: 3
            }
        ]
    },
    {
        letters: ["K", "H", "A", "N", "N", "E", "E", "D", "S", "H", "O", "U", "R", "E", "D", "L"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "HAND",
                indexes: [1, 2, 3, 7],
                loopingVar: 4
            },
            {
                theWord: "KNEE",
                indexes: [0, 4, 5, 6],
                loopingVar: 4
            },
            {
                theWord: "SHOULDER",
                indexes: [8, 9, 10, 11, 15, 14, 13, 12],
                loopingVar: 8
            }
        ]
    },
    {
        letters: ["M", "A", "N", "K", "O", "B", "V", "A", "N", "E", "Y", "S", "S", "G", "N", "I"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "BANK",
                indexes: [5, 1, 2, 3],
                loopingVar: 4
            },
            {
                theWord: "MONEY",
                indexes: [0, 4, 8, 9, 10],
                loopingVar: 5
            },
            {
                theWord: "SAVINGS",
                indexes: [11, 7, 6, 15, 14, 13, 12],
                loopingVar: 7
            }
        ]
    },
    {
        letters: ["V", "A", "V", "A", "O", "M", "G", "L", "L", "A", "A", "M", "C", "A", "N", "O"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "LAVA",
                indexes: [7, 3, 2, 1],
                loopingVar: 4
            },
            {
                theWord: "VOLCANO",
                indexes: [0, 4, 8, 12, 13, 14, 15],
                loopingVar: 7
            },
            {
                theWord: "MAGMA",
                indexes: [5, 9, 6, 11, 10],
                loopingVar: 5
            }
        ]
    },
    {
        letters: ["L", "E", "O", "S", "O", "W", "A", "P", "T", "O", "O", "P", "S", "H", "A", "M"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "SOAP",
                indexes: [3, 2, 6, 7],
                loopingVar: 4
            },
            {
                theWord: "SHAMPOO",
                indexes: [12, 13, 14, 15, 11, 10, 9],
                loopingVar: 7
            },
            {
                theWord: "TOWEL",
                indexes: [8, 4, 5, 1, 0],
                loopingVar: 5
            }
        ]
    }
];

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

shuffle(wordsArray);

function startGame(){
    displayAnswer.removeChild(startButton1);
    displayAnswer.removeChild(warningSpan);
    submitButton1.disabled = false;
    helpButton1.disabled = false;
    for(let i=0; i<16; i++){
        tableCells[i].innerHTML = wordsArray[0].letters[i];
    }
    answerInput.value = "";
}

function submitWord(){
    for(let i=0; i<wordsArray[arrayIndex].numberOfWords; i++){
        if(answerInput.value.toUpperCase() === wordsArray[arrayIndex].correctWords[i].theWord){
            displayAnswer.innerHTML = "Sakte!";
            for(let j=0; j<wordsArray[arrayIndex].correctWords[i].loopingVar; j++){
                if(tableCells[wordsArray[arrayIndex].correctWords[i].indexes[j]].value === "1"){
                    break;
                }
                tableCells[wordsArray[arrayIndex].correctWords[i].indexes[j]].style.backgroundColor = "gray";
                tableCells[wordsArray[arrayIndex].correctWords[i].indexes[j]].value = "1";
                crushedCells++;
            }
            break;
        } else if(i === wordsArray[arrayIndex].numberOfWords - 1){
            displayAnswer.innerHTML = `Gabim! ${'<br>'}Fjala qe ju sapo shkruajtet nuk ekziston, ose nuk eshte ajo qe po ju kerkojme. ${'<br>'}Provoni perseri`;
            break;
        } else{
            continue;
        }
    }

    answerInput.value = "";

    if(crushedCells >= 16){
        displayAnswer.innerHTML = "Sakte!";
        arrayIndex++;
        if(wordsArray[arrayIndex] === undefined){
            centerDiv.removeChild(wordContainer);
            centerDiv.removeChild(submitButton1);
            centerDiv.removeChild(answerInput);
            centerDiv.removeChild(labelForInput1);
            centerDiv.removeChild(helpButton1);
            displayAnswer.innerHTML = "Bravo! Arritet t'i gjenit te gjitha fjalet." + "<br>" + `Ndihma te perdorura: ${helpsUsed}`;
        } else{
            for(let i=0; i<16; i++){
                tableCells[i].style.backgroundColor = "white";
                tableCells[i].innerHTML = wordsArray[arrayIndex].letters[i];
                tableCells[i].value = "0";
            }
            helpButton1.disabled = false;
        }
        crushedCells = 0;
    }
}

function needHelp(){
    answerInput.value = wordsArray[arrayIndex].correctWords[Math.floor(Math.random() * (wordsArray[arrayIndex].numberOfWords - 1))].theWord;
    helpsUsed++;
    helpButton1.disabled = true;
}