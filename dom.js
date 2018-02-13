// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo', done: false },
    { id: -2, description: 'second todo',done: false },
    { id: -1, description: 'third todo',done: false },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    // Create <li> tag
    var todoNode = document.createElement('li');

    // DESCRIPTION
    // Create <span> tag
    var descriptionNode = document.createElement('span');
    // Write todo description property value in descriptionNode using innerHTML method
    descriptionNode.innerHTML = todo.description;
    // Add descriptionNode as a toNode child
    todoNode.appendChild(descriptionNode);

    // DONE TRUE/FALSE
    var doneNode = document.createElement('span');
    doneNode.innerHTML = todo.done;
    todoNode.appendChild(doneNode);

    // you will need to use addEventListener

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markTodoButtonNode = document.createElement('button');
    markTodoButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markTodoButtonNode);
    // add classes for css

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
      // and assign it to 'description'
      var description = event.target.querySelector("input").value; // event.target ....

      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, description); // ?? change this!
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
