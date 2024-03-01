let guess=document.querySelector(".guess");
let checkButton=document.getElementById("check-btn");
let message=document.querySelector(".message");
let score=document.getElementsByClassName("score")[0];
let number=document.querySelector(".number");
let highscore=document.querySelector(".highscore");
let again=document.querySelector(".again");

let randomNumber=Math.trunc(Math.random()*20)+1;

console.log(`The Random Number is ${randomNumber}`);

let scores=20;
function checkNumber(){
    let guessValue=Number(guess.value);
    if (guessValue===randomNumber){
        message.textContent="Correct Number !";
        document.querySelector("body").style.backgroundColor=" green";
        highscore.textContent=scores;
        number.textContent=randomNumber;

    }
    else if(guessValue<randomNumber){
        if(scores>0){
            message.textContent="Low";
            scores--;
            score.textContent=scores;
        }
        else{
            alert('Game Over');
            message.textContent="you have Lost the Game";
            document.querySelector("body").style.backgroundColor=" red";

        }
    }
    else{
        if (scores > 0) {
            message.textContent = "too high!";
            scores --;
            score.textContent = scores;
        } else {
            alert('Game Over');
            message.textContent = "You have lost the game";
            document.querySelector("body").style.backgroundColor = "red";
        } 
    }
}
checkButton.addEventListener("click",checkNumber);

function resetGame() {
    scores = 20;
    score.textContent = scores;
    message.textContent = "Start guessing...";
    number.textContent = "?";
    document.querySelector("body").style.backgroundColor ="#ece9e0";
    highscore.textContent = 0;
    guess.value = "";
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log("random number", randomNumber);
}

again.addEventListener("click", resetGame);