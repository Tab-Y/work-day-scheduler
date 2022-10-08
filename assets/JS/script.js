


var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY'));
};
// targets id currentDay to put a timestamp
$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

// set time classes to change with time using jQuery
// target id compared to time
// reset at 0000 (midnight)
function checkTime(){

}

// function to save textarea input to local storage based on id
function saveTextarea(){

}