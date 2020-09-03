
const headerDiv = document.getElementById("heading");
const answerDisplay = document.getElementById("answer-display");
const timeDisplay = document.getElementById("time-display");
const startButton = document.getElementById("startButton");
const buttonTable = document.getElementById("table1");
const myButtons = document.getElementsByClassName("myButton");

startButton.addEventListener("click", startGame);

buttonTable.style.display = "none";

let correctClicks = 0;
let incorrectClicks = 0;

let colorOrder = 0;

let seconds = 12;

let arrayIndex = 0;

let timeInterval;

const colorsArray = [
    {
        orderDirection: "light to dark",
        colorAndOrder: [
            {color: "white", order: 0, buttonColor: "black"},
            {color: "#F0EEE3", order: 1, buttonColor: "black"},
            {color: "#FCDFE4", order: 2, buttonColor: "black"},
            {color: "#FEE895", order: 3, buttonColor: "black"},
            {color: "#FAD64D", order: 4, buttonColor: "black"},
            {color: "#FABE4D", order: 5, buttonColor: "black"},
            {color: "#E7A832", order: 6, buttonColor: "black"},
            {color: "#E76332", order: 7, buttonColor: "black"},
            {color: "#B9512A", order: 8, buttonColor: "white"},
            {color: "#8F320F", order: 9, buttonColor: "white"},
            {color: "#5E1F08", order: 10, buttonColor: "white"},
            {color: "#000000", order: 11, buttonColor: "white"}
                        ]
    },
    {
        orderDirection: "dark to light",
        colorAndOrder: [
            {color: "black", order: 0, buttonColor: "white"},
            {color: "#07043D", order: 1, buttonColor: "white"},
            {color: "#161750", order: 2, buttonColor: "white"},
            {color: "#A34382", order: 3, buttonColor: "black"},
            {color: "#64BC90", order: 4, buttonColor: "black"},
            {color: "#81CA73", order: 5, buttonColor: "black"},
            {color: "#F0E630", order: 6, buttonColor: "black"},
            {color: "#FFDD6B", order: 7, buttonColor: "black"},
            {color: "#A2FFF6", order: 8, buttonColor: "black"},
            {color: "#FEF4A1", order: 9, buttonColor: "black"},
            {color: "#FFEED0", order: 10, buttonColor: "black"},
            {color: "white", order: 11, buttonColor: "black"},
                        ]
    },
    {
        orderDirection: "light to dark",
        colorAndOrder: [
            {color: "white", order: 0, buttonColor: "black"},
            {color: "#F6DDCC", order: 1, buttonColor: "black"},
            {color: "#EDBB99", order: 2, buttonColor: "black"},
            {color: "#F7B852", order: 3, buttonColor: "black"},
            {color: "#27AE60", order: 4, buttonColor: "black"},
            {color: "#119E82", order: 5, buttonColor: "black"},
            {color: "#765346", order: 6, buttonColor: "white"},
            {color: "#5F3F35", order: 7, buttonColor: "white"},
            {color: "#131B6E", order: 8, buttonColor: "white"},
            {color: "#510A31", order: 9, buttonColor: "white"},
            {color: "#3D0707", order: 10, buttonColor: "white"},
            {color: "black", order: 11, buttonColor: "white"}
                        ]
    },
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

  function myTimer() {
    seconds--;
    timeDisplay.innerHTML = `${seconds} sekonda`;
    if(seconds === 0){
        seconds = 12;
        clearInterval(timeInterval);
        startButton.disabled = false;
        if(colorsArray[arrayIndex] != undefined){
            if(colorsArray[arrayIndex].orderDirection === "light to dark"){
                answerDisplay.innerHTML = `Koha mbaroi! ${'<br>'}Tani shtypni ngjyrat nga me e hapura tek me e mbyllura`;
                answerDisplay.style.color = "black";
                headerDiv.innerHTML = "Shtypni ngjyrat nga me e hapura tek me e mbyllura";
                headerDiv.style.color = "blue";
            } else{
                answerDisplay.innerHTML = "Tani shtypni ngjyrat nga e mbyllura tek me e hapura"
                headerDiv.style.color = "black";
                headerDiv.innerHTML = "Tani shtypni ngjyrat nga me e mbyllura tek me e hapura";
            }
        } else{
            answerDisplay.style.color = "black";
            answerDisplay.innerHTML = "Koha mbaroi! Kaloni ne raundin tjeter.";
        }
        for(let i=0; i<12; i++){
            myButtons[i].innerHTML = myButtons[i].value;
            myButtons[i].disabled = true;
        }
    }
}

function startGame(){
    if(colorsArray[arrayIndex] != undefined){
        startButton.innerHTML = "Next";
        answerDisplay.innerHTML = "";
        timeInterval = setInterval(myTimer, 1000);
        buttonTable.style.display = "table";
        shuffle(colorsArray[arrayIndex].colorAndOrder);
        for(let i=0; i<12; i++){
            myButtons[i].style.backgroundColor = colorsArray[arrayIndex].colorAndOrder[i].color;
            myButtons[i].value = colorsArray[arrayIndex].colorAndOrder[i].order;
            myButtons[i].style.color = colorsArray[arrayIndex].colorAndOrder[i].buttonColor;
            myButtons[i].innerHTML = "";
            myButtons[i].disabled = false;
        }
        colorOrder = 0;
        arrayIndex++;
    } else{
        buttonTable.style.display = "none";
        timeDisplay.style.display = "none";
        startButton.style.display = "none";
        answerDisplay.style.color = "black";
        answerDisplay.innerHTML = `Bravo! Kaluat ${correctClicks} nga ${colorsArray.length} raunde. ${"<br>"}
                                    Gabime: ${incorrectClicks}`;    
    }
    startButton.disabled = true;
}

function btnClick(btn){
    if(Number(btn.value) === colorOrder){
        colorOrder++;
        answerDisplay.style.color = "green";
        answerDisplay.innerHTML = "Sakte!"; 
        btn.disabled = true;
        btn.innerHTML = btn.value;
        if(colorOrder === 12){
            colorOrder = 0;
            for(let i=0; i<12; i++){
                myButtons[i].disabled = true;
            }
            correctClicks++;
            clearInterval(timeInterval);
            seconds = 12;
            startButton.disabled = false;
            if(colorsArray[arrayIndex] != undefined){
                if(colorsArray[arrayIndex].orderDirection === "light to dark"){
                    answerDisplay.innerHTML = "Sapo kaluat kete raund! Tani shtypni ngjyrat nga me e hapura tek me e mbyllura";
                    headerDiv.innerHTML = "Shtypni ngjyrat nga me e hapura tek me e mbyllura";
                    headerDiv.style.color = "blue";
                } else{
                    answerDisplay.innerHTML = "Tani shtypni ngjyrat nga e mbyllura tek me e hapura"
                    headerDiv.style.color = "green";
                    headerDiv.innerHTML = "Tani shtypni ngjyrat nga e mbyllura tek me e hapura";
                }
            } else{
                answerDisplay.innerHTML = "Sapo kaluat kete raund! Tani kaloni ne raundin tjeter."
            }
        }
    } else{
        answerDisplay.style.color = 'red';
        answerDisplay.innerHTML = "Gabim!";
        incorrectClicks++;
    }

    
}

