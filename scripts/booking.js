/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var cost_per_day = document.getElementById('calculated-cost');
var number_of_days_selected = 0;
var mon = document.getElementById('monday');
var tues = document.getElementById('tuesday');
var wed = document.getElementById('wednesday');
var thu = document.getElementById('thursday');
var fri = document.getElementById('friday');
var full_day = document.getElementById('full');
var half_day = document.getElementById('half');
var clear_days = document.getElementById('clear-button');



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function days(){
    if (this.classList.contains('blue-hover')){

        if (!this.classList.contains('clicked')){
            this.classList.add('clicked');
            number_of_days_selected++;
        }
    } 
    calculate();
}

mon.addEventListener('click', days); 
tues.addEventListener('click', days);
wed.addEventListener('click', days);
thu.addEventListener('click', days);
fri.addEventListener('click', days);




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear_button() {
    mon.classList.remove('clicked');
    tues.classList.remove('clicked');
    wed.classList.remove('clicked');
    thu.classList.remove('clicked');
    fri.classList.remove('clicked');
    cost_per_day.innerHTML = 0;
    number_of_days_selected = 0;
}

clear_days.addEventListener('click',clear_button);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function half_day_color(){
    
    if (this.classList.contains('blue-hover')){
        this.classList.add('clicked');
        full_day.classList.remove('clicked');
    }
    calculate();
}
half_day.addEventListener('click',half_day_color);



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full_day_color(){
    if (this.classList.contains('blue-hover')){
        this.classList.add('clicked');
        half_day.classList.remove('clicked');
    }
    calculate();
}
full_day.addEventListener('click',full_day_color);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate (){
    var total_cost = 0;

    if (half_day.classList.contains('clicked')){
        total_cost = number_of_days_selected * 20;  
    } 
  
    else if (full_day.classList.contains('clicked')){
        total_cost = number_of_days_selected * 35;
    }

    cost_per_day.innerHTML = total_cost;
}
