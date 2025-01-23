// Global Variable and will create an empty array with name tasks

let tasks=[];

// AddTask function
function addTask(){
const input = document.getElementById('taskInput');
const task = input.ariaValueMax.trim();
console.log(task);
if(task !=='')
{
    task.push(task);
    console.log(task);
    input.value=''; 
    displayTasks();
}
}

// Remove Task -- delete button
function removeTask(index){
    tasks.splice(index,1);
    displayTasks();
}

// Display Tags
function displayTasks(){
    const taskList = document.getElementById('taskList');
    let html = '';

    for(let i=0; i<tasks.length; i++){
        html += `
            <div class="task-item">
                <span class="task-text"> ${i+1}. ${tasks[i]}</span>
                
                <div class="button-group">
                
                <button class="delete-btn" onclick="removeTask(${i})">Delete</button>

                </div>
            </div>
        `;
    }
    taskList.innerHTML = html;
}
