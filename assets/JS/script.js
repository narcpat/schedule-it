var tasks = {};

// used the jQuery CheatSheet found at https://htmlcheatsheet.com/jquery/
$(document).ready(function () {
  // show today's date at the top of the calendar
  $("#currentDay").text(moment().format("LLLL")); //formatted based on https://devhints.io/moment

  // when save is clicked
  $(".saveBtn").click(function () {
    var taskText = $(this).siblings("textarea").val();
    var currentHr = $(this).parent().attr("id");
    console.log(currentHr, taskText);

    // Save to local storage
    localStorage.setItem(taskText, currentHr);

    // TODO Loop through the different saved divs and getItem

    // TODO set conditions for past, current and future states and trigger corresponding CSS
  });
});
