// declaring variables to later reference in code
var currentDate= $("#currentDay");
var saveButton =$(".saveBtn"); 

// display the current date
currentDate.text(moment().format("dddd, MMMM Do"));

var currentTime= moment().hour();
console.log(currentTime)



// function to save info in textarea when button is clicked
saveButton.on("click", function() {
    var time = $(this).parent().attr("id")
    var userText = $(this).siblings(".description").val();
    console.log(time, userText);

    localStorage.setItem(time, userText);
})

// load the saved items in local storage so they appear after the page refreshes
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
    
// checking the current time against the scheduler tasks time in order to change timeblock styles
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
    })

    loadSaved();

}

auditTime()