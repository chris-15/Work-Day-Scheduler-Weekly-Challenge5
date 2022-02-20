// declaring variables to later reference in code
var currentDate= $("#currentDay");
var saveButton =$(".saveBtn"); 
var currentTime= moment().hour(); //variable that sets the current time using moment.js
console.log(currentTime)

// display the current date using moment.js
currentDate.text(moment().format("dddd, MMMM Do"));


// function to save info in textarea when button is clicked
saveButton.on("click", function() {
    var time = $(this).parent().attr("id")
    var userText = $(this).siblings(".description").val();
    // console.log(time, userText);

    localStorage.setItem(time, userText);
})

// function to get items from local storage and then add their values to timeblock 
// saves the users input even after the page refreshes
var loadSaved = function() {
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
}
    
// function that loops through each time block to check the current time against the scheduler tasks time in order to change timeblock styles
// also runs function that gets previously saved items from local storage
var auditTime = function() {

    $(".time-block").each(function(){
        var timeBlock = parseInt($(this).attr("id"))
        //console.log(timeBlock)

        if(currentTime > timeBlock) {
            $(this).addClass("past");
        } else if (currentTime === timeBlock) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future")
        }
    });
    loadSaved();
}


auditTime();