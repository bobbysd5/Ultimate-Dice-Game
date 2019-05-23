const button = document.querySelector("button");
const output = document.querySelector(".output");
const player1 = document.querySelector("#Player1")
const player2 = document.querySelector("#Player2")
const dice = [[5],[1,9],[1,5,9],[1,3,7,9],[1,3,5,7,9],[1,3,4,6,7,9]];
let score = [0,0];

button.addEventListener("click", action);
function action (){
    let rolls = [roll(6),roll(6)];
    let temp;
    if (rolls[0] ===rolls[1]){
        temp= "It's a tie";
    }else if(rolls[0] > rolls[1]){
        temp = "Player Wins";
        score[0]++;
    }else {
        temp = "Computer Wins";
        score[1]++;
    }
   updateOutput(player1, rolls[0]);
   updateOutput(player2, rolls[1]);
   output.innerHTML = `${temp} <br> Player ${score[0]} Computer ${score[1]}`;
};

function updateOutput(el, num) {
    let holder = builder (num);
    if (el.children[0]){el.children[0].remove();}
    el.appendChild(holder);
}

function builder (num) {
    let div = document.createElement("div");
    let dieArray = dice[num-1];

    for (let i = 1; i < 10; i++){
        let span = document.createElement("div");
        span.setAttribute("class", "dot");
        if (dieArray.includes(i)){
            span.classList.add("black");
        }
        div.appendChild(span);    
    }
    div.setAttribute("class", "dicer");
    return div;
}

function roll(num){
    let randomNum = Math.floor(Math.random() * num) + 1;
    return randomNum;
}