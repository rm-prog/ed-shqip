
const startButton1 = document.getElementById("startButton");
const centerDiv = document.getElementById("center-div");
const timeDisplay = document.getElementById("time-display");
const colorSpan = document.getElementById("color");
const buttonsContainer = document.getElementById("button-container");
const colorButtons = document.getElementsByClassName("button");
const shtypButton = document.getElementById("shtypniButonin");

startButton1.addEventListener("click", startGame);

colorButtons[0].disabled = true;
colorButtons[1].disabled = true;
colorButtons[2].disabled = true;

let correctClicks = 0;
let incorrectClicks = 0;

let arrayIndex = 0;

let seconds = 2;
let timeCounter;

// Nis loja

function startGame(){
    timeCounter = setInterval(myTimer, 1000);
    colorButtons[0].disabled = false;
    colorButtons[1].disabled = false;
    colorButtons[2].disabled = false;
    startButton1.addEventListener("click", goBack);
    startButton1.innerHTML = "Kthehu";
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

function goBack() {
        window.history.back();
    }

const correctButtonColors = [
    "blue",
    "green", 
    "yellow", 
    "brown", 
    "gray", 
    "orange", 
    "black", 
    "purple",
    "red", 
    "pink", 
    "white",
    "lightblue"
];

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
  
  shuffle(correctButtonColors);
  
  const randomColors = correctButtonColors;

  function colorBtnClick(b){
    if(b.value === "1"){
        correctClicks++;
        const randomIndex = Math.floor(Math.random() * 3);
        if (correctButtonColors[arrayIndex] === undefined){
            centerDiv.removeChild(buttonsContainer);
            centerDiv.removeChild(shtypButton);
            clearInterval(timeCounter);
            timeDisplay.innerHTML += `${"<br>"}Klikime te sakta: ${correctClicks} ${"<br>"} Klikime te gabuara: ${incorrectClicks}`;
            const reloadPageButton = document.createElement("button");
            reloadPageButton.style.margin = "40px";
            centerDiv.appendChild(reloadPageButton);
            reloadPageButton.addEventListener("click", reloadPage);
            reloadPageButton.innerHTML = "Rinis lojen";
            reloadPageButton.style.position = "relative";
            reloadPageButton.style.bottom = "60px";
            reloadPageButton.style.fontSize = "2rem";
        } else{
          let trueOrFalse = Math.floor(Math.random() * 100);
          let correctButton;
          switch (correctButtonColors[arrayIndex]) {
            case "blue":
              correctButton = "blu"
              break;
            case "green":
              correctButton = "e gjelbert"
              break;
            case "yellow":
              correctButton = "e verdhe"
              break;
            case "brown":
              correctButton = "e kafte"
              break;
            case "gray":
              correctButton = "gri"
              break;
            case "orange":
              correctButton = "portokalli"
              break;
            case "black":
              correctButton = "e zi"
              break;
            case "purple":
              correctButton = "lejla"
              break;
            case "red":
              correctButton = "e kuq"
              break;  
            case "pink":
              correctButton = "roze"
              break;
            case "white":
              correctButton = "e bardhe"
              break;
            case "lightblue":
              correctButton = "e kalter"
              break;
          }
            if(trueOrFalse % 2 === 0){
            for(let i=0; i<3; i++){
                colorButtons[i].value = "0";
                const randomIncorrectIndex = Math.floor(Math.random() * 11);
                colorButtons[i].style.backgroundColor = randomColors[(randomIncorrectIndex === arrayIndex) ? randomIncorrectIndex+1 : randomIncorrectIndex];
                colorButtons[i].innerHTML = "";
            }
            colorButtons[randomIndex].value = "1";
            colorButtons[randomIndex].style.backgroundColor = correctButtonColors[arrayIndex];
            colorSpan.innerHTML = `Shtypni butonin ${correctButton}`;
          } else{
            for(let i=0; i<3; i++){
              colorButtons[i].value = "1";
              const randomIncorrectIndex = Math.floor(Math.random() * 11);
              colorButtons[i].style.backgroundColor = randomColors[(randomIncorrectIndex === arrayIndex) ? randomIncorrectIndex+1 : randomIncorrectIndex];
              colorButtons[i].innerHTML = "";
            }
            colorButtons[randomIndex].value = "0";
            colorButtons[randomIndex].style.backgroundColor = correctButtonColors[arrayIndex];
            colorSpan.innerHTML = `Mos shtypni butonin ${correctButton}`;
          }
        }
        colorSpan.style.color = randomColors[Math.floor(Math.random() * 11)];
        arrayIndex++;
    } else{
        incorrectClicks++;
        seconds += 5 * incorrectClicks;
        b.innerHTML = "Gabim";
    }
  }

  function reloadPage(){
      window.location.reload();
  }

  function backHistory(){
    window.history.back();
  }
