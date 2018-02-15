// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var sortTodosForm = document.getElementById('sort-todos');
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo', done: false },
    { id: -2, description: 'second todo', done: false },
    { id: -1, description: 'third todo', done: false },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {

    // Create <li> tag
    var todoNode = document.createElement('li');
    if (todo.done){
      todoNode.className = "checked";
    }
    // MARK BUTTON
    // Create <button> tag
    var markTodoButtonNode = document.createElement('button');
    // Add text insinde <button> and </button> tags
    markTodoButtonNode.textContent = todo.done;
    // Add a class
    markTodoButtonNode.className = "markButton";
    // Call funtion markTodo in logic.js

    markTodoButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);


    });
    // Add the button to todoNode
    todoNode.appendChild(markTodoButtonNode);


    // DESCRIPTION
    // Create <span> tag
    var descriptionNode = document.createElement('span');
    // Add a class
    descriptionNode.className = "description";
    // Write todo description property value in descriptionNode
    descriptionNode.textContent = todo.description;
    // Add descriptionNode as a toNode child
    todoNode.appendChild(descriptionNode);


    // DELETE BUTTON
    // Add <button> tag
    var deleteButtonNode = document.createElement('button');
    // Text to button
    deleteButtonNode.textContent = "Delete";
    // Add a class
    deleteButtonNode.className = "deleteButton";
    // Call funtion deleteTodo in logic.js
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    // Add the button to todoNode
    todoNode.appendChild(deleteButtonNode);

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      // Prevent to send the form
      event.preventDefault();

      // Get the value of what's is in the input field of the form
      // and assign it to a var to use it easily
      var inputNewTodo = event.target.querySelector("input").value;
      // Test if input value exists
      if (inputNewTodo) {
        // Assign it to 'description'
        var description = inputNewTodo; // event.target ....
        // delete text in input field for next input
        event.target.querySelector("input").value = "";
        // hint: todoFunctions.addTodo
        var newState = todoFunctions.addTodo(state, description); // ?? change this!
        update(newState);
      }
    });
  };

  // When 'sort button' is clicked
  if (sortTodosForm) {
    sortTodosForm.addEventListener('submit', function(event) {

      // Prevent to send the form
      event.preventDefault();

      var newState = todoFunctions.sortTodos(state);
      update(newState);

    });

  }



  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})//end of function
();//function argument???
