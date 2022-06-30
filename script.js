const quizData = [
    {
        question: 'Which is a programming lang?',
        a: 'Assembly',
        b: 'lot',
        c: 'tol',
        d: 'rofl',
        correct: 'a' 
    }, 
    {
        question: 'US President',
        a: 'Bush',
        b: 'Obama',
        c: 'Trump',
        d: 'Biden',
        correct: 'd'
    },
    {
        question: 'Most popular prog lang',
        a: 'Javascript',
        b: 'Python',
        c: 'Java',
        d: 'c++',
        correct: 'a'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hyperturn MoonLanding',
        c: 'High Turing Machine Localisation',
        d: 'HElicopters Terminals Motorboats LAmborginis',
        correct: 'a'
    },
    {
        question: 'What year was JS launched?',
        a: '2020',
        b: '1995',
        c: '1996',
        d: '1994',
        correct: 'b'
    }
];
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData
    [currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

submitBtn.addEventListener("click", () => {
    currentQuiz++;
    if(currentQuiz< quizData.length){
        loadQuiz();
    } else {
        //results
    }
    
});