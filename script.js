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

for(var hour in hours) {
    // Create the hour element
    console.log(hour);
    let hourEl = $("<section>");
    hourEl.addClass("row");
    container.append(hourEl);

    // Create a label for that element
    let hourLabelEl = $("<h2>");
    hourLabelEl.addClass("hour text-end col-2");
    hourLabelEl.text(hours[hour]);
    hourEl.append(hourLabelEl);

    // Create a text input field for that element

    // If there is data saved, populate the data for this element

    // Check the time, and set the color of this text input accordingly

    // Create a save button

    // Assign an on click event which saves the text input info to local storage

}
