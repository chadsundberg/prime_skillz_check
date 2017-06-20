// PHI DO NOT DO


// Write a switch statement that
// console logs witty statements for each
// day of the standard work week: Monday, Tuesday,
// Wednesday, Thursday, Friday

// the following is done with a conditional

// var day;

// day = 'Wednesday';

// if (day == 'Monday') {
//     console.log("Monday, Monday.  Can't trust that day");
// } else if (day == 'Tuesday') {
//     console.log("Happy Tuesday!  Things are rolling now!");
// } else if (day == 'Wednesday') {
//     console.log("It's Hump Day!  Get to humping.");
// } else if (day == 'Thursday') {
//     console.log("Some people annoy Tom Halden by calling this day 'The Gateway to the Weekend'");
// } else if (day == 'Friday') {
//     console.log("Yay, it's like a Friday");
// }

function myFunction() {
var text;
var day = document.getElementById("myInput").value;

switch(day) {
    case "Monday":
    console.log("Monday, Monday.  Can't trust that day...");
    break;
    case "Tuesday":
    console.log("Happy Tuesday!  Things are rolling now!");
    break;
    case "Wednesday":
    console.log("It's Hump Day!  Get to humping.");
    break;
    case "Thursday":
    console.log("Some people annoy Tom Halden by calling this day 'The Gateway to the Weekend'");
    break;
    case "Friday":
    console.log("Yay, it's like a Friday everywhere, not just at Friday's!");
    break;
    default: 
    console.log("Whoa!? You working the weekend, or are you making up a new day?");
}
}
