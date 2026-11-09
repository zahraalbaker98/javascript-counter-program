//Counter Program
//adding functionality to each button
//first create a variable for each button

const decreaseBtn = document.getElementById("decreseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

//now we need 3 functions: 1) decrease, 2)reset and 3) increase
//using the variable, we add an event and then the function

decreaseBtn.onclick = function (){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

increaseBtn.onclick = function (){
    count++;
    countLabel.textContent = count;
}

