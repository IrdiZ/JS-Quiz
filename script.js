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
        question: 'Kim has just constructed her first for loop within the Java language. Which of the following is not a required part of a for loop?',
        a: 'Initialization',
        b: 'Condition',
        c: 'Variable',
        d: 'Increment',
        correct: 'c'
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
        question: 'Which is the tiniest known type of animal with a backbone?',
        a: 'frog',
        b: 'bird',
        c: 'fish',
        d: 'lizard',
        correct: 'a' 
    }, 
    {
        question: 'Growing up to 18 meters long, which is the world’s largest living fish?',
        a: 'whale shark',
        b: 'marlin',
        c: 'sailfish',
        d: 'manta ray',
        correct: 'a'
    },
    {
        question: 'Aside from other humans, which animal is responsible for the most human fatalities?',
        a: 'shark',
        b: 'snake',
        c: 'mosquito',
        d: 'hippopotamus',
        correct: 'c'
    },
    {
        question: 'Which of these animals swims in an upright position?',
        a: 'sea lion',
        b: 'seahorse',
        c: 'sea slug',
        d: 'sea urchin',
        correct: 'b'
    },
    {
        question: 'An individual of which type of animal was found to be at least 272 years old, suggesting that that type includes the world’s longest-living vertebrate?',
        a: 'Japanese Wagyu cattle',
        b: 'Canada goose',
        c: 'Indian elephant',
        d: 'Greenland shark',
        correct: 'd'
    }
];
const quizData3 = [
    {
        question: 'Which country has the largest population in the world?',
        a: 'Africa',
        b: 'Russia',
        c: 'United States',
        d: 'China',
        correct: 'd' 
    }, 
    {
        question: 'What American city is the Golden Gate Bridge located in?',
        a: 'New York City',
        b: 'San Francisco',
        c: 'Monaco',
        d: 'Los Angeles',
        correct: 'b'
    },
    {
        question: 'What is the capital of Canada?',
        a: 'Toronto',
        b: 'Ottawa',
        c: 'Montreal',
        d: 'Vancouver',
        correct: 'b'
    },
    {
        question: 'How many States does the United States consist of?',
        a: '48',
        b: '49',
        c: '50',
        d: '51',
        correct: 'c'
    },
    {
        question: 'What is the capital of Senegal?',
        a: 'Saint Louis',
        b: 'Dakar',
        c: 'Louga',
        d: 'Tambakunda',
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

    indexTemp = parseInt(category.id);

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
    if (indexTemp === 3){
        for (i = 0; i < quizData3.length; i++) {
            lolData[i] = quizData3[i];
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
category3.addEventListener("click", () => {

    changeQuiz(category3);
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