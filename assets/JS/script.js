// used the jQuery CheatSheet found at https://htmlcheatsheet.com/jquery/
$(document).ready(function () {
  // show today's date at the top of the calendar
  $("#currentDay").text(moment().format("LLLL")); //formatted based on https://devhints.io/moment

  // when save is clicked listen for input
  $(".saveBtn").on("click", function () {
    // gather values from siblings and parents
    var taskText = $(this).siblings(".description").val(); //traversing taken from https://htmlcheatsheet.com/jquery/
    var currentHr = $(this).parent().attr("id");

    // Save to local storage
    localStorage.setItem(currentHr, taskText);
  });

  // Load saved data per timeblock
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  // get current time and number of hours and compare to Moment.js
  function trackTime() {
    var currentTime = moment().hour();

    // loop through the different time blocks
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      // check current time and assign appropriate color to time-blocks
      if (timeBlock < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (timeBlock === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).addClass("future");
        $(this).removeClass("present");
      }
    });
  }
  trackTime();
});
