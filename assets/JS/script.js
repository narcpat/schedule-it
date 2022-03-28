var tasks = {};

// used the jQuery CheatSheet found at https://htmlcheatsheet.com/jquery/
$(document).ready(function () {
  // show today's date at the top of the calendar
  $("#currentDay").text(moment().format("LLLL")); //formatted based on https://devhints.io/moment
});

// !todo - need to create task function which will be linked to the time entered field use ID.
var createTask = function (taskText) {
  var taskP = $("<p>").text(taskText);

  // append p element to textarea
};

// to save tasks to local storage
var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// to retrieve tasks saved in local storage
var loadTasks = function () {
  tasks = JSON.parse(localStorage.getItem("tasks"));
};

// when save is clicked
$(".saveBtn").click(function () {
  var taskText = $(".description").val();
});

// TO DO -- need to use the CSS classes to color code the timeblocks that are past and future
