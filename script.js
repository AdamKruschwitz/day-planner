// PSEUDOCODE =====================================================================================================
// Get the current day
// Set the #currentDay text to the current date/time
// Every 1 second, update the text in #currentDay to the now current time.
//
// Add rows for 9-5 work hours to #container div
//    Each row should have a text input field for the user to add text 
//        If there is data saved for this text field, it should be added to the page.
//    Each row should have a save button to save data from text input
//    The timeblocks main input field should be colored depending on whether it's a current, past, or future hour.
//    When the save button is clicked...
//        The value of the input field should be saved in local storage
// ================================================================================================================

var hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var container = $(".container");
var now = moment();
var timeEl = $("#currentDay");

// set the value for the current day
timeEl.text(now.format("MMMM Do, YYYY"));

// Check storage and initialize
if(!localStorage.getItem("day-planner")) {
    initializeStorage();
}

for(var hour in hours) {
    // Create the hour element
    // console.log(hour);
    let hourEl = $("<section>");
    hourEl.addClass("row time-block");
    container.append(hourEl);

    // Create a label for that element
    let hourLabelEl = $("<h2>");
    hourLabelEl.addClass("hour col-2 h-100");
    hourLabelEl.text(hours[hour]);
    hourEl.append(hourLabelEl);

    // Create a text input field for that element
    let hourInputEl = $("<input>");
    hourInputEl.attr("type", "text");
    hourInputEl.attr("value", "");
    hourInputEl.addClass("form-control col-9 h-100");
    hourEl.append(hourInputEl);

    // If there is data saved, populate the data for this element
    let saveData = JSON.parse(localStorage.getItem("day-planner"));
    if(saveData[hours[hour]]) {
        hourInputEl.val(saveData[hours[hour]]);
    }
    // Check the time, and set the color of this text input accordingly

    // Create a save button
    let saveButtonEl = $("<button>");
    saveButtonEl.addClass("saveBtn col-1 h-100");
    saveButtonEl.text("💾");
    hourEl.append(saveButtonEl);

    // Assign an on click event which saves the text input info to local storage
    saveButtonEl.click( function(event) {
        // Get the input text and hour
        let inputText = $(event.target).parent().children("input").val();
        let hour = $(event.target).parent().children("h2").text();

        // Load saved data and update it with the current hour's new text
        let saveData = JSON.parse(localStorage.getItem("day-planner"));
        saveData[hour] = inputText;

        // Save
        localStorage.setItem("day-planner", JSON.stringify(saveData));
    } );
}

// Create the object used to save data
function initializeStorage() {
    let saveData = {};
    for(hour in hours) {
        saveData[hours[hour]] = "";
    }
    localStorage.setItem("day-planner", JSON.stringify(saveData));
}
