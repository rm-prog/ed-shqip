
const centerDiv = document.getElementById("center-div");
const timeDisplay = document.getElementById("time-display");
const correctAnswerDisplay = document.getElementById("correct-answer");
const figureObject = document.getElementById("object");
const startButton1 = document.getElementById("startButton");
const gabimButton = document.getElementById("gabim1");
const sakteButton = document.getElementById("sakte1");

startButton1.addEventListener("click", startGame);
gabimButton.addEventListener("click", gabimButtonClick);
sakteButton.addEventListener("click", sakteButtonClick);

gabimButton.disabled = true;
sakteButton.disabled = true;

let arrayIndex = 0;
let randomIndex;

let correctClicks = 0;
let incorrectClicks = 0;

let seconds = 0;
let timeCounter;

function myTimer() {
    seconds++;
    timeDisplay.innerHTML = `${seconds} sekonda`;
    if(seconds === 4){
        seconds = 0;
        clearInterval(timeCounter);
        gabimButton.disabled = true;
        sakteButton.disabled = true;
        startButton1.disabled = false;
        if(theStatements[arrayIndex-1].statements[randomIndex].answer === "Sakte"){
            correctAnswerDisplay.innerHTML += "<br>" + "Fjalia e mesiperme eshte e sakte" + "<br>" + "-1 pike";
        } else{
            correctAnswerDisplay.innerHTML += "<br>" + "Fjalia e mesiperme eshte e gabuar" + "<br>" + "-1pike";
        }
    } 
}
  

const theStatements = [
    {
        borderColor: "brown",
        borderRadius: "50%",
        statements: [
            {fjalia: "Ky ESHTE nje katror I KAFTE", answer: "Gabim", color: "black"},
            {fjalia: "Ky nuk ESHTE nje KATROR i zi", answer: "Sakte", color: "black"},
            {fjalia: "Ky nuk ESHTE nje KATROR I KAFTE", answer: "Sakte", color: "black"}
        ]
    },
    {
        borderColor: "green",
        borderRadius: "0px",
        statements: [
            {fjalia: "Ky NUK eshte nje rreth I GJELBERT", answer: "Sakte", color: "black"},
            {fjalia: "Ky ESHTE NJE rreth I GJELBERT", answer: "Gabim", color: "black"},
            {fjalia: "Ky ESHTE NJE katror i gjelbert", answer: "Sakte", color: "black"}
        ]
    },
    {
        borderColor: "blue",
        borderRadius: "50%",
        statements: [
            {fjalia: "Ky NUK eshte nje RRETH i gjelbert", answer: "Sakte", color: "black"},
            {fjalia: "Ky ESHTE nje katror BLU", answer: "Gabim", color: "black"},
            {fjalia: "Ky NUK eshte nje katror BLU", answer: "Sakte", color: "black"}
        ]
    },
    {
        borderColor: "yellow",
        borderRadius: "50%",
        statements: [
            {fjalia: "Ky ESHTE NJE RRETH lejla", answer: "Gabim", color: "black"},
            {fjalia: "Ky nuk ESHTE NJE KATROR i verdhe", answer: "Sakte", color: "black"},
            {fjalia: "Ky NUK eshte nje RRETH blu", answer: "Sakte", color: "black"}
        ]
    },
    {
        borderColor: "black",
        borderRadius: "50%",
        statements: [
            {fjalia: "Ky ESHTE nje RRETH i gjelbert", answer: "Gabim", color: "black"},
            {fjalia: "Ky nuk ESHTE nje katror i ZI", answer: "Sakte", color: "black"},
            {fjalia: "Ky nuk ESHTE NJE RRETH i verdhe", answer: "Sakte", color: "black"}
        ]
    },
    {
        borderColor: "purple",
        borderRadius: "0px",
        statements: [
            {fjalia: "Ky ESHTE nje rreth LEJLA", answer: "Gabim", color: "black"},
            {fjalia: "Ky nuk ESHTE nje rreth LEJLA", answer: "Sakte", color: "black"},
            {fjalia: "Ky nuk ESHTE nje KATROR i verdhe", answer: "Sakte", color: "black"}
        ]
    },
    {
        borderColor: "orange",
        borderRadius: "50%",
        statements: [
            {fjalia: "Ky ESHTE nje RRETH i kuq", answer: "Gabim", color: "black"},
            {fjalia: "Ky nuk ESHTE nje RRETH i kuq", answer: "Sakte", color: "black"},
            {fjalia: "Ky ESHTE nje katror PORTOKALLI", answer: "Gabim", color: "black"}
        ]
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
  
  shuffle(theStatements);

function startGame(){
    if (arrayIndex < 7){
        timeCounter = setInterval(myTimer, 1000);
        startButton1.innerHTML = "Next";
        randomIndex = Math.floor(Math.random() * 2);
        correctAnswerDisplay.style.color = theStatements[arrayIndex].statements[randomIndex].color;
        correctAnswerDisplay.innerHTML = theStatements[arrayIndex].statements[randomIndex].fjalia;
        figureObject.style.borderColor = theStatements[arrayIndex].borderColor;
        figureObject.style.borderRadius = theStatements[arrayIndex].borderRadius;
        gabimButton.disabled = false;
        sakteButton.disabled = false;
        arrayIndex++;
    } else{
        centerDiv.removeChild(startButton1);
        centerDiv.removeChild(figureObject);
        centerDiv.removeChild(gabimButton);
        centerDiv.removeChild(sakteButton);
        correctAnswerDisplay.style.color = "black"
        correctAnswerDisplay.innerHTML = `Juve fituat ${correctClicks - incorrectClicks} pike`;
        const reloadPageButton = document.createElement("button");
        centerDiv.appendChild(reloadPageButton);
        reloadPageButton.addEventListener("click", reloadPage);
        reloadPageButton.innerHTML = "Rinis lojen";
        reloadPageButton.style.fontSize = "2rem";
        reloadPageButton.style.position = "relative";
        reloadPageButton.style.bottom = "100px";
    }
    startButton1.disabled = true;
}



function gabimButtonClick(){
    if(theStatements[arrayIndex-1].statements[randomIndex].answer === "Gabim"){
        correctClicks++;
        correctAnswerDisplay.innerHTML += "<br>" + "Fjalia e mesiperme eshte e gabuar" + "<br>" + "+1 pike";
    } else{
        incorrectClicks++;
        correctAnswerDisplay.innerHTML += "<br>" + "Fjalia e mesiperme eshte e sakte" + "<br>" + "-1pike";
    }
    gabimButton.disabled = true;
    sakteButton.disabled = true;
    startButton1.disabled = false;
    clearInterval(timeCounter);
    seconds = 0;
}

function sakteButtonClick(){
    if(theStatements[arrayIndex-1].statements[randomIndex].answer === "Sakte"){
        correctClicks++;
        correctAnswerDisplay.innerHTML += "<br>" + "Fjalia e mesiperme eshte e sakte" + "<br>" + "+1pike";
    } else{
        incorrectClicks++;
        seconds += 5;
        correctAnswerDisplay.innerHTML += "<br>" + "Fjalia e mesiperme eshte e gabuar" + "<br>" + "-1pike";
    }
    gabimButton.disabled = true;
    sakteButton.disabled = true;
    startButton1.disabled = false;
    clearInterval(timeCounter);
    seconds = 0;
}



function reloadPage(){
    window.location.reload();
}

