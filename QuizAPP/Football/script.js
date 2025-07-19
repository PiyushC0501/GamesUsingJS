const questions = [{
    question:"Which of the following is the highest governing body of association football?",
    answers: [
        {text:"International Olympic Committee (IOC)", correct: false},
        {text:"International Federation of Association Football (FIFA)", correct: true},
        {text:"Union of European Football Associations (UEFA)", correct: false},
        {text:"National Football League (NFL)", correct: false},
    ]
},
{
    question:"How many players are allowed on the field from each team during a football match?",
    answers: [
        {text:"1904", correct: false},
        {text:"1930", correct: false},
        {text:"1950", correct: true},
        {text:"1970", correct: false},
    ]
},
{
    question:"In which year was the first FIFA World Cup held?",
    answers: [
        {text:"Argentina", correct: false},
        {text:"Italy", correct: false},
        {text:"Germany", correct: false},
        {text:"Brazil", correct: true},
    ]
},
{
    question:"Which country has won the most FIFA World Cup titles?",
    answers: [
        {text:"Suspension", correct: false},
        {text:"Penalty", correct: false},
        {text:"Red card", correct: true},
        {text:"Substitution", correct: false},
    ]
},
{
    question:"What is the term used for a player who is sent off the field for receiving two yellow cards?",
    answers: [
        {text:"Europe", correct: true},
        {text:"Asia", correct: false},
        {text:"Africa", correct: false},
        {text:"South America", correct: false},
    ]
},
{
    question:"The Champions League UEFA is the premier club football competition in which region?",
    answers: [
        {text:"Cristiano Ronaldo", correct: false},
        {text:"Lionel Messi", correct: false},
        {text:"Alan Shearer", correct: true},
        {text:"Thierry Henry", correct: false},
    ]
},
{
    question:"Who is the all-time top scorer in the history of the Premier League?",
    answers: [
        {text:"Hand Ball", correct: false},
        {text:"Offside", correct: true},
        {text:"Corner Kick", correct: false},
        {text:"Free Kick", correct: false},
    ]
},
{
    question:"What is the name of the offside rule in football?",
    answers: [
        {text:"a", correct: false},
        {text:"b", correct: true},
        {text:"c", correct: false},
        {text:"d", correct: false},
    ]
},
{
    question:"Which of the following is NOT a legal way to score a goal in football?",
    answers: [
        {text:"Kicking the ball", correct: false},
        {text:"Heading the ball", correct: false},
        {text:"Kicking the ball into the net", correct: false},
        {text:"Heading the ball with the arms", correct: true},
    ]
},
{
    question:"What is the name of the prestigious award given to the best player in the world each year?",
    answers: [
        {text:"European Golden Shoe", correct: false},
        {text:"FIFA Ballon d'Or", correct: true},
        {text:"UEFA Men's Player of the Year Award", correct: false},
        {text:"Champions League Player of the Year", correct: false},
    ]
}];

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