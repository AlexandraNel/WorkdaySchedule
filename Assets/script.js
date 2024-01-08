$(document).ready(function () {

  var now = dayjs(); //now variable gets todays date and time from dayjs
  var nowHour = dayjs().hour(); //get the hour that it is now

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
  //create loop through all of the time blocks that gets the id from the end of the timeblock
  //change that id into a number so it can be compared to our number variable nowHour
  //add the class past, present, future depending on whether that number is equal, less than, or greater than the current hour

  $('.time-block').each(function () { //loop through all elements with a time block class
    var idHour = ($(this).attr('id').split('-').pop()); //get the number after '-' in the id (ie. the hour)
    idHour = parseInt(idHour); //need to transform the string from .split into a number to compare to the hour

    var textArea = $(this).find('textarea'); //find the single text area concerned in this iteration of the loop

    if (nowHour === idHour) {
      textArea.addClass('present');
    }
    if (nowHour > idHour) {
      textArea.addClass('past');
    }
    else if (nowHour < idHour) {
      textArea.addClass('future');
    }
  });

  //sets day, month, date, and year in the currentDay ID tag of the header.
  $('#currentDay').text(now.format('dddd, MMM DD YYYY'));

    //created a clear button for when yesterdays tasks get annoying and you want to clear everything
$('.btnClear').click(function(){
  $('.description').val("");
  localStorage.clear();

});
});
