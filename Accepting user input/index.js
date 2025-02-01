let fullName;

document.getElementById("submit").onclick = function(){
    fullName = document.getElementById("Name").value;
    document.getElementById("welcome").textContent = `Hello and welcome ${fullName}`;
}