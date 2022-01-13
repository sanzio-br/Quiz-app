const quizData =[
    {
        question: 'Who was the first president of Kenya?',
        a:'Uhuru Kenyatta',
        b:'Raila Odinga',
        c:'Jomo Kenyatta',
        d:'Mwai Kibaki',
        correct:'c'
    },
    {
        question: 'When did Kenya gained independence?',
        a:1960,
        b:2002,
        c:1964,
        d:1963,
        correct:'d'
    },
    {
        question: 'When was the 2010 new constitution implemented?',
        a:2010,
        b:2013,
        c:2012,
        d:2017,
        correct:'b'
    },
    {
        question: 'What is the maximum Time a president can be in power in Kenya?',
        a:'20 years',
        b:'5 years',
        c:'10 years',
        d:'7 years',
        correct:'c'
    },
    {
        question: 'How many chapters are there in the Kenyan Constitution?',
        a:18,
        b:22,
        c:24,
        d:47,
        correct:'a'
    }
]
const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.choice');
const questionEl = document.querySelector('.question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('button')

let currentQuiz = 0;
let score = 0;

function deselectAnswers(){
    answerElements.forEach((answer) =>
        
    (answer.checked = false));
};
function getSelected(){
    let answer; 

    answerElements.forEach((answerEl) => {
        if(answerEl.checked) {
           answer = answerEl.id;
        }
    });
    return answer;
}

loadQuiz();


function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;  
    
};
submitBtn.addEventListener('click',()=>{

    const answer = getSelected();

        if (answer) {
            if (answer == quizData[currentQuiz].correct){
                score++;
            }
        }
    
    currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else
        {
            quiz.innerText = `You answered correctly at ${score}/${quizData.length} questions.`
        }   
})
