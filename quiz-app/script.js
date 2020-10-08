const quizData = [
    {
        question : 'how old is floridia?',
        a  : '10',
        b : '20',
        c : '30',
        correct : 'c'
    },
    {
        question : 'what is the best language?',
        a  : 'java',
        b : 'c',
        c : 'python',
        correct : 'a'
    },
    {
        question : 'what is your favourite food?',
        a : 'meat',
        b : 'rice',
        c : 'fish',
        correct : 'b'
    }
]


let currentQuiz = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submit_button = document.getElementById("submit");

loadQuiz();

function loadQuiz()
{
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function getSelected()
{
    const answerEl = document.querySelectorAll("answer");
    console.log("hio");
    let answer = undefined;

    answerEls.forEach((answerEl)=>
    {
        if(answerEl.checked)
        {
            answer= answerEl.id; 
        }
    });
    return answer;  
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submit_button.addEventListener("click",()=>{
    
    const  answer = getSelected();
    console.log(answer);

    if(answer)
    {
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length)
        {
        loadQuiz();
        }
        else{
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
      
});