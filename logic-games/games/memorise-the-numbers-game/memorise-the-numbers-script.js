
const startButton1 = document.getElementById("startButton");
const answerDiv = document.getElementById("answer");
const numberDivs = document.getElementsByClassName("grid-item");
const calculatorContainer = document.getElementById("calculator-container");

startButton1.addEventListener("click", startGame);

calculatorContainer.style.display = "none";

let solvedExercises = 0;
let unsolvedExercises = 0;

let exerciseIndex = -1;

let numberIndex = 1;

let timeCounter;
let numberRevealIndex = 0;

const numbersOrder = [
    {
        theNumbers: ["1", "2", "3", "6", "5", "4", "7", "8", "9"],
        countdownOrder: [0, 1, 2, 5, 4, 3, 6, 7, 8]
    },
    {
        theNumbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        countdownOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        theNumbers: ["1", "4", "7", "2", "5", "8", "3", "6", "9"],
        countdownOrder: [0, 3, 6, 1, 4, 7, 2, 5, 8]
    },
    {
        theNumbers: ["1", "7", "8", "6", "2", "9", "5", "4", "3"],
        countdownOrder: [0, 4, 8, 7, 6, 3, 1, 2, 5]
    },
    {
        theNumbers: ["9", "8", "7", "4", "5", "6", "1", "2", "3"],
        countdownOrder: [6, 7, 8, 3, 4, 5, 2, 1, 0]
    },
    {
        theNumbers: ["9", "8", "7", "6", "5", "4", "3", "2", "1"],
        countdownOrder: [8, 7, 6, 5, 4, 3, 2, 1, 0]
    },
    {
        theNumbers: ["1", "4", "6", "3", "5", "7", "2", "8", "9"],
        countdownOrder: [0, 6, 3, 1, 4, 2, 5, 7, 8]
    },
    {
        theNumbers: ["2", "4", "5", "1", "3", "6", "9", "8", "7"],
        countdownOrder: [3, 0, 4, 1, 2, 5, 8, 7, 6]
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

  shuffle(numbersOrder);

function startGame(){
    numberIndex = 1;
    numberRevealIndex = 0;
    startButton1.innerHTML = "Next";
    startButton1.disabled = true;
    exerciseIndex++;
    answerDiv.innerHTML = "Memorizoni rradhen e numrave dhe pastaj shtypni kutite sipas rradhes";
    if(numbersOrder[exerciseIndex] != undefined){
        timeCounter = setInterval(myTimer, 1000);
    } else{
        calculatorContainer.style.display = "none";
        answerDiv.innerHTML = `Bravo kaluat te gjitha raundet ${'<br>'}
                                 me ${unsolvedExercises} gabime`;
    }
}

function myTimer(){
    if(numberRevealIndex < 9){
        calculatorContainer.style.display = "inline-grid";
        numberDivs[numbersOrder[exerciseIndex].countdownOrder[numberRevealIndex]].innerHTML = numbersOrder[exerciseIndex].theNumbers[numbersOrder[exerciseIndex].countdownOrder[numberRevealIndex]];
        numberDivs[numbersOrder[exerciseIndex].countdownOrder[numberRevealIndex]].value = numbersOrder[exerciseIndex].theNumbers[numbersOrder[exerciseIndex].countdownOrder[numberRevealIndex]];
        numberRevealIndex++;
    } else{
        numberRevealIndex = 0;
        for(let i=0; i<9; i++){
            numberDivs[i].innerHTML = "";
            clearInterval(timeCounter);
        }
    }
}

function numberClick(btn){
    if(btn.value == numberIndex.toString()){
        btn.innerHTML = btn.value;
        numberIndex++;
        if(numberIndex === 10){
            for(let i=0; i<9; i++){
                numberDivs[i].innerHTML = "";
                numberDivs[i].value = "";
            }
            calculatorContainer.style.display = "none"
            solvedExercises++;
            startButton1.disabled = false;
            answerDiv.innerHTML = "Bravo!! Vazhdoni me nivelin tjeter";
        } else{
            answerDiv.innerHTML = "Sakte!! Vazhdoni.";
        }
    } else{
        if(numberRevealIndex != 0){
            return 0;
        }
        unsolvedExercises++;
        answerDiv.innerHTML = "Gabim!!";
    }
}




