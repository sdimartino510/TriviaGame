$(document).ready(function() {

    var clockRunning = false;
    var time = 121;
    var intervalId = 0;

    function update() {

        $(".timer").text("Time Remaining: " + time + " seconds");

    }

    $(document).on("click", ".start-button", function() {

        $(".hidden-box").css("display", "block");

        $(".start-button").css("display", "none");

        newFunction(timer);

        update();
        
    })
    
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

    function countCorrectAnswers() {

        var questions = ["yearSunk", "captain", "yearFound", "whoFound", "howSunk", "howDeep", "soulsLost", "funnel"];

        for (var i = 0; i < questions.length; i++) {

            if (checkAnswer(questions[i]) < 0) {
                incorrectAnswer++

            } else if (checkAnswer(questions[i]) > 0) {
                correctAnswer++

            } else {
                notAnswered++

            }
        }

        console.log(correctAnswer);
        console.log(incorrectAnswer);
        console.log(notAnswered);

    }

    function displayResults() {

        $(".correct-answers").text("Correct Answers: " + correctAnswer);

        $(".incorrect-answers").text("Incorrect Answers: " + incorrectAnswer);

        $(".unanswered").text("Unanswered Questions: " + notAnswered);

    }

    $(document).on("click", ".submit-button", function() {

        $(".hidden-box").css("display", "none");

        $(".results-box").css("display", "block");

        $(".history-lesson").css("display", "block");

        countCorrectAnswers();

        displayResults();

        clearInterval(intervalId);

    });


})

function newFunction(timer) {

    timer();

}
