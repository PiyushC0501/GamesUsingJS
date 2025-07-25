const inputs = document.querySelector(".inputs"),
hint=document.querySelector(".hint span"),
guessLeft=document.querySelector(".guess-left span"),
wrongLetter=document.querySelector(".wrong-letter span"),
resetBtn= document.querySelector(".reset-btn"),
typingInput= document.querySelector(".typing-input");

let word, maxGuesses, corrects=[], incorrects = [];

function randomWord(){
    let ranObj = wordList[Math.floor(Math.random()* wordList.length)];
    word = ranObj.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    corrects = []; incorrects = [];

    hint.innerText = ranObj.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrects;

    let html="";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();

function initGame(e){
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(`${key}`) && !corrects.includes(key)){
        if(word.includes(key)){
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    corrects += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }   
        }
        else{
            maxGuesses--;
            incorrects.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrects;
    }
    typingInput.value = "";

   setTimeout(()=>{
    if(corrects.length === word.length){
        alert(`Congrats! You found the word ${word.toUpperCase()}`);
        return randomWord();
    }else if(maxGuesses<1){
     alert("Game Over! You don't Hava remaining Guesses.");
     for(let i=0; i<word.length; i++){
     inputs.querySelectorAll("input")[i].value = word[i];
     }
    }
   },100);
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());