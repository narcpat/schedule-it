$(document).ready(function () {
  // show today's date at the top of the calendar
  $("#currentDay").text(moment().format("LLLL")); //formatted based on https://devhints.io/moment
});
