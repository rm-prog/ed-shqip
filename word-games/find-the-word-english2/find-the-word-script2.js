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
        letters: ["G", "U", "N", "P", "W", "R", "O", "E", "D"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "GUN",
                indexes: [0, 1, 2],
                loopingVar: 3
            },
            {
                theWord: "POWDER",
                indexes: [3, 4, 5, 6, 7, 8],
                loopingVar: 6
            },
            {
                theWord: "GUNPOWDER",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["B", "E", "G", "U", "L", "U", "B", "B", "M"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "GUM",
                indexes: [2, 5, 8],
                loopingVar: 3
            },
            {
                theWord: "BUBBLE",
                indexes: [0, 3, 6, 7, 4, 1],
                loopingVar: 6
            },
            {
                theWord: "BUBBLEGUM",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["S", "F", "H", "H", "L", "S", "E", "L", "I"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "SHELL",
                indexes: [0, 3, 6, 7, 4],
                loopingVar: 5
            },
            {
                theWord: "FISH",
                indexes: [1, 8, 5, 2],
                loopingVar: 4
            },
            {
                theWord: "SHELLFISH",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["F", "I", "R", "S", "K", "E", "R", "O", "W"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "FIRE",
                indexes: [0, 1, 2, 5],
                loopingVar: 4
            },
            {
                theWord: "WORKS",
                indexes: [8, 7, 6, 3, 4],
                loopingVar: 5
            },
            {
                theWord: "FIREWORKS",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["W", "A", "R", "O", "T", "E", "S", "D", "A"],
        numberOfWords: 2,
        correctWords:  [
            {
                theWord: "SODA",
                indexes: [6, 3, 7, 8],
                loopingVar: 4
            },
            {
                theWord: "WATER",
                indexes: [0, 1, 2, 4, 5],
                loopingVar: 5
            }
        ]
    },
    {
        letters: ["G", "L", "S", "H", "R", "S", "O", "U", "A"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "HOUR",
                indexes: [3, 6, 7, 4],
                loopingVar: 4
            },
            {
                theWord: "GLASS",
                indexes: [0, 1, 2, 5, 8],
                loopingVar: 5
            },
            {
                theWord: "HOURGLASS",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["B", "O", "O", "S", "T", "O", "Y", "R", "K"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "BOOK",
                indexes: [0, 1, 2, 8],
                loopingVar: 4
            },
            {
                theWord: "STORY",
                indexes: [3, 4, 5, 6, 7],
                loopingVar: 5
            },
            {
                theWord: "STORYBOOK",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["S", "P", "A", "I", "E", "C", "P", "H", "S"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "SHIP",
                indexes: [8, 7, 3, 6],
                loopingVar: 4
            },
            {
                theWord: "SPACE",
                indexes: [0, 1, 2, 5, 4],
                loopingVar: 5
            },
            {
                theWord: "SPACESHIP",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["S", "U", "P", "S", "A", "E", "T", "R", "R"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "STAR",
                indexes: [3, 6, 4, 7],
                loopingVar: 4
            },
            {
                theWord: "SUPER",
                indexes: [0, 1, 2, 3, 4],
                loopingVar: 5
            },
            {
                theWord: "SUPERSTAR",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
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
    for(let i=0; i<9; i++){
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

    if(crushedCells >= 9){
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
            for(let i=0; i<9; i++){
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


