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
        question: 'Who is the current Kyrgyzstan President? (2022)',
        a: 'Genghis Khan',
        b: 'Henry VIII of England',
        c: 'Yaropolk I',
        d: 'Sadyr Japarov',
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
        d: '1991',
        correct: 'b'
    }
];
const quizData2 = [
    {
        question: 'Which of these?',
        a: 'HTML',
        b: 'Malbolge',
        c: 'MOVA',
        d: 'loti',
        correct: 'b' 
    }, 
    {
        question: 'Who is the current Kyrgyzstan President? (2022)',
        a: 'Genghis Khan',
        b: 'Henry VIII of England',
        c: 'Yaropolk I',
        d: 'Sadyr Japarov',
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
        d: '1991',
        correct: 'b'
    }
];
lolData = [];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const category1 = document.getElementById('1');
const category2 = document.getElementById('2');
const category3 = document.getElementById('3');


let currentQuiz = 0;
let answer = undefined;
let score = 0;
let indexTemp = 0;

function changeQuiz(category){

    indexTemp = parseInt(category.innerHTML);

    if (indexTemp === 1){
        for (i = 0; i < quizData.length; i++) {
            lolData[i] = quizData[i];
        }
        loadQuiz();
    }
    if (indexTemp === 2){
        for (i = 0; i < quizData2.length; i++) {
            lolData[i] = quizData2[i];
        }
        loadQuiz();
    } 
}

quiz.style.display = "none";

while(loadQuiz === !undefined){
    loadQuiz();
}

function loadQuiz(){
    quiz.style.display = "block";
    deselectAnsw();
    const currentQuizData = lolData
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

category1.addEventListener("click", () => {

    changeQuiz(category1);
});
category2.addEventListener("click", () => {

    changeQuiz(category2);
});

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if(answer){
        if (answer === lolData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < lolData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score} /
            ${lolData.length} questions.</h2>
            <button onClick="location.reload()">
            Start Again</button>`;
        }
    }
});