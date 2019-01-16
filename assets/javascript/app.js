$(document).ready(function() {

    //"start game" button sets the game up: starts timer at 2 minutes (120 sec), and populates 10 questions with 4 multiple choice answers each, and a submit button.

    $(document).on("click", ".start-button", function() {
        console.log("click");
        $(".hidden-box").css("display", "block");
        $(".start-button").css("display", "none");
        
    })

    //Each multiple choice option will have a radio button to select it. Only one option can be selected.

    //Submit button will check answers and display number correct, number incorrect, and number unanswered.

    //If game timer reaches zero, call submit button function (end game).


})