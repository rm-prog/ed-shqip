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
        letters: ["L", "I", "F", "G", "E", "R", "U", "A", "D"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "LIFE",
                indexes: [0, 1, 2, 4],
                loopingVar: 4
            },
            {
                theWord: "GUARD",
                indexes: [3, 5, 6, 7, 8],
                loopingVar: 5
            },
            {
                theWord: "LIFEGUARD",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["B", "L", "I", "U", "T", "T", "G", "E", "L"],
        numberOfWords: 2,
        correctWords:  [
            {
                theWord: "BUG",
                indexes: [0, 3, 6],
                loopingVar: 3
            },
            {
                theWord: "LITTLE",
                indexes: [1, 2, 4, 7, 8, 5],
                loopingVar: 6
            }
        ]
    },
    {
        letters: ["S", "H", "T", "O", "N", "G", "M", "E", "I"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "SOME",
                indexes: [0, 3, 6, 7],
                loopingVar: 4
            },
            {
                theWord: "THING",
                indexes: [2, 1, 8, 4, 5],
                loopingVar: 5
            },
            {
                theWord: "SOMETHING",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["N", "U", "M", "O", "U", "T", "R", "E", "B"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "OUT",
                indexes: [3, 4, 5],
                loopingVar: 3
            },
            {
                theWord: "NUMBER",
                indexes: [0, 1, 2, 6, 7, 8],
                loopingVar: 6
            },
            {
                theWord: "OUTNUMBER",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["O", "N", "S", "W", "B", "A", "D", "R", "O"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "SNOW",
                indexes: [0, 1, 2, 3],
                loopingVar: 4
            },
            {
                theWord: "BOARD",
                indexes: [4, 5, 6, 7, 8],
                loopingVar: 5
            },
            {
                theWord: "SNOWBOARD",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["T", "A", "R", "S", "L", "G", "T", "H", "I"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "STAR",
                indexes: [0, 1, 2, 3],
                loopingVar: 4
            },
            {
                theWord: "LIGHT",
                indexes: [4, 5, 6, 7, 8],
                loopingVar: 5
            },
            {
                theWord: "STARLIGHT",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["S", "T", "O", "L", "E", "N", "L", "A", "W"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "WALL",
                indexes: [8, 7, 6, 3],
                loopingVar: 4
            },
            {
                theWord: "STONE",
                indexes: [0, 1, 2, 4, 5],
                loopingVar: 5
            },
            {
                theWord: "STONEWALL",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["F", "A", "E", "H", "R", "M", "O", "U", "S"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "FARM",
                indexes: [0, 1, 4, 5],
                loopingVar: 4
            },
            {
                theWord: "HOUSE",
                indexes: [2, 3, 6, 7, 8],
                loopingVar: 5
            },
            {
                theWord: "FARMHOUSE",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["F", "I", "P", "G", "N", "I", "E", "R", "T"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "TIP",
                indexes: [8, 5, 2],
                loopingVar: 3
            },
            {
                theWord: "FINGER",
                indexes: [0, 1, 3, 4, 6, 7],
                loopingVar: 6
            },
            {
                theWord: "FINGERTIP",
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