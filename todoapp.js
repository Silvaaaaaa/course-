let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks"); // red button 
// input.value ; 
// Empty Array To Store The Tasks
let arrayOfTasks = []; // store the tasks 
if(localStorage.getItem("tasks")){
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}
getdatefromlsg();
// Add Task
submit.onclick = function () {
    if (input.value !== "") { // to sure that empty 
      addTaskToArray(input.value); // Add Task To Array Of Tasks
      input.value = ""; // Empty Input Field
    }
  };

tasksDiv.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("del")) {
    deletetaskwith(e.target.parentElement.getAttribute("data.id"))
    e.target.parentElement.remove(); 
  }
  // ######################################
  if (e.target.classList.contains("delall")) {
    // deletetaskwith(e.target.parentElement.getAttribute("data.id"))
  tasksDiv.innerHTML = ""  ; 
  window.localStorage.removeItem("tasks")
  }
  // ####################################
  if (e.target.classList.contains("task")) {
    togglestatutask(e.target.getAttribute("data.id"));
    e.target.classList.toggle("done");
  } 
});

function addTaskToArray(taskText) {
    // Task Data
  const task = { // object if task.complete عشان تجيب من الابجيت فلازم عنوان الكلاس 
    id: Date.now(),
    title: taskText,
    completed: false , // allow to ubdate 
  };
  // Push Task To Array Of Tasks
  arrayOfTasks.push(task);
  addelementopage(arrayOfTasks);
  adddatetolocalstorage(arrayOfTasks);// initliztion to function show it go to function 

}
function addelementopage(arrayOfTasks){
  tasksDiv.innerHTML = ""  ; // empty value in html 
  arrayOfTasks.forEach((task) => { // return id for each element
     let div = document.createElement("div");
     div.className = "task" ; // move between it toggle 
     if(task.completed == true){
     div.className = "done" ;
     } 
     div.setAttribute("data.id" ,task.id); 
    div.appendChild(document.createTextNode(task.title));
    let span = document.createElement("span");
    let spanall = document.createElement("span");
    span.className = "del" ; 
    spanall.className = "delall" ; 
    span.appendChild(document.createTextNode("Delete"));
    spanall.appendChild(document.createTextNode("Delete All "));
    div.appendChild(span);
    div.appendChild(spanall);
    tasksDiv.appendChild(div);
   }); 
}

function adddatetolocalstorage(arrayOfTasks){
  window.localStorage.setItem("tasks" , JSON.stringify(arrayOfTasks));
}
function getdatefromlsg(){
  let data = window.localStorage.getItem("tasks");
  if(data){
    let tasks = JSON.parse(data);
    addelementopage(tasks);
  }
}
function deletetaskwith(taskid){
  // for(let i = 0 ; i < arrayOfTasks.length ; i++ ){
  //   console.log(`${arrayOfTasks[i].id} == ${taskid}`)
  // }
    arrayOfTasks = arrayOfTasks.filter((task)=> task.id != taskid) // such as while   
    adddatetolocalstorage(arrayOfTasks);
}
function togglestatutask(taskid){// هيلف عل كله 
  for(let i = 0 ; i < arrayOfTasks.length ; i++ ){ 
    if (arrayOfTasks[i].id == taskid){
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false) ;
    } // ready in js json stringt set item if call it must get item 
  }// you work on real div series ;
  adddatetolocalstorage(arrayOfTasks);
}



