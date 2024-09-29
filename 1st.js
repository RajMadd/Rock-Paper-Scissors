let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let message=document.querySelector("#message");
let score1=document.querySelector("#score-no1");
let score2=document.querySelector("#score-no2");

let genCompchoice =() =>{
    let array=["rock" , "paper" , "scissors"];
    let idx=Math.floor(Math.random()*3);
    return array[idx];
}

let displayWinner = (userWin, user_choiceId, comp_choiceId) => {
    if(userWin){
        let winner=` You win. Your ${user_choiceId} beats ${comp_choiceId}`;
        console.log(winner);
        message.innerText=winner;
        score1.innerText=++userScore;
    }
    else{
        let losser=` You lose. ${comp_choiceId} beats your ${user_choiceId}`;
        console.log(losser);
        message.innerText=losser;
        score2.innerText=++compScore;
    }
}

let play_game =(user_choiceId) =>{
  let comp_choiceId= genCompchoice();
  if( user_choiceId===comp_choiceId){
    console.log("Game was draw");
    message.innerText="Game was draw. Try again."
  }else{
  let userWin = true;
  if( user_choiceId=="rock"){
    userWin = comp_choiceId==="scissors"?true : false;
    userWin = comp_choiceId==="paper"?false: true;
  }
  else if( user_choiceId=="paper"){
    userWin = comp_choiceId==="rocks"?true : false;
    userWin = comp_choiceId==="scissors"?false: true;
  }
  else if( user_choiceId=="scissors"){
    userWin = comp_choiceId==="paper"?true : false;
    userWin = comp_choiceId==="rock"?false: true;
  }
  displayWinner(userWin, user_choiceId, comp_choiceId);
  }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", (event)=>{
        let user_choiceId= event.currentTarget.getAttribute("id");
        play_game(user_choiceId);
    });
});
