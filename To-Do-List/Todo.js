// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");

// function Add(){
//     if(inputs.value == ""){
//         alert("Please Enter Task");
//     }else{
//         let newTask = document.createElement("ol");
//         newTask.innerHTML = `${inputs.value}`;

//         let deleteButton = document.createElement("button");
//         deleteButton.innerText=`${"delete"}`;
//         deleteButton.style="color:black";
// text.appendChild(newTask,deleteButton);
//         inputs.value = "";
//     }
// }

let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if(inputs.value == ""){
        alert("Please Enter Task");
    } else {
        let newTask = document.createElement("li");
        newTask.innerHTML = `${inputs.value} `;

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
        deleteButton.style.color = "red";
        deleteButton.addEventListener("click", function() {
            text.removeChild(newTask);
        });

        newTask.appendChild(deleteButton);
        text.appendChild(newTask);
        inputs.value = "";
    }
}