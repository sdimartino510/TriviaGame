$(document).ready(function() {

    //"start game" button sets the game up: starts timer at 2 minutes (120 sec), and populates 10 questions with 4 multiple choice answers each, and a submit button.

    $(document).on("click", ".start-button", function() {
        console.log("click");
        $(".hidden-box").css("display", "block");
        $(".start-button").css("display", "none");

        newFunction(timer);

        $(".timer").text("Time Remaining: " + time + " seconds");
        
    })

    var clockRunning = false;
    var time = 120;

    function timer() {

        //  TODO: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            time--;
            intervalId = setInterval(-1000);
            clockRunning = true;
        }
      
      }

    //   function timeConverter(t) {

    //     //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    //     var minutes = Math.floor(t / 60);
    //     var seconds = t - (minutes * 60);
      
    //     if (seconds < 10) {
    //       seconds = "0" + seconds;
    //     }
      
    //     if (minutes === 0) {
    //       minutes = "00";
    //     }
      
    //     else if (minutes < 10) {
    //       minutes = "0" + minutes;
    //     }
      
    //     return minutes + ":" + seconds;
    //   }

    //   function count() {

    //     //  Decrement time by 1.
      
    //     time--;
      
        //  TODO: Get the current time, pass that into the timeConverter function,
        //        and save the result in a variable.
      
        // const convertedTime = timeConverter(time);
      
        //  TODO: Use the variable you just created to show the converted time in the "display" div.
      
        // $("#display").text(convertedTime);
      
      

      console.log(time);

    //Each multiple choice option will have a radio button to select it. Only one option can be selected.

    //Submit button will check answers and display number correct, number incorrect, and number unanswered.

    //If game timer reaches zero, call submit button function (end game).


})

function newFunction(timer) {
    timer();
}
