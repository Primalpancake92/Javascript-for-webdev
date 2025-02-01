let increasebtn = document.getElementById("increasebtn");
let resetbtn = document.getElementById("resetbtn");
let decreasebtn = document.getElementById("decreasebtn"); 
let counter = document.getElementById("count");
let count = 0;

function increase(){
    count += 1;
    counter.textContent = count;
}

function reset(){
    count = 0;
    counter.textContent = count;
}

function decrease(){
    count -= 1;
    counter.textContent = count;
}

increasebtn.onclick = increase;
resetbtn.onclick = reset;
decreasebtn.onclick = decrease;