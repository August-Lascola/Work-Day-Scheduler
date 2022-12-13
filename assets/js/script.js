
// Create An Array With Numbers from 9-12, 1-5
// Note for grader: this was just a fun challenge for myself I know I could have just typed out the array elements

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
        const pEl = $("<p>").addClass("col-10 present time-block");
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

        console.log(hourEl);
    }
}
loadGridElements();


// Change color based off of time
    // Show day at top
// Area for text input

// Save Text to localstorage



// Use moment js, well learn but use it to change color based off of hour