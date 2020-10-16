
const startButton1 = document.getElementById("startButton");
const numberOrderDiv = document.getElementById("number-order");
const outputValue = document.getElementById("output-value");
const enterButton = document.getElementById("enter-button");
const calculatorContainer = document.getElementById("calculator-container");

enterButton.disabled = true;
enterButton.addEventListener("click", enterNumbers);

let correctAnswers = 0;
let incorrectAnswers = 0;

let levelIndex = -1;

startButton1.addEventListener("click", startGame);

const numberOrders = [
    {
        numbers: "3, 6, 12, ?",
        correctAns: "24",
        explanation: "Rregulli: 'Shumezo me dy'"
    },
    {
        numbers: "1, 1, 2, 3, ?",
        correctAns: "5",
        explanation: "Shuma e dy kufizave te njepasnjeshme japin vleren e kufizes pasardhese"
    },
    {
        numbers: "2, 3, 5, 7, 11, ?",
        correctAns: "13",
        explanation: "Vargu i numrave te thjeshte"
    },
    {
        numbers: "81, 27, 9, ?",
        correctAns: "3",
        explanation: "Rregulli: 'Pjeseto me 3'"
    },
    {
        numbers: "1, 4, 9, 16, 25, ?",
        correctAns: "36",
        explanation: "Numrat ne katror"
    },
    {
        numbers: "2, 2, 4, 8, 32, ?",
        correctAns: "256",
        explanation: "Prodhimi i dy kufizave te njepasnjeshme japin vleren e kufizes pasardhese"
    },
    {
        numbers: "36, 72, 108, ?",
        correctAns: "144",
        explanation: "Rregulli: 'Shto 36'"
    }
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

  shuffle(numberOrders);

function startGame(){
    levelIndex++;
    startButton1.innerHTML = "Next";
    enterButton.disabled = false;
    startButton1.disabled = true;
    outputValue.value = "";
    if(numberOrders[levelIndex] != undefined){
        numberOrderDiv.innerHTML = numberOrders[levelIndex].numbers; 
    } else{
        numberOrderDiv.style.fontSize = "2rem";
        numberOrderDiv.innerHTML = `Pergjigje te sakta: ${correctAnswers} ${'<br>'}
                                    Pergjigje ta gabuara: ${incorrectAnswers}`;
        calculatorContainer.style.display = "none";
        outputValue.style.display = "none"
        startButton1.style.display = "none";
    }
}


function numberClick(inputValue){
    outputValue.value += inputValue;
}

function deleteNumbers(){
    outputValue.value = "";
}

function enterNumbers(){
    if(outputValue.value === numberOrders[levelIndex].correctAns){
        correctAnswers++;
        outputValue.value = "";
        numberOrderDiv.innerHTML = `Sakte!! ${'<br>'} ${numberOrders[levelIndex].numbers} ${'<br>'}
                                    ? = ${numberOrders[levelIndex].correctAns} ${'<br>'}
                                    ${numberOrders[levelIndex].explanation}`;
    } else{
        incorrectAnswers++;
        outputValue.value = "";
        numberOrderDiv.innerHTML = `Gabim!! ${'<br>'} ${numberOrders[levelIndex].numbers} ${'<br>'}
                                    ? = ${numberOrders[levelIndex].correctAns} ${'<br>'}
                                    ${numberOrders[levelIndex].explanation}`;
    }
    startButton1.disabled = false;
    enterButton.disabled = true;
}