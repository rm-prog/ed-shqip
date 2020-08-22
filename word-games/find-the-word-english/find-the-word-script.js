
const centerDiv = document.getElementById("center-div");
const displayAnswer = document.getElementById("display-answer");
const startButton1 = document.getElementById("startButton");
const wordContainer = document.getElementById("words-container");
const tableCells = document.getElementsByTagName("td");
const labelForInput1 = document.getElementById("labelForInput");
const answerInput = document.getElementById("answer-input");
const submitButton1 = document.getElementById("submitButton");

answerInput.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        submitButton1.click();
    }
})

submitButton1.disabled = true;

startButton1.addEventListener("click", startGame);
submitButton1.addEventListener("click", submitWord);

let arrayIndex = 0;

let crushedCells = 0;

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
        numberOfWords: 4,
        correctWords:  [
            {
                theWord: "BLUE",
                indexes: [0, 1, 2, 5],
                loopingVar: 4
            },
            {
                theWord: "BYE",
                indexes: [3, 4, 5],
                loopingVar: 3
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
        numberOfWords: 3,
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
            },
            {
                theWord: "CLUB",
                indexes: [4, 1, 5, 2],
                loopingVar: 4
            }
        ]
    },
    {
        letters: ["B", "E", "A", "A", "C", "H", "S", "N", "D"],
        numberOfWords: 4,
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
            },
            {
                theWord: "HEAD",
                indexes: [5, 1, 2, 8],
                loopingVar: 4
            },
            {
                theWord: "BAN",
                indexes: [0, 3, 7],
                loopingVar: 3
            }
        ]
    }
];

function startGame(){
    displayAnswer.removeChild(startButton1);
    submitButton1.disabled = false;
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
                tableCells[wordsArray[arrayIndex].correctWords[i].indexes[j]].style.backgroundColor = "gray";
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
        displayAnswer.innerHTML = "";
        arrayIndex++;
        if(wordsArray[arrayIndex] === undefined){
            centerDiv.removeChild(wordContainer);
            centerDiv.removeChild(submitButton1);
            centerDiv.removeChild(answerInput);
            centerDiv.removeChild(labelForInput1);
            displayAnswer.innerHTML = "Bravo! Arritet t'i gjenit te gjitha fjalet.";
        } else{
            for(let i=0; i<9; i++){
                tableCells[i].style.backgroundColor = "white";
                tableCells[i].innerHTML = wordsArray[arrayIndex].letters[i];
            }
        }
        crushedCells = 0;
    }
}


