var startBtn = document.getElementById("startBtn");
var timer = document.getElementById("cDown");
var timeLeft = document.getElementById("time");
var questionLine = document.getElementById("questions");
var choices = document.getElementById("btn");
var clock = 20;
var gameTimer;
var questionArray = [{
        question: "What is the DOM?",
        options: ["Dyn-O-Mite", "Document Object Model", "Doest Order Me ", "Document Other Module"],
        answer: "something"
    },
    {
        question: "What is not a data type of Javascript?",
        options: ["stings", "numbers", "booleans", "float"],
        answer: "float"
    },
    {
        question: "In the following array, which is index 3? [car, dog, November, girl]",
        options: ["dog", "November", "car", "girl"],
        answer: "November"
    },
    {
        question: "If you try to reference an index not there, how will it come back?",
        options: ["0", "undefined", "error 404", "unknown"],
        answer: "undefined"
    },
    {
        question: "What does D.R.Y. stand for?",
        options: ["Don't repeat yourself", "DOM return yield", "Don't remember yet", "Doesn't repeat yet"],
        answer: "Don't repeat yourself"
    },
    {
        question: "What symbol is used with an array?",
        options: ["{}", "[]", "()", "<>"],
        answer: "[]"

    },
    {
        question: "Inside which tag do you put the JS tag?",
        options: ["<h3>", "<javascript>", "<script>", "<body>"],
        answer: "<script",
    }


]
var questionArrayIndex = 0;
var result = document.getElementById("answer");
var endScreenEl = document.getElementById("end-screen");


startBtn.addEventListener("click", function () {
    console.log("I was clicked");

    this.setAttribute("class", "hide");
    timer.removeAttribute("class", "hide");

});
startQuiz();{
}
// I have attempted many different ways to get the questions to star but I have been unsuccessful - therefore this is a waste of time for you  
// if I had them working - i would add a for loop to cycle thru the questions and confirm answers are correct 

function startQuiz() {
    gameTimer = setInterval(startTimer, 1000);
    // startQuestions();
}

function startTimer() {
    clock--;
    timeLeft.textContent = clock;
    if (clock <= 0) {
        clock = 0;
        timeLeft.textContent = clock;
        // endQuiz();
    }
}

function endQuiz() {
    clearInterval(gameTimer);
    endScreenEl.style.display = "block";
    finalScore.textContent = time;
     var submitBtn = document.getElementById("submit");
   submitBtn.onclick = function (event) {
}}

// function startQuestions() {
//     questionArray.addEventListener("click", function () {


//             }



// this was my plan but i wasnt able to execute it 



//create a global index so I can call questionArray - index
// create a for loop to populate options within buttons - give it a class and a value - can check the value 
//give each button their own onclick = to answer check function  - give value of buttons - give attribute of value 
//inside answer checker function - if correct - can show correct/incorrect div - by removing adding class - use if/else stmt
//after check answer increase global index & then run start questions function again 
//set high  score page