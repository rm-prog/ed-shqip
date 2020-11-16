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
        letters: ["E", "A", "R", "I", "G", "O", "Y", "L", "P", "A", "L", "E", "M", "O", "N", "K"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "MONKEY",
                indexes: [12, 13, 14, 15, 11, 6],
                loopingVar: 6
            },
            {
                theWord: "GORILLA",
                indexes: [4, 5, 2, 3, 7, 10, 9],
                loopingVar: 7
            },
            {
                theWord: "APE",
                indexes: [0, 1, 8],
                loopingVar: 3
            }
        ]
    },
    {
        letters: ["M", "E", "R", "A", "A", "C", "H", "P", "O", "S", "H", "O", "T", "O", "T", "O"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "CAMERA",
                indexes: [5, 4, 0, 1, 2, 3],
                loopingVar: 6
            },
            {
                theWord: "PHOTO",
                indexes: [7, 6, 11, 14, 15],
                loopingVar: 5
            },
            {
                theWord: "SHOOT",
                indexes: [9, 10, 13, 8, 12],
                loopingVar: 5
            }
        ]
    },
    {
        letters: ["L", "A", "N", "D", "S", "I", "A", "N", "O", "P", "A", "L", "C", "E", "S", "M"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "ISLAND",
                indexes: [5, 4, 0, 1, 2, 3],
                loopingVar: 6
            },
            {
                theWord: "OCEAN",
                indexes: [8, 12, 13, 10, 7],
                loopingVar: 5
            },
            {
                theWord: "PALMS",
                indexes: [6, 9, 11, 14, 15],
                loopingVar: 5
            }
        ]
    },
    {
        letters: ["S", "U", "F", "I", "S", "R", "G", "N", "A", "D", "B", "R", "N", "O", "A", "D"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "SURFING",
                indexes: [0, 1, 5, 2, 3, 7, 6],
                loopingVar: 7
            },
            {
                theWord: "SAND",
                indexes: [4, 8, 12, 9],
                loopingVar: 4
            },
            {
                theWord: "BOARD",
                indexes: [10, 11, 13, 14, 15],
                loopingVar: 5
            }
        ]
    },
    {
        letters: ["R", "E", "B", "K", "T", "A", "P", "A", "P", "A", "E", "E", "R", "R", "O", "T"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "PARROT",
                indexes: [8, 9, 12, 13, 14, 15],
                loopingVar: 6
            },
            {
                theWord: "REPEAT",
                indexes: [0, 1, 6, 5, 10, 4],
                loopingVar: 6
            },
            {
                theWord: "BEAK",
                indexes: [2, 11, 7, 4]
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