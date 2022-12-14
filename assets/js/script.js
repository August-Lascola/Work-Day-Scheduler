
// Show Day Info at Top of Scheduler
const dayInfo = function () {
    const todayInfo = moment().format("dddd, MMMM, Do");
    $("#currentDay").text(todayInfo);
    
}

dayInfo();
// Global Variables
// Fun way to get an array from 1-20 I found on stackoverflow


const hourArray =  Array(9).join().split(',').map(function(a){return this.i++},{i:1});

let timeArray = [];

// Morning Hours
for(let i = 0; i < 4; i++) {
    // const morningTime = hourArray[i] + 8
    timeArray[i] = hourArray[i] + 8;
}

// Afternoon Hours
for(let i = 4; i < hourArray.length; i++) {
    timeArray[i] = hourArray[i] - 4;
    // console.log(afternoonTime)
}

// Load Grid Elements using bootstrap
const loadGridElements = function() {
    for (let i =0; i < timeArray.length; i++) {
        // Add classes for styling to HTML elements
        const rowEl = $("<div>").addClass("row");
        const hourEl = $("<time>").addClass("hour col-1");
        const pEl = $("<p>").addClass("col-10 time-block");
        const buttonEl = $("<button>").addClass("col-1 saveBtn fa fa-save");

        // Change Text Value Based on Time
        if (timeArray[i] < 12 && timeArray[i] > 7) {
            hourEl.text(timeArray[i] + " AM");
        } else {
            hourEl.text(timeArray[i] + " PM")
        } 
        pEl.text(timeArray[i].text);
        
        // Appends Elements
        rowEl.append(hourEl, pEl, buttonEl);
        $(".container").append(rowEl);
    }
}
loadGridElements();

// Change color based off of time
var checkTime = function() {
    // for each row
    $(".row").each(function(index, checkTimeEl){
        // Retrieve each hour from row, change based off of AM/PM; 
        // Note: tried to use a for loop using timeArray but couldn't get it to work
        let hourList = $(checkTimeEl).find("time").text().trim().split(" ");
        hourList[0] = parseInt(hourList[0]);
        if (hourList[1] === "PM") {
            if(hourList[0] != 12) {
                hourList[0] += 12;
            }
        }
        // Using moment, store current hour in a variable
        let currentHour = parseInt(moment().format("H"));
        // Update styling based on relation between current hour and timeblock
        if (hourList[0] < currentHour) {
            $(checkTimeEl).find("p").addClass("past");
        } else if (hourList[0] === currentHour) {
            $(checkTimeEl).find("p").addClass("present");
        } else if (hourList[0] > currentHour) {
            $(checkTimeEl).find("p").addClass("future");
        }
    });
}

checkTime();

// Create textarea, 
$('.container').on('click', 'p', function() {
    // Create Text Area on click
    $(this).append(`<textarea class= 
    "form-control-sm col-10" id="user-text">`);
    $(this).append('</textarea>')
    
});



// Run checkTime function every 10 minutes
setInterval(checkTime, (10 * 60) * 1000)

// To Do:
// Capture Text Input, store in local storage after clicking save button
// pull from local storage on page reload


