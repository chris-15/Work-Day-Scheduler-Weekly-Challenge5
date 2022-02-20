// declaring variables to later reference in code
var currentDate= $('#currentDay');
var saveButton =$('.saveBtn'); 

// display the current date
currentDate.text(moment().format("dddd, MMMM Do"));


// function to save info in textarea when button is clicked
saveButton.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var userText = $(this).siblings(".description").val();
    console.log(userText, time);

    localStorage.setItem(time, userText);


})
    

