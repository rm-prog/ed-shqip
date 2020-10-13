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
        letters: ["R", "B", "E", "M", "U", "H", "O", "O", "S", "B", "R", "G", "S", "P", "O", "N"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "BRUSH",
                indexes: [1, 0, 4, 8, 5],
                loopingVar: 5
            },
            {
                theWord: "SPONGE",
                indexes: [12, 13, 14, 15, 11, 2],
                loopingVar: 6
            },
            {
                theWord: "BROOM",
                indexes: [9, 10, 6, 7, 3],
                loopingVar: 5
            }
        ]
    },
    {
        letters: ["C", "R", "H", "S", "L", "O", "I", "T", "T", "S", "E", "S", "P", "A", "N", "T"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "SHIRT",
                indexes: [3, 2, 6, 1, 7],
                loopingVar: 5
            },
            {
                theWord: "PANTS",
                indexes: [12, 13, 14, 15, 11],
                loopingVar: 5
            },
            {
                theWord: "CLOSET",
                indexes: [0, 4, 5, 9, 10, 8],
                loopingVar: 6
            }
        ]
    },
    {
        letters: ["J", "U", "M", "G", "B", "P", "S", "N", "O", "N", "P", "I", "U", "C", "E", "R"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "JUMP",
                indexes: [0, 1, 2, 5],
                loopingVar: 4
            },
            {
                theWord: "BOUNCE",
                indexes: [4, 8, 12, 9, 13, 14],
                loopingVar: 6
            },
            {
                theWord: "SPRING",
                indexes: [3, 6, 7, 10, 11, 15],
                loopingVar: 6
            }
        ]
    },
    {
        letters: ["S", "I", "B", "R", "G", "O", "L", "D", "L", "V", "E", "O", "E", "Z", "N", "R"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "GOLD",
                indexes: [4, 5, 6, 7],
                loopingVar: 4
            },
            {
                theWord: "SILVER",
                indexes: [0, 1, 8, 9, 10, 15],
                loopingVar: 6
            },
            {
                theWord: "BRONZE",
                indexes: [2, 3, 11, 14, 13, 12],
                loopingVar: 6
            }
        ]
    },
    {
        letters: ["L", "I", "G", "H", "T", "I", "N", "T", "H", "N", "R", "E", "G", "U", "N", "D"],
        numberOfWords: 2,
        correctWords:  [
            {
                theWord: "THUNDER",
                indexes: [4, 8, 13, 14, 15, 11, 10],
                loopingVar: 7
            },
            {
                theWord: "LIGHTNING",
                indexes: [0, 1, 2, 3, 7, 6, 5, 9, 12],
                loopingVar: 9
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
                indexes: [8, 12, 13, 6, 7],
                loopingVar: 5
            },
            {
                theWord: "PALMS",
                indexes: [9, 10, 11, 15, 14],
                loopingVar: 5
            }
        ]
    },
    {
        letters: ["C", "O", "S", "Y", "F", "M", "O", "F", "O", "R", "D", "T", "T", "O", "W", "N"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "COMFORT",
                indexes: [0, 1, 5, 4, 8, 9, 12],
                loopingVar: 7
            },
            {
                theWord: "SOFT",
                indexes: [2, 6, 7, 11],
                loopingVar: 4
            },
            {
                theWord: "DOWNY",
                indexes: [10, 13, 14, 15, 3],
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