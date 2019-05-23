const button = document.querySelector("button");
const player1 = document.querySelector("#player1");
const player2  = document.querySelector("#player2");
const output = document.querySelector("#output");
let score = [0,0];

button.addEventListener("click", dice)

function dice (){
   let rolls = [roll(6), roll(6)];
   let message;
    if(rolls[0] === rolls[1]){
        message = "It's a tie";
    } else if (rolls[0] > rolls[1]){
        message = "Player 1 Wins";
        score[0]++
    } else {
        message = "Computer Wins";
        score[1]++
    };
    player1.innerHTML = rolls[0];
    player2.innerHTML = rolls[1];
    output.innerHTML = `${message} <br>  Player ${score[0]} Computer ${score[1]}`;
    
    console.log(message);
    console.log("The score is " + score);
    console.log(rolls);
};

function roll(num){
    let randomNum = Math.floor(Math.random() * num) + 1;
    let visualNumber = 9855 + randomNum
    let diceVisual = `&#${visualNumber};`
    return randomNum + " " + diceVisual;
}