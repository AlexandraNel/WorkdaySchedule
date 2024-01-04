$(document).ready(function () {

var now = dayjs();

//event listener in jquery for clicking save button. saveTask function runs when clicked. 
$('.saveBtn').on('click', handleSaveTask);

//get existing local storage
$('.time-block').each(function (){
  var textAreaId = $(this).attr('id');
  populateTasks(textAreaId) 
})



//handleSaveTask to run on .saveBtn click event listener
function handleSaveTask(event) {
  event.preventDefault();

  //get the id of the closest text area to the clocked save button
  var textAreaId = $(this).closest('.time-block').attr('id');
  //grab the value of that text area
  var newTask = $(this).siblings('textarea').val();

  //call the populateTaskDivs function to  add existing local storage to time blocks
  populateTasks(textAreaId, newTask);
    //Set our local storage with the newTask once saved, textAreaId being the key, newTask being the value
  //this will replace existing tasks, as well as set new ones.
  localStorage.setItem(textAreaId, JSON.stringify(newTask));
}


    // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

//  if () 
// $('textarea').addClass('past');
// $('textarea').addClass('present');
// $('textarea').addClass('future');

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //add the date to the header of the doc (section id "current day"), 
  // in format ie Monday, Jan 04 2024)
   $('#currentDay').text(now.format('dddd, MMM DD YYYY'));
});

// Use class for "past", "present", and "future" to apply styles to the
//         time-block divs accordingly. The javascript will need to do this by
//         adding/removing these classes on each div by comparing the hour in the
//         id to the current hour. 