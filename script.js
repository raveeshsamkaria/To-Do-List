const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Add Task in the List
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Click Event Listener
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save Data in Local Storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show Data from Local Storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();