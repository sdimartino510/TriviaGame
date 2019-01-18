$(document).ready(function() {

    //part of timer function

    var clockRunning = false;
    var time = 91;
    var intervalId = 0;

    function update() {

        $(".timer").text("Time Remaining: " + time + " seconds");

    }

    //starts game by revealing questions and starting timer, also hides start button

    $(document).on("click", ".start-button", function() {

        $(".hidden-box").css("display", "block");

        $(".start-button").css("display", "none");

        newFunction(timer);

        update();
        
    })

    //ends game if timer runs out
    
    function timer() {

        var callback = function() {
            time -= 1;

            if (time === 0) {

                $(".hidden-box").css("display", "none");

                $(".results-box").css("display", "block");

                $(".history-lesson").css("display", "block");

                countCorrectAnswers();

                displayResults();

                clearInterval(intervalId);

            }

            update();

        };

        if (!clockRunning) {

            time--;

            intervalId = setInterval(callback, 1000);

            clockRunning = true;

        }
      
    }

    update();

    //checks if questions are answered correctly, incorrectly, or not answered and returns a value for each

    function checkAnswer(name) {

        // Positive number == answered correctly.
        // 0 == Not answered
        // Negative number == answered incorrectly.

        var slt = 'input[name=' + name + ']:checked';

        var results = $(slt);

        if (results.length === 0) {

            return 0;

        }
        
        if (results[0].value === answers[name]) {

            return 1;

        }
        
        return -1;

    }

    //"answer key"

    var notAnswered = 0;
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var answers = {
        "yearSunk": "1912",
        "captain": "Edward John Smith",
        "yearFound": "1985",
        "whoFound": "Robert Ballard",
        "howSunk": "An iceberg",
        "howDeep": "2.5 miles",
        "soulsLost": "1500",
        "funnel": "True"
    }

    //tallies correct, incorrect, and unanswered questions for later DOM update

    function countCorrectAnswers() {

        var questions = ["yearSunk", "captain", "yearFound", "whoFound", "howSunk", "howDeep", "soulsLost", "funnel"];

        for (var i = 0; i < questions.length; i++) {

            //checks if result of checkAnswer() is a negative number and increments incorrectAnswer

            if (checkAnswer(questions[i]) < 0) {

                incorrectAnswer++

            //checks if result of checkAnswer() is a positive number and increments correctAnswer

            } else if (checkAnswer(questions[i]) > 0) {

                correctAnswer++

            //otherwise increments notAnswered

            } else {

                notAnswered++

            }
        }

    }

    //function to update the DOM with game score

    function displayResults() {

        $(".correct-answers").text("Correct Answers: " + correctAnswer);

        $(".incorrect-answers").text("Incorrect Answers: " + incorrectAnswer);

        $(".unanswered").text("Unanswered Questions: " + notAnswered);

    }

    //reveals the end of game page with game score and factoids, also stops timer

    $(document).on("click", ".submit-button", function() {

        $(".hidden-box").css("display", "none");

        $(".results-box").css("display", "block");

        $(".history-lesson").css("display", "block");

        countCorrectAnswers();

        displayResults();

        clearInterval(intervalId);

    });


})

//part of timer function

function newFunction(timer) {

    timer();

}
