// Gjithe elementet
const headingTab = document.getElementById("heading");
const myButtons = document.getElementsByClassName("myButton");
const timeDisplay = document.getElementById("time-display");
const centerDiv = document.getElementById("center-div");
const tableElement = document.getElementById("table1");
const startButton1 = document.getElementById("startButton");

startButton1.addEventListener("click", startGame);

tableElement.style.display = "none";

let correctClicks = 0;
let incorrectClicks = 0;

let arrayIndex = 0;

let seconds = 2;
let timeCounter;

// Nis loja

function startGame() {
  timeCounter = setInterval(myTimer, 1000);
  tableElement.style.display = "table";
  startButton1.addEventListener("click", goBack);
  startButton1.innerHTML = "Kthehu";
  startButton1.style.position = "relative";
  startButton1.style.bottom = "20px";
  timeDisplay.style.position = "relative";
  timeDisplay.style.bottom = "20px";
  tableElement.style.position = "relative";
  tableElement.style.bottom = "32px";
}

function myTimer() {
  if (seconds < 60) {
    timeDisplay.innerHTML = `00 : ${
      seconds > 9 ? seconds : "0" + seconds.toString()
    }`;
  } else {
      if (seconds >= 600) {
        timeDisplay.innerHTML = `${Math.floor(seconds / 60)} : ${
        seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60).toString()
        }`;
      } else {
        timeDisplay.innerHTML = `0${Math.floor(seconds / 60)} : ${
          seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60).toString()
        }`;
      }
    }
    seconds++;
  }

// Kthehu mbrapsht

function goBack() {
  window.history.back();
}

// Numrat dhe shkronjat

const correctAndIncorrects = [
  {
    correct: 1,
    incorrect: 7
  },
  {
    correct: 3,
    incorrect: 8
  },
  {
    correct: 8,
    incorrect: "B"
  },
  {
    correct: 0,
    incorrect: "Q"
  },
  {
    correct: 0,
    incorrect: "O"
  },
  {
    correct: 2,
    incorrect: "Z"
  },
  {
    correct: 5,
    incorrect: "S"
  },
  {
    correct: 1,
    incorrect: "L"
  }
];

// Rendit rastesisht
function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;

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

shuffle(correctAndIncorrects);

// Kur shtyp butonin

function btnClick(b) {
  if (b.value === "1") {
    correctClicks++;
    const randomIndex = Math.floor(Math.random() * 71) + 1;
    if (correctAndIncorrects[arrayIndex] === undefined && arrayIndex != -1) {
      centerDiv.removeChild(tableElement);
      clearInterval(timeCounter);
      timeDisplay.innerHTML += `${"<br>"}Klikime te sakta: ${correctClicks} ${"<br>"} Klikime te gabuara: ${incorrectClicks}`;
      const reloadPageButton = document.createElement("button");
      centerDiv.appendChild(reloadPageButton);
      reloadPageButton.addEventListener("click", reloadPage);
      reloadPageButton.innerHTML = "Rinis lojen";
      reloadPageButton.style.fontSize = "2rem";
    } else {
      for (let i = 0; i < 72; i++) {
        myButtons[i].value = "0";
        myButtons[i].style.backgroundColor = "lightgray";
        myButtons[i].innerHTML = correctAndIncorrects[arrayIndex].incorrect;
      }
      myButtons[randomIndex].innerHTML =
        correctAndIncorrects[arrayIndex].correct;
      myButtons[randomIndex].value = "1";
      headingTab.innerHTML = `Gjej numrin ${correctAndIncorrects[arrayIndex].correct}`;
    }
    arrayIndex++;
  } else {
    incorrectClicks++;
    seconds += 5 * incorrectClicks;
    b.style.backgroundColor = "red";
  }
}

function reloadPage(){
  window.location.reload();
}

function backHistory(){
  window.history.back();
}
