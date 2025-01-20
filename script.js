let gameseq = [];
let userseq = [];
let score = 0;
let highscore = 0;
let btns = ["red" , "blue" , "green" , "yellow"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",()=>{
    if(started==false){
        console.log("game started")
        started = true;
    }
    levelup();
})

function flashScreen(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function levelup(){
    userseq = [];
    let currscore = score;
    score++;
    if(score > currscore)
        {
            highscore = score;
        } 
        else{
            highscore = currscore;
        }
    level++;

    h2.innerText = `level ${level} highest and the highest score is ${highscore}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameseq.push(randomColor);
    flashScreen(randomBtn);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
}

function checkAns(idx)
{
    if(userseq[idx] === gameseq[idx])
    {
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerText = `Game Over! Press Any Key To Start, youre score was ${score}`
        reset();
    }
}
function btnPress()
{
    console.log(this);
    let btn = this;
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    userFlash(btn);

    checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener('click',btnPress)
}

function reset()
{
    gameseq = [];
    userseq = [];
    level = 0;
    started = false;
    score = 0;
}