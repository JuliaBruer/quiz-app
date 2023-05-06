let questions = [
    {
        "question": "Wie heißt das bekannteste und beliebteste Bild des deutschen Malers Carl Spitzweg?",
        "answer_1": "Der stille Zecher",
        "answer_2": "Die mittellose Amme",
        "answer_3": "Der arme Poet",
        "answer_4": "Der bescheidene Dichter",
        "right_answer": 3
    },
    {
        "question": "Zu welcher Inselgruppe gehört Barbados?",
        "answer_1": "Balearen",
        "answer_2": "Azoren",
        "answer_3": "Hawaii-Inseln",
        "answer_4": "Kleinen Antillen",
        "right_answer": 4
    },
    {
        "question": "Wohin musste Kaiser Heinrich IV im Jahre 1077 reisen, um vom päpstlichen Bann befreit zu werden?",
        "answer_1": "nach Aachen",
        "answer_2": "nach Canossa",
        "answer_3": "nach Rom",
        "answer_4": "nach Konstantinopel",
        "right_answer": 2
    },
    {
        "question": "Was ist die Hauptstadt von Turkmenistan?",
        "answer_1": "Türkmenabat",
        "answer_2": "Daşoguz",
        "answer_3": "Aşgabat",
        "answer_4": "Mary",
        "right_answer": 3
    },
    {
        "question": "Welcher Fisch hat keine Gräten?",
        "answer_1": "Silberfisch",
        "answer_2": "Goldbarsch",
        "answer_3": "Kabeljau",
        "answer_4": "Spiegelkarpfen",
        "right_answer": 1
    },
    {
        "question": "In welchem Jahr wurde das Empire State Building in New York eröffnet?",
        "answer_1": "1955",
        "answer_2": "1924",
        "answer_3": "1931",
        "answer_4": "1940",
        "right_answer": 3
    },
    {
        "question": "Welches Elementsymbol besitzt Uran?",
        "answer_1": "U",
        "answer_2": "Ur",
        "answer_3": "Ua",
        "answer_4": "Un",
        "right_answer": 1
    },
    {
        "question": "Welche Gesamtfallhöhe hat der höchste Wasserfall der Welt?",
        "answer_1": "979 Meter",
        "answer_2": "812 Meter",
        "answer_3": "628 Meter",
        "answer_4": "551 Meter",
        "right_answer": 1
    },
    {
        "question": "Aus welche Land stammt der ursprüngliche Minecraft-Programmierer?",
        "answer_1": "Irland",
        "answer_2": "Niederlande",
        "answer_3": "Schweden",
        "answer_4": "Polen",
        "right_answer": 3
    },
    {
        "question": "Was können Katzen nicht schmecken?",
        "answer_1": "bitter",
        "answer_2": "sauer",
        "answer_3": "salzig",
        "answer_4": "süß",
        "right_answer": 4
    }
];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display:none';
    document.getElementById('right-questions').innerHTML = rightQuestions;
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('header-img').src = 'img/win.jpg';
}

function updateNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-img').src = 'img/questions.jpg';
    document.getElementById('question-body').style = '';
    document.getElementById('end-screen').style = 'display:none';

    currentQuestion = 0;
    rightQuestions = 0;
    init();
}