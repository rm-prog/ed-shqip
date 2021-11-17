
const centerDiv = document.getElementById("center-div");
const correctAnswerDisplay = document.getElementById("correct-answer");
const outputValue = document.getElementById("output-value");
const tableCells = document.getElementsByTagName("td");
const startButton1 = document.getElementById("startButton");
const calculatorContainer = document.getElementById("calculator-container");
const filledTable = document.getElementById("table");
const inputLabel = document.getElementById("input-label");

startButton1.addEventListener("click", startGame);

let correctClicks = 0;
let incorrectClicks = 0;

let numberOfGames = 0;

let seconds = 2;
let timeCounter;

let randomNumber;

let differenceBetweenCorrectAndGuess = 0;

// Nis loja

function startGame() {
  if (numberOfGames <= 10) {
    correctAnswerDisplay.innerHTML = "";
    startButton1.innerHTML = "Next";
    outputValue.value = "";
    randomNumber = Math.floor(Math.random() * 99) + 1;
    for (let i = 0; i <= 99; i++) {
      tableCells[i].style.backgroundColor = "#D1FF4D";
    }
    for (let i = 0; i <= randomNumber; i++) {
      tableCells[i].style.backgroundColor = "red";
    }
    numberOfGames++;
  } else {
    calculatorContainer.style.display = "none";
    filledTable.style.display = "none";
    outputValue.style.display = "none";
    inputLabel.style.display = "none";
    startButton1.style.display = "none";
    const reloadPageButton = document.createElement("button");
    reloadPageButton.style.margin = "40px";
      centerDiv.appendChild(reloadPageButton);
      reloadPageButton.addEventListener("click", reloadPage);
      reloadPageButton.innerHTML = "Rinis lojen";
      reloadPageButton.style.fontSize = "2rem";
      reloadPageButton.style.position = "relative";
      reloadPageButton.style.bottom = "150px";
    correctAnswerDisplay.innerHTML = `Pergjigje te sakta: ${correctClicks} ${"<br>"}
                                Pergjigje te gabuara ${incorrectClicks} ${"<br>"}
                                Diferenca midis pergjigjeve te sakta dhe pergjigjeve tuaja: ${differenceBetweenCorrectAndGuess}`;
  }

  startButton1.disabled = true;
}

function numberClick(inputValue){
    outputValue.value += inputValue;
}

function deleteNumbers(){
    outputValue.value = "";
}

function reloadPage(){
  window.location.reload();
}

function enterNumbers(){
    if((Number(outputValue.value) - 1) === randomNumber 
    || (Number(outputValue.value) - 1) === (randomNumber-1) 
    || (Number(outputValue.value) - 1) === (randomNumber-2)
    || (Number(outputValue.value) - 1) === (randomNumber-3)
    || (Number(outputValue.value) - 1) === (randomNumber+1)
    || (Number(outputValue.value) - 1) === (randomNumber+2)
    || (Number(outputValue.value) - 1) === (randomNumber+3)){
        correctClicks++;
        correctAnswerDisplay.innerHTML = "Sakte!!";
    } else{
        incorrectClicks++;
        correctAnswerDisplay.innerHTML = "Gabim!!";
    }
    correctAnswerDisplay.innerHTML += ` ${'<br>'}Pergjigja e sakte ${randomNumber+1} ${'<br>'}
                                            Pergjigja juaj: ${outputValue.value} ${'<br>'}
                                            Diferenca: ${(randomNumber+1) > outputValue.value ? (randomNumber+1) - outputValue.value : outputValue.value - (randomNumber+1)}`;
      differenceBetweenCorrectAndGuess += (randomNumber+1) > outputValue.value ? (randomNumber+1) - outputValue.value : outputValue.value - (randomNumber+1);
      startButton1.disabled = false;

    console.log(`Pergjigje te sakta: ${correctClicks}`);
    console.log(`Pergjigje te gabuara: ${incorrectClicks}`);
}

function backHistory(){
  window.history.back();
}
