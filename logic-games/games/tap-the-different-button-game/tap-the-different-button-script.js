// Gjithe elementet
const correctAnswerDisplay = document.getElementById("correct-answer");
const myButtons = document.getElementsByClassName("myButton");
const centerDiv = document.getElementById("center-div");
const tableElement = document.getElementById("table1");
const startButton1 = document.getElementById("startButton");

startButton1.addEventListener("click", startGame);

tableElement.style.display = "none";

let correctClicks = 0;
let incorrectClicks = 0;

let randomIndex;

let arrayIndex = 0;

const correctAndIncorrects = [
  {
    correct: "#FFFF36", //
    incorrect: "#FAFA40"
  },
  {
    correct: "#2E8418", //
    incorrect: "#348300"
  },
  {
    correct: "#3B886C", //
    incorrect: "#429279"
  },
  {
    correct: "#465572", //
    incorrect: "#4E5B74"
  },
  {
    correct: "#062E8A", //
    incorrect: "#083498"
  },
  {
    correct: "#B90400", //
    incorrect: "#C41000"
  },
  {
    correct: "#FF5100", //
    incorrect: "#F44E00"
  },
  {
    correct: "#3FFDB0", //
    incorrect: "#62FEB5"
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

// Nis loja

function startGame() {
    if (arrayIndex < 8){
        startButton1.innerHTML = "Next";
        tableElement.style.display = "table";
        correctAnswerDisplay.innerHTML = "";  
        randomIndex = Math.floor(Math.random() * 71) + 1;
        for (let i = 0; i < 72; i++) {
        myButtons[i].value = "0";
        myButtons[i].style.borderStyle = "solid";
        myButtons[i].disabled = false;
        myButtons[i].style.backgroundColor = correctAndIncorrects[arrayIndex].incorrect;
        }
        myButtons[randomIndex].value = "1";
        myButtons[randomIndex].style.backgroundColor = correctAndIncorrects[arrayIndex].correct;
        arrayIndex++;
    } else{
        centerDiv.removeChild(tableElement);
        centerDiv.removeChild(startButton1);
        correctAnswerDisplay.innerHTML += `${"<br>"}Klikime te sakta: ${correctClicks} ${"<br>"} Klikime te gabuara: ${incorrectClicks}`;
        const reloadPageButton = document.createElement("button");
        reloadPageButton.style.margin = "40px";
        centerDiv.appendChild(reloadPageButton);
        reloadPageButton.addEventListener("click", reloadPage);
        reloadPageButton.innerHTML = "Rinis lojen";
        reloadPageButton.style.fontSize = "2rem";
        reloadPageButton.style.position = "relative";
        reloadPageButton.style.bottom = "50px";
        reloadPageButton.style.right = "50px";
    }
    startButton1.disabled = true;
}



// Kthehu mbrapsht

function backHistory() {
  window.history.back();
}



// Kur shtyp butonin

function btnClick(b) { 
    if (b.value === "1") {
        correctClicks++;
        correctAnswerDisplay.innerHTML = "Sakte!!";
    } else {
        incorrectClicks++;
        correctAnswerDisplay.innerHTML = "Gabim!!";
      }
    
    for(let i=0; i<72; i++){
      myButtons[i].style.borderStyle = "none";
      myButtons[i].disabled = true;
    }
    myButtons[randomIndex].style.borderStyle = "solid";
    startButton1.disabled = false;
} 

function reloadPage(){
  window.location.reload();
}