
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
helpButton1.disabled = false;

startButton1.addEventListener("click", startGame);
submitButton1.addEventListener("click", submitWord);
helpButton1.addEventListener("click", needHelp);

let arrayIndex = 0;

let crushedCells = 0;

let helpsUsed = 0;

const wordsArray = [
    {
        letters: ["S", "U", "N", "F", "L", "O", "R", "E", "W"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "SUN",
                indexes: [0, 1, 2],
                loopingVar: 3
            },
            {
                theWord: "FLOWER",
                indexes: [3, 4, 5, 6, 7, 8],
                loopingVar: 6
            },
            {
                theWord: "SUNFLOWER",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["B", "U", "T", "R", "E", "T", "F", "L", "Y"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "FLY",
                indexes: [6, 7, 8],
                loopingVar: 3
            },
            {
                theWord: "BUTTER",
                indexes: [0, 1, 2, 3, 4, 5],
                loopingVar: 6
            },
            {
                theWord: "BUTTERFLY",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["B", "L", "U", "B", "Y", "E", "E", "R", "R"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "BLUE",
                indexes: [0, 1, 2, 5],
                loopingVar: 4
            },
            {
                theWord: "BLUEBERRY",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            },
            {
                theWord: "BERRY",
                indexes: [3, 4, 6, 7, 8],
                loopingVar: 5
            }
        ]
    },
    {
        letters: ["M", "L", "T", "O", "I", "H", "O", "N", "G"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "MOON",
                indexes: [0, 3, 6, 7],
                loopingVar: 4
            },
            {
                theWord: "LIGHT",
                indexes: [1, 4, 8, 5, 2],
                loopingVar: 5
            },
            {
                theWord: "MOONLIGHT",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["S", "L", "B", "C", "O", "U", "H", "O", "S"],
        numberOfWords: 2,
        correctWords:  [
            {
                theWord: "SCHOOL",
                indexes: [0, 3, 6, 7, 4, 1],
                loopingVar: 6
            },
            {
                theWord: "BUS",
                indexes: [2, 5, 8],
                loopingVar: 3
            }
        ]
    },
    {
        letters: ["B", "E", "A", "A", "C", "H", "S", "N", "D"],
        numberOfWords: 2,
        correctWords:  [
            {
                theWord: "SAND",
                indexes: [6, 3, 7, 8],
                loopingVar: 4
            },
            {
                theWord: "BEACH",
                indexes: [0, 1, 2, 4, 5],
                loopingVar: 5
            }
        ]
    },
    {
        letters: ["C", "M", "R", "L", "A", "O", "S", "S", "O"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "ROOM",
                indexes: [2, 5, 8, 1],
                loopingVar: 4
            },
            {
                theWord: "CLASS",
                indexes: [0, 3, 6, 7, 4],
                loopingVar: 5
            },
            {
                theWord: "CLASSROOM",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            }
        ]
    },
    {
        letters: ["A", "K", "E", "H", "S", "D", "H", "A", "N"],
        numberOfWords: 3,
        correctWords:  [
            {
                theWord: "HAND",
                indexes: [6, 7, 8, 5],
                loopingVar: 4
            },
            {
                theWord: "SHAKE",
                indexes: [4, 3, 0, 1, 2],
                loopingVar: 5
            },
            {
                theWord: "HANDSHAKE",
                indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                loopingVar: 9
            },
        ]
    },
    {
        letters: ["M", "U", "S", "H", "O", "T", "M", "E", "R"],
        numberOfWords: 2,
        correctWords:  [
            {
                theWord: "HOT",
                indexes: [3, 4, 5],
                loopingVar: 3
            },
            {
                theWord: "SUMMER",
                indexes: [2, 1, 0, 6, 7, 8],
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
            displayAnswer.innerHTML = "Bravo! Arritet t'i gjenit te gjitha fjalet." + "<br>" + `Ndihma te perdorura ${helpsUsed}`;
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


