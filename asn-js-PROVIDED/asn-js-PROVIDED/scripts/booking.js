/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var mon = document.getElementById("monday");
var tue = document.getElementById("tuesday");
var wed = document.getElementById("wednesday");
var thu = document.getElementById("thursday");
var fri = document.getElementById("friday");

var days = [];

var clearall = document.getElementById("clear-button");

var dailyrate = 0;

var half_days = document.getElementById("half");
var full_days = document.getElementById("full");

var costtext = document.getElementById("calculated-cost");
var cost = 0;

window.onload = startup;
function startup() {
    full_days.classList.remove("clicked");
    calculate();
}
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
mon.addEventListener("click", clickedmonday);
tue.addEventListener("click", clickedtuesday);
wed.addEventListener("click", clickedwednesday);
thu.addEventListener("click", clickedthursday);
fri.addEventListener("click", clickedfriday);

function clickedmonday() {
    if (!mon.classList.contains("clicked")) {
        mon.classList.add("clicked");
        days.push(mon);
        calculate();
    }
}
function clickedtuesday() {
    if (!tue.classList.contains("clicked")) {
        tue.classList.add("clicked");
        days.push(tue);
        calculate();
    }
}
function clickedwednesday() {
    if (!wed.classList.contains("clicked")) {
        wed.classList.add("clicked");
        days.push(wed);
        calculate();
    }
}
function clickedthursday() {
    if (!thu.classList.contains("clicked")) {
        thu.classList.add("clicked");
        days.push(thu);
        calculate();
    }
}
function clickedfriday() {
    if (!fri.classList.contains("clicked")) {
        fri.classList.add("clicked");
        days.push(fri);
        calculate();
    }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearall.addEventListener("click", clear);

function clear() {
    mon.classList.remove("clicked");
    tue.classList.remove("clicked");
    wed.classList.remove("clicked");
    thu.classList.remove("clicked");
    fri.classList.remove("clicked");
    half_days.classList.remove("clicked");
    full_days.classList.remove("clicked");
    days = [];
    calculate();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_days.addEventListener("click", halfselected);

function halfselected() {
    full_days.classList.remove("clicked");
    half_days.classList.add("clicked");
    dailyrate = 20;
    calculate();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.\var full_button = document.getElementById("full")

full_days.addEventListener("click", fullselected);

function fullselected() {
    half_days.classList.remove("clicked");
    full_days.classList.add("clicked");
    dailyrate = 35;
    calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    cost = dailyrate * days.length;
    costtext.innerHTML = cost;
}


