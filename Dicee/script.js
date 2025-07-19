const player1 = document.querySelector(".player-1-section");
const player2 = document.querySelector(".player-2-section");
const main_container = document.querySelector(".players-container");
const Roll_dice = document.querySelector(".roll-dice");   
const Hold_btn = document.querySelector(".hold");       
const New_game_btn = document.querySelector(".new-game");   
const ImgContainer = document.querySelector(".dice");
const Dice_El = document.querySelector(".dice img");       

let player1Score = document.querySelector(".main-score-0");   
let player2Score = document.querySelector(".main-score-1");   

const Current_Score = document.querySelector(".current-score");
const scores = [ 0 , 0 ];
let currentScore = 0;  
let activePlayer = 0;   
let playerwin = false;

const NewGameButton___AfterWin = document.querySelector(".newGameButton-afterWin");

Roll_dice.addEventListener("click", ()=>
{
    let dice_roll = Math.trunc(Math.random()*6+1);
    console.log(dice_roll);
    
    Dice_El.src = `./images/dice-${dice_roll}(2).jpg`;
    ImgContainer.classList.remove("hidden");


    if(dice_roll!==1)
    {   
        currentScore += dice_roll;  // Current Score
        document.querySelector(`.current-score-${activePlayer}`).textContent = currentScore; 
    }
    else{
         player1.classList.toggle("active-color");   
         player2.classList.toggle("active-color");   

         document.querySelector(`.current-score-${activePlayer}`).textContent = 0; 
         currentScore = 0;
         activePlayer = activePlayer === 0 ? 1 : 0;
    }
})


Hold_btn.addEventListener("click",()=>
{

    scores[activePlayer] += currentScore;
    document.querySelector(`.main-score-${activePlayer}`).textContent = scores[activePlayer];
    document.querySelector(`.current-score-${activePlayer}`).textContent = 0;
    currentScore = 0;
    
    if(scores[activePlayer] >= 100)
    {
        playerwin = true;
        console.log("Player wins");
        const Win = document.createElement("div");
        Win.className = "WIN";

        
        const winHeading = document.createElement("h1");
        winHeading.textContent =`Player ${activePlayer+1} wins 😎`;
        winHeading.className = "Win-heading";

   
        Win.appendChild(winHeading);
        main_container.appendChild(Win);

       
    }


    player1.classList.toggle("active-color");  
    player2.classList.toggle("active-color");  

    document.querySelector(`.current-score-${activePlayer}`).textContent = 0; 
    currentScore = 0;
    activePlayer = activePlayer === 0? 1 : 0;
})



New_game_btn.addEventListener("click",()=>
{
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    Current_Score.textContent= 0;

    
    const winContainer  =document.querySelector(".WIN");
    console.log(winContainer);

    winContainer.className = "hiddenWin";
    winContainer.style.display ="none";
    winContainer.classList.remove(".WIN");

    activePlayer = 0;   
})
