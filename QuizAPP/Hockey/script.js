const questions = [{
    question:"In which Olympics was field hockey introduced for the first time?",
    answers: [
        {text:"International Olympic Committee (IOC)", correct: false},
        {text:"International Federation of Association Football (FIFA)", correct: true},
        {text:"Union of European Football Associations (UEFA)", correct: false},
        {text:"National Football League (NFL)", correct: false},
    ]
},
{
    question:`Which of the following is also known as /"Rink hockey/" ?`,
    answers: [
        {text:"1904", correct: false},
        {text:"1930", correct: false},
        {text:"1950", correct: true},
        {text:"1970", correct: false},
    ]
},
{
    question:"The highest governing body for field hockey is:",
    answers: [
        {text:"Argentina", correct: false},
        {text:"Italy", correct: false},
        {text:"Germany", correct: false},
        {text:"Brazil", correct: true},
    ]
},
{
    question:"How many players are allowed on the field for each team during a field hockey match?",
    answers: [
        {text:"Suspension", correct: false},
        {text:"Penalty", correct: false},
        {text:"Red card", correct: true},
        {text:"Substitution", correct: false},
    ]
},
{
    question:"Which country has won the most Olympic gold medals in field hockey (as of 2024)?",
    answers: [
        {text:"Europe", correct: true},
        {text:"Asia", correct: false},
        {text:"Africa", correct: false},
        {text:"South America", correct: false},
    ]
},
{
    question:"A player receives a green card during a field hockey match. What is the penalty?",
    answers: [
        {text:"Cristiano Ronaldo", correct: false},
        {text:"Lionel Messi", correct: false},
        {text:"Alan Shearer", correct: true},
        {text:"Thierry Henry", correct: false},
    ]
},
{
    question:`Who is known as the /"Wizard of Dribble/" in Indian hockey?`,
    answers: [
        {text:"Hand Ball", correct: false},
        {text:"Offside", correct: true},
        {text:"Corner Kick", correct: false},
        {text:"Free Kick", correct: false},
    ]
},
{
    question:"Which country hosted the first Men's Hockey World Cup in 1971?",
    answers: [
        {text:"a", correct: false},
        {text:"b", correct: true},
        {text:"c", correct: false},
        {text:"d", correct: false},
    ]
},
{
    question:"What is the maximum weight of a field hockey ball?",
    answers: [
        {text:"Kicking the ball", correct: false},
        {text:"Heading the ball", correct: false},
        {text:"Kicking the ball into the net", correct: false},
        {text:"Heading the ball with the arms", correct: true},
    ]
},
{
    question:"When was the Women's FIH Hockey World Cup last held (as of March 2024)?",
    answers: [
        {text:"European Golden Shoe", correct: false},
        {text:"FIFA Ballon d'Or", correct: true},
        {text:"UEFA Men's Player of the Year Award", correct: false},
        {text:"Champions League Player of the Year", correct: false},
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