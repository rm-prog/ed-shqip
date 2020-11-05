
const answerDiv = document.getElementById("answer");
const startButton1 = document.getElementById("startButton");
const timeDisplay = document.getElementById("time-display");
const lettersContainer = document.getElementById("letters-container");
const playersGuess = document.getElementById("players-guess");

playersGuess.disabled = true;


const levelsAndLetters = {
    levelIndex: -1,
    correctAnswers: 0,
    incorrectAnswers: 0,
    theLevels: ["MRSI", "KSIT", "BLDTK", "GRHPJ", "PHTHJP", "ARNDAN", "EMLHGQB", "KRTMPTM", "CRMOZYXS"]
};

function startGame(){
    timeDisplay.innerHTML = "";
    startButton1.innerHTML = "Next";
    levelsAndLetters.levelIndex++;
    startButton1.disabled = true;
    if(levelsAndLetters.theLevels[levelsAndLetters.levelIndex] != undefined){
        lettersContainer.innerHTML = `Mbaj mend -> ${levelsAndLetters.theLevels[levelsAndLetters.levelIndex]}`;
        levelsAndLetters.hideLettersTimeout = setTimeout(startCountdown, 4000);
        levelsAndLetters.seconds = levelsAndLetters.theLevels[levelsAndLetters.levelIndex].length+1;
    } else{
        lettersContainer.style.display = "none";
        startButton1.style.display = "none";
        timeDisplay.style.display = "none";
        playersGuess.style.display = "none";
        answerDiv.style.fontSize = "2rem";
        answerDiv.innerHTML = `Bravo! Ke kaluar ${'<br>'} ${levelsAndLetters.correctAnswers} nivele ${'<br>'}
                                Dhe ke humbur ${'<br>'} ${levelsAndLetters.incorrectAnswers} nivele.`
    }
}

startButton1.addEventListener("click", startGame);



function startCountdown(){
    lettersContainer.innerHTML = "Tani shkruaji";
    playersGuess.disabled = false;
    playersGuess.focus();
    playersGuess.click();
    levelsAndLetters.exerciseCountdown = setInterval(countDown, 1000);
}

function countDown(){
    levelsAndLetters.seconds--;
    timeDisplay.innerHTML = `${levelsAndLetters.seconds} sekonda`;
    if(levelsAndLetters.seconds == 0){
        timeDisplay.innerHTML = `Koha mbaroi!! Vazhdoni me nivelin tjeter`;
        clearInterval(levelsAndLetters.exerciseCountdown);
        levelsAndLetters.incorrectAnswers++;
        lettersContainer.innerHTML = "";
        playersGuess.disabled = true;
        startButton1.disabled = false;
    }
}

playersGuess.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        playersGuess.disabled = true;
        lettersContainer.innerHTML = "";
        startButton1.disabled = false;
        if(playersGuess.value.toUpperCase() === levelsAndLetters.theLevels[levelsAndLetters.levelIndex]){
            levelsAndLetters.correctAnswers++;
            playersGuess.value = "";
            clearInterval(levelsAndLetters.exerciseCountdown);
            timeDisplay.innerHTML = "Bravo!! Vazhdo me nivelin tjeter ";
        } else{
            levelsAndLetters.incorrectAnswers++;
            playersGuess.value = "";
            clearInterval(levelsAndLetters.exerciseCountdown);
            timeDisplay.innerHTML = `Gabim!!  Shkronjat ishin ${levelsAndLetters.theLevels[levelsAndLetters.levelIndex]} ${'<br>'}
                                    Vazhdo me nivelin tjeter.`;
        }
    }
});

