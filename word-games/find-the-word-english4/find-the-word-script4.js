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
        letters: ["S", "E", "E", "D", "T", "R", "E", "E", "W", "O", "R", "G", "L", "E", "A", "F"],
        numberOfWords: 4,
        correctWords:  [
            {
                theWord: "SEED",
                indexes: [0, 1, 2, 3],
                loopingVar: 4
            },
            {
                theWord: "TREE",
                indexes: [4, 5, 6, 7],
                loopingVar: 4
            },
            {
                theWord: "GROW",
                indexes: [8, 9, 10, 11],
                loopingVar: 4
            },
            {
                theWord: "LEAF",
                indexes: [12, 13, 14, 15],
                loopingVar: 4
            }
        ]
    },
    {
        letters: ["H", "L", "S", "F", "O", "O", "V", "E", "P", "C", "E", "A", "E", "K", "I", "R"],
        numberOfWords: 4,
        correctWords:  [
            {
                theWord: "HOPE",
                indexes: [0, 4, 8, 12],
                loopingVar: 4
            },
            {
                theWord: "LOVE",
                indexes: [1, 5, 6, 10],
                loopingVar: 4
            },
            {
                theWord: "FEAR",
                indexes: [3, 7, 11, 15],
                loopingVar: 4
            },
            {
                theWord: "SICK",
                indexes: [2, 14, 9, 13],
                loopingVar: 4
            }
        ]
    },
    {
        letters: ["S", "O", "D", "A", "K", "L", "I", "M", "J", "U", "I", "C", "A", "E", "T", "E"],
        numberOfWords: 4,
        correctWords:  [
            {
                theWord: "SODA",
                indexes: [0, 1, 2, 3],
                loopingVar: 4
            },
            {
                theWord: "MILK",
                indexes: [4, 5, 6, 7],
                loopingVar: 4
            },
            {
                theWord: "JUICE",
                indexes: [8, 9, 10, 11, 15],
                loopingVar: 5
            },
            {
                theWord: "TEA",
                indexes: [14, 13, 12],
                loopingVar: 3
            }
        ]
    },
    {
        letters: ["F", "A", "S", "S", "D", "R", "T", "L", "R", "U", "N", "O", "I", "V", "E", "W"],
        numberOfWords: 4,
        correctWords:  [
            {
                theWord: "FAST",
                indexes: [0, 1, 2, 6],
                loopingVar: 4
            },
            {
                theWord: "SLOW",
                indexes: [3, 7, 11, 15],
                loopingVar: 4
            },
            {
                theWord: "DRIVE",
                indexes: [4, 5, 12, 13, 14],
                loopingVar: 5
            },
            {
                theWord: "RUN",
                indexes: [8, 9, 10],
                loopingVar: 3
            }
        ]
    },
    {
        letters: ["H", "S", "I", "F", "S", "E", "A", "R", "R", "I", "V", "E", "C", "R", "A", "B"],
        numberOfWords: 4,
        correctWords:  [
            {
                theWord: "FISH",
                indexes: [0, 1, 2, 3],
                loopingVar: 4
            },
            {
                theWord: "SEA",
                indexes: [4, 5, 6],
                loopingVar: 3
            },
            {
                theWord: "RIVER",
                indexes: [8, 9, 10, 11, 7],
                loopingVar: 5
            },
            {
                theWord: "CRAB",
                indexes: [12, 13, 14, 15],
                loopingVar: 4
            }
        ]
    },
    {
        letters: ["U", "A", "R", "S", "M", "L", "A", "N", "B", "L", "I", "O", "R", "E", "N", "W"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "RAIN",
                indexes: [2, 6, 10, 14],
                loopingVar: 4
            },
            {
                theWord: "SNOW",
                indexes: [3, 7, 11, 15],
                loopingVar: 4
            },
            {
                theWord: "UMBRELLA",
                indexes: [0, 1, 4, 5, 8, 9, 12, 13],
                loopingVar: 8
            }
        ]
    },
    {
        letters: ["P", "I", "L", "O", "S", "K", "Y", "T", "A", "I", "R", "P", "E", "A", "N", "L"],
        numberOfWords: 5,
        correctWords:  [
            {
                theWord: "PILOT",
                indexes: [0, 1, 2, 3, 7],
                loopingVar: 5
            },
            {
                theWord: "SKY",
                indexes: [4, 5, 6],
                loopingVar: 3
            },
            {
                theWord: "AIR",
                indexes: [8, 9, 10],
                loopingVar: 3
            },
            {
                theWord: "PLANE",
                indexes: [11, 15, 14, 13, 12],
                loopingVar: 5
            },
            {
                theWord: "AIRPLANE",
                indexes: [8, 9, 10, 11, 12, 13, 14, 15],
                loopingVar: 8
            }
        ]
    },
    {
        letters: ["P", "Y", "E", "L", "I", "P", "W", "L", "N", "U", "R", "O", "K", "E", "L", "P"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "PINK",
                indexes: [0, 4, 8, 12],
                loopingVar: 4
            },
            {
                theWord: "YELLOW",
                indexes: [1, 2, 3, 7, 11, 6],
                loopingVar: 6
            },
            {
                theWord: "PURPLE",
                indexes: [5, 9, 10, 15, 14, 13],
                loopingVar: 6   
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