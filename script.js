
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// What will I need?
// HTML document
    // questions to be answered
    // button to start the quiz
    // buttons associated with the questions
// Javascript document
    // A timer that counts down
    // Actions attached to the buttons
    // A scoring system
        // a place to store the score with initials.
    //A link to the timer to subtract time when questions is answered incorrectly
   //create interval
    var timerEl = document.querySelector(".timer");
    //selected element
    var sideEl = document.getElementById("side");
    //set starting time
    var timeLeft = 3;

    //added arrays with dummy questions
    var questions=[{
        question: "What is the state capitol of Nevada?",
        choices: ["Trilogy", "blank", "Las Vegas", "Carson City"],
        answer: "Carson City"
    },
    {
        question: "What is the state capitol of Nevada?",
        choices: ["Trilogy", "blank", "Las Vegas", "Carson City"],
        answer: "Carson City"
    },
    {
        question: "What is the state capitol of Nevada?",
        choices: ["Trilogy", "blank", "Las Vegas", "Carson City"],
        answer: "Carson City"
    },
    {
        question: "What is the state capitol of Nevada?",
        choices: ["Trilogy", "blank", "Las Vegas", "Carson City"],
        answer: "Carson City"
    }]

    function loop(){
        for (let i = 0; i < questions.length; i++) {
            console.log (questions[i])
            console.log (questions[i].choices[1])
        }
    }
    loop()

    var startEl = document.body.querySelector("#start");
     console.log(startEl)   
    function setTimer(){
        var timerInterval = setInterval(function(){
            timeLeft--;
            timerEl.textContent = timeLeft + " seconds to complete quiz.";

            //stop timer
            if (timeLeft === 0){
            clearInterval(timerInterval);
            sendText();
            }
        },1000);
        // console.log("hello")
    }

function startQuiz(){
    setTimer()

}


//send text
function sendText(){
    timerEl.textContent ="Time is up!  Your score is ";

}

startEl.addEventListener("click", startQuiz);


