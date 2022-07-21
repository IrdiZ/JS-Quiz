const quizData = [
    {
        question: 'How do programmers open a Jar?',
        a: 'With their hands',
        b: 'Telekinesis',
        c: 'They use Java',
        d: 'Throw it at the wall',
        correct: 'c' 
    }, 
    {
        question: 'Which company developed JavaScript?',
        a: 'Netscape',
        b: 'SoftBank',
        c: 'Microsoft',
        d: 'AlgoExpert',
        correct: 'a'
    },
    {
        question: 'Which company was behind the creation of Java?',
        a: 'Microsoft',
        b: 'Sun Microsystems',
        c: 'Moon Microsystems',
        d: 'Apple',       
        correct: 'b'
    },
    {
        question: 'What was the original name for JAVA?',
        a: 'C+',
        b: 'Oak',
        c: 'Lisp',
        d: 'Ada',
        correct: 'b'
    },
    {
        question: 'When was the first mechanical computer built?',
        a: '1822',
        b: '1991',
        c: '2001',
        d: '1898',
        correct: 'a'
    },
    {
        question: 'Who invented computer science?',
        a: 'Charles Babbage',
        b: 'Alan Turing',
        c: 'Linus Torvalds',
        d: 'Dennis Ritchie',
        correct: 'b'
    },
    {
        question: 'What was the name of the computer company that was named after the founders memories of a summer in an Orchard in Oregon?',
        a: 'AirBnb',
        b: 'Uber',
        c: 'Apple',
        d: 'PiedPiper',
        correct: 'c'
    },
    {
        question: 'A digital circuit capable of holding a single digit.',
        a: 'Pixel',
        b: 'Bit',
        c: 'Key field',
        d: 'Flip-flop',
        correct: 'd'
    },
    {
        question: 'A means of compressing images by blurring the boundaries between different colors while maintaining all brightness information',
        a: 'JPEG',
        b: 'LZW',
        c: 'MIDI',
        d: 'GIF',
        correct: 'a'
    },
    {
        question: 'Bill Gates first computer program was',
        a: 'Virtual Private Network',
        b: 'Chat App',
        c: 'Minesweeper Game',
        d: 'Tic-Tac-Toe',
        correct: 'd'
    }

];
const quizData2 = [
    {
        question: 'Area 51 is located in which US state?',
        a: 'Nevada',
        b: 'Alaska',
        c: 'Texas',
        d: 'California',
        correct: 'a' 
    }, 
    {
        question: 'Which American president appears on a one-dollar bill?',
        a: 'George Washington',
        b: 'James Monroe',
        c: 'James Buchanan',
        d: 'John Adams',
        correct: 'a'
    },
    {
        question: 'What colour is the "Ex" in FedEx Ground?',
        a: 'Yellow',
        b: 'Brown',
        c: 'Green',
        d: 'Blue',
        correct: 'c'
    },
    {
        question: 'What is Cynophobia the fear of',
        a: 'Fear of clowns',
        b: 'Fear of maniacs',
        c: 'Fear of dogs',
        d: 'Fear of fear',
        correct: 'c'
    },
    {
        question: 'The Flag of the European Union has how many stars on it?',
        a: '11',
        b: '12',
        c: '13',
        d: '14',
        correct: 'b'
    },
    {
        question: 'What is the worlds most expensive spice by weight?',
        a: 'Paprika',
        b: 'Salt',
        c: 'Saffron',
        d: 'Tumeric',
        correct: 'c'
    },
    {
        question: 'What alcoholic drink is mainly made from juniper berries?',
        a: 'Whiskey',
        b: 'Vodka',
        c: 'Jägermeister',
        d: 'Gin',
        correct: 'd'
    },
    {
        question: 'What was the original name of the search engine "Google"?',
        a: 'BackRub',
        b: 'ExtremeSearch',
        c: 'Mímir',
        d: 'DuckDuckGo',
        correct: 'a'
    },
    {
        question: 'Which movie is known for this famous quote: “You Talkin’ To Me?"?',
        a: 'Rocky',
        b: 'Casino',
        c: 'Taxi Driver',
        d: 'Pulp Fiction',
        correct: 'c'
    },
    {
        question: 'Who was the director for Interstellar?',
        a: 'Christopher Nolan',
        b: 'Martin Scorsese',
        c: 'Steven Spielberg',
        d: 'Quentin Tarantino',
        correct: 'a'
    }
];
const quizData3 = [
    {
        question: 'In the state of Georgia, it’s illegal to eat what with a fork?',
        a: 'Turtle',
        b: 'Pigeon',
        c: 'Fried chicken',
        d: 'Cockroach',
        correct: 'c' 
    },
    {
        question: 'Iceland diverted roads to avoid disturbing communities of what?',
        a: 'Elves',
        b: 'Warlocks',
        c: 'Paladins',
        d: 'Gods',
        correct: 'a' 
    },
    {
        question: 'When held to ultraviolet light, what animal’s urine glows in the dark?',
        a: 'Jackal',
        b: 'Cat',
        c: 'Rat',
        d: 'Amazon Owl',
        correct: 'b' 
    },
    {
        question: 'Where do kiwi fruits originally come from?',
        a: 'China',
        b: 'Brazil',
        c: 'Albania',
        d: 'Mexico',
        correct: 'a' 
    },
    {
        question: 'What is the number one seller at Walmart?',
        a: 'Guns',
        b: 'Water',
        c: 'Bananas',
        d: 'Paint',
        correct: 'c' 
    },
    {
        question: 'Where were the fortune cookies invented?',
        a: 'San Francisco',
        b: 'Boston',
        c: 'Chicago',
        d: 'Philadelphia',
        correct: 'a' 
    },
    {
        question: 'In Which City Was John F Kennedy Assassinated?',
        a: 'Dallas',
        b: 'Memphis',
        c: 'Las Vegas',
        d: 'Nashville',
        correct: 'a' 
    },
    {
        question: 'What is James Bond’s preferred drink of choice?',
        a: 'Martini',
        b: 'Whiskey',
        c: 'Gin',
        d: 'Vodka',
        correct: 'a' 
    },
    {
        question: 'Which soft drink was invented during WW2?',
        a: 'Cola',
        b: 'Fanta',
        c: 'Sprite',
        d: 'Dr. Pepper',
        correct: 'b' 
    },
    {
        question: 'Where were the Hanging Gardens?',
        a: 'Babylon',
        b: 'Albania',
        c: 'Greece',
        d: 'Persia',
        correct: 'a' 
    }
];
const quizData4 = [
    {
        question: 'Who was Pam engaged to before Jim?',
        a: 'Bob',
        b: 'Roy',
        c: 'Tom',
        d: 'James',
        correct: 'b' 
    },
    {
        question: 'What was the name of Jan Levinsons assistant at corporate?',
        a: 'Hunter',
        b: 'Brock',
        c: 'Chad',
        d: 'John',
        correct: 'a' 
    },
    {
        question: 'Schrute boys must learn how many rules before the age of 5?',
        a: '200',
        b: '40',
        c: '2',
        d: '1000',
        correct: 'b' 
    },
    {
        question: 'What does Michael pretend to fire Pam over in season one?',
        a: 'Stealing post-it notes',
        b: 'Not answering the phone',
        c: 'Wearing her glasses',
        d: 'Killing Stanley',
        correct: 'a' 
    },
    {
        question: 'Who did Kevin get for Secret Santa?',
        a: 'Michael',
        b: 'Himself',
        c: 'Angela',
        d: 'Dwight',
        correct: 'b' 
    },
    {
        question: 'Pam convinces which coworker that hes being recruited by the CIA?',
        a: 'Dwight',
        b: 'Jim',
        c: 'Michael',
        d: 'Ted',
        correct: 'a' 
    },
    {
        question: 'Who does Michael hit with a car?',
        a: 'Meredith',
        b: 'Bob Vance of Vance Refrigeration',
        c: 'Jan',
        d: 'Toby',
        correct: 'a' 
    },
    {
        question: 'Which actor plays Dwight Schrute?',
        a: 'John Krasinski',
        b: 'Rainn Wilson',
        c: 'Steve Carell',
        d: 'Ed Helms',
        correct: 'b' 
    },
    {
        question: 'What kind of shower does Michael say he threw for Jan after she had a baby?',
        a: 'Baby shower',
        b: 'Silver shower',
        c: 'Golden shower',
        d: 'Water shower',
        correct: 'c' 
    },
    {
        question: 'What is Kevins signature dish?',
        a: 'Blueberry Pie',
        b: 'Chili',
        c: 'Buffalo Chicken',
        d: 'Fried Snails',
        correct: 'b' 
    }
];