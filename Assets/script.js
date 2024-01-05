$(document).ready(function () {

  var now = dayjs(); //now variable gets todays date and time from dayjs

  $('.time-block').each(function () { //loop through every time block
    var timeBlockId = $(this).attr('id'); //get the id attribute from time block 
    var savedTask = localStorage.getItem(timeBlockId); //in local storage if the time-block id has a matching key, get that item

    if (savedTask) { //if the item savedTask exists in local storage
      $(this).find('.description').val(savedTask); //find the 'description' class of this time-block, insert the retrieved savedTask }
    }
  });

  //event listener in jquery for clicking save button.  
  $('.saveBtn').click(function () {
    var timeBlockId = $(this).parent().attr('id'); //get the id from the time block that is the parent of the clicked button
    var taskText = $(this).siblings('.description').val(); //get the text (.val) from the text area class .descrption

    localStorage.setItem(timeBlockId, taskText) //store in localstorage using the id of the div as key and the text input as value.
  });

//  if () 
// $('textarea').addClass('past');
// $('textarea').addClass('present');
// $('textarea').addClass('future');

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  

//sets day, month, date, and year in the currentDay ID tag of the header.
   $('#currentDay').text(now.format('dddd, MMM DD YYYY'));
});

// Use class for "past", "present", and "future" to apply styles to the
//         time-block divs accordingly. The javascript will need to do this by
//         adding/removing these classes on each div by comparing the hour in the
//         id to the current hour. 