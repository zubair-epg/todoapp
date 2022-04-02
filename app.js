var todoItem = document.getElementById("inputValue");

function addTodo() {
    if(todoItem.value == ''){
        alert("todo shuld not be an empty value");
        return ;
    }
  //getting value from input
  let text = todoItem.value;
  //create li element and set class name
  let list = document.createElement("li");
  list.setAttribute("id", "listItem");
  list.setAttribute("class", "p-2 fs-2");

  //create delelt button element and set class name and inner Text
  let delBtn = document.createElement("button");
  delBtn.setAttribute("id", "delet-btn mt-1");
  delBtn.setAttribute("class", "btn btn-danger m-2");
  delBtn.setAttribute("onclick", "deletTodo(this)");

  delBtn.innerText = "Delet";
  //create Edit button element and set class name and innertext
  let editBtn = document.createElement("button");
  editBtn.setAttribute("id", "edit-btn");
  editBtn.setAttribute("class", "btn btn-primary m-2");
  editBtn.setAttribute("onclick", "editTodo(this)");
  editBtn.innerText = "Edit";
  //create text of new li element
  let textNode = document.createTextNode(text);
  list.appendChild(textNode);
  list.appendChild(delBtn);
  list.appendChild(editBtn);
  document.getElementById("checklist").appendChild(list);
  todoItem.value = "";
  console.log(list);
}

// =====================delet-btn============

function deletTodo(e) {
  e.parentNode.remove(e.parentNode)
  console.log(e)
}

function editTodo(e) {
    let val = e.parentNode.firstChild.nodeValue;
    let newTodoItem = prompt("enter edit todos" , val)
     e.parentNode.firstChild.nodeValue = newTodoItem
    console.log(newTodoItem)
  
  }
