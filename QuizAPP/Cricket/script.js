const questions = [{
    question:"How many players are there in each cricket team on the field during a match?",
    answers: [
        {text:"8", correct: false},
        {text:"10", correct: false},
        {text:"11", correct: true},
        {text:"12", correct: false},
    ]
},
{
    question:"What is the name of the three wooden stumps topped by two bails on which the ball is aimed?",
    answers: [
        {text:"Wicket", correct: true},
        {text:"Pitch", correct: false},
        {text:"Boundary", correct: false},
        {text:"Crease", correct: false},
    ]
},
{
    question:"Which format of cricket involves two teams playing a single match over a maximum of 50 overs per side?",
    answers: [
        {text:"Test Match", correct: false},
        {text:"One Day International (ODI)", correct: true},
        {text:"Twenty20 (T20)", correct: false},
        {text:"The Ashes", correct: false},
    ]
},
{
    question:"What is the term used to describe a batsman who scores 100 runs or more in an innings?",
    answers: [
        {text:"Wicket-keeper", correct: false},
        {text:"All-rounder", correct: false},
        {text:"Captain", correct: false},
        {text:"Centurion", correct: true},
    ]
},
{
    question:"Which country is considered the birthplace of cricket?",
    answers: [
        {text:"India", correct: false},
        {text:"Australia", correct: false},
        {text:"England", correct: true},
        {text:"South Africa", correct: false},
    ]
},
{
    question:"How many runs are awarded for hitting the ball over the boundary rope without it bouncing?",
    answers: [
        {text:"1", correct: false},
        {text:"2", correct: false},
        {text:"4", correct: false},
        {text:"6", correct: true},
    ]
},
{
    question:"What is the name of the flat, oval-shaped area in the center of the field where the bowler runs to deliver the ball?",
    answers: [
        {text:"Pitch", correct: true},
        {text:"Square", correct: false},
        {text:"Wicket", correct: false},
        {text:"Boundary", correct: false},
    ]
},
{
    question:"Which bowler holds the record for the most wickets taken in Test cricket history?",
    answers: [
        {text:"Shane Warne (Australia)", correct: false},
        {text:"Glenn McGrath (Australia)", correct: false},
        {text:"Muttiah Muralitharan (Sri Lanka)", correct: true},
        {text:"James Anderson (England)", correct: false},
    ]
},
{
    question:"What is the name of the prestigious trophy awarded to the winner of the Cricket World Cup?",
    answers: [
        {text:"The Ashes", correct: false},
        {text:"The Oval Trophy", correct: false},
        {text:"The Champions Trophy", correct: false},
        {text:"The ICC Cricket World Cup", correct: true},
    ]
},
{
    question:"Which batting position traditionally involves opening the innings and facing the first deliveries?",
    answers: [
        {text:"Spinner", correct: false},
        {text:"Wicket-keeper", correct: false},
        {text:"Pace bowler", correct: false},
        {text:"Opener", correct: true},
    ]
}
];

const questionElement = document.getElementById("question");
const answerButton =  document.getElementById("answers");
const nextButton = document.getElementById("nxt-btn");
const homeButton = document.getElementById("home");

let currQuestionIndex = 0;
let Score = 0;

function startQuiz(){
    currQuestionIndex = 0;
    Score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currQuestion = questions[currQuestionIndex];
    let questionNo = currQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currQuestion.question;

    currQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display= "none";
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect){
        selectBtn.classList.add("correct");
        Score++;
    } else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
            button.disabled = true; 
    });
    nextButton.style.display = "block" ;
}

function showScore(){
    resetState();
    questionElement.innerHTML =`you scored ${Score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    homeButton.style.display = "block";
}
function handleNextButton(){
    currQuestionIndex++;
    if(currQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
})
startQuiz();