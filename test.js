var test = require('tape');
var logic = require('./logic');

// *****************************************************
// addTodo function

test('Test addTodo function', function(t) {
// Add first todo
    var existingTodosList = [];
    var newTodosList = logic.addTodo(existingTodosList, 'call mom');

    var expectedTodosList = [
        {
          id:1,
          description: 'call mom',
          done: false,
          },
    ];

  t.deepEquals(newTodosList , expectedTodosList,"First toto added !");

// Add new todo
  newTodosList = logic.addTodo(newTodosList, 'buy potatos');

  expectedTodosList = [
      {
        id:1,
        description: 'call mom',
        done: false,
      },
      {
        id:2,
        description: 'buy potatos',
        done: false,
      },
  ];

  t.deepEquals(newTodosList , expectedTodosList,"New todo added !");

  t.end();
});


// *****************************************************
// deleteTodo function

test('Test deleteTodo function', function(t) {

  var newTodosList = logic.addTodo([], 'wash dishes');
  newTodosList = logic.addTodo(newTodosList, 'go to supermarket');

  newTodosList = logic.deleteTodo(newTodosList, 3);

  var expectedTodosList = [
    {
      id:4,
      description: 'go to supermarket',
      done: false,
    },
  ];

  t.deepEquals(newTodosList , expectedTodosList,"Todo deleted !");

  t.end();
});


// *****************************************************
// markTodo function

test('Test markTodo function', function(t) {

  var newTodosList = logic.addTodo([], 'go see mom');
  newTodosList = logic.addTodo(newTodosList, 'go to yoga');

  newTodosList = logic.markTodo(newTodosList, 5);

  var expectedTodosList = [
    {
      id:5,
      description: 'go see mom',
      done: true,
    },
    {
      id:6,
      description: 'go to yoga',
      done: false,
    },
  ];

  t.deepEquals(newTodosList , expectedTodosList,"Todo marked !");
  newTodosList = logic.markTodo(newTodosList, 6);
  var expectedTodosList = [
    {
      id:5,
      description: 'go see mom',
      done: true,
    },
    {
      id:6,
      description: 'go to yoga',
      done: true,
    },
  ];

  t.deepEquals(newTodosList , expectedTodosList,"Todo marked !");
  t.end();
});
