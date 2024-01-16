let userScore=0;
let computerScore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComputerChoice = ()=>{
    const options=["rock","paper","scissors"];
    const randomInd=Math.floor(Math.random()*3);
    return options[randomInd];
}

const drawGame=()=>{
    msg.innerText="Game was Draw! Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        compScorePara.innerText=computerScore;
        msg.innerText=`You Lose ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
} 

const playGame=(userChoice)=>{ 
    //generate computer choice

    const computerChoice=genComputerChoice();
    
    if(userChoice==computerChoice){
        //draw 
        drawGame();
    } else {
        let userWin=true;
         if(userChoice==="rock"){
            //paper,scissors
            userWin=computerChoice==="paper" ? false : true;
         } else if(userChoice==="paper"){
            //scissors,rock
            userWin= computerChoice==="scissors" ? false: true;
         } else  {
            //rock,paper
            userWin= computerChoice==="rock" ? false : true;
         }
         showWinner(userWin,userChoice,computerChoice);
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

