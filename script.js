const quizData = [
    {
        question: 'Which of these is a programming language?',
        a: 'HTML',
        b: 'Malbolge',
        c: 'MOVA',
        d: 'FTP',
        correct: 'b' 
    }, 
    {
        question: 'Who is the current US President? (2022)',
        a: 'George Bush',
        b: 'Barack Obama',
        c: 'Donald Trump',
        d: 'Joe Biden',
        correct: 'd'
    },
    {
        question: 'Which is the most popular programming language? (2022)',
        a: 'Javascript',
        b: 'Python',
        c: 'Java',
        d: 'c++',
        correct: 'a'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hyper Turbo Moon Landing',
        b: 'High Turing Machine Localisation',
        c: 'Holy Technical Machine Level',
        d: 'Hypertext Markup Language',
        correct: 'd'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '2020',
        b: '1995',
        c: '1996',
        d: '1994',
        correct: 'b'
    }
];
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnsw();
    const currentQuizData = quizData
    [currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    const answersEls = document.querySelectorAll('.answer');
    
    let answer = undefined;

    answersEls.forEach((answerEl)=> {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
return answer;
}

function deselectAnsw(){
    const answersEls = document.querySelectorAll('.answer');
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz< quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score} /
            ${quizData.length} questions.</h2>`;
        }
    }
});