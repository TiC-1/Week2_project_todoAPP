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

// *****************************************************
// sortTodos function

test('Test sortTodos function', function(t) {


    var newTodosList = logic.addTodo([], 'de');
    newTodosList = logic.addTodo(newTodosList, 'cde');
    newTodosList = logic.addTodo(newTodosList, 'Bcde');
    newTodosList = logic.addTodo(newTodosList, 'abcde');

    newTodosList = logic.sortTodos(newTodosList, logic.sortByDescription);

    var expectedTodosList = [
      {
        id:10,
        description: 'abcde',
        done: false,
      },
      {
        id:9,
        description: 'Bcde',
        done: false,
      },
      {
        id:8,
        description: 'cde',
        done: false,
      },
      {
        id:7,
        description: 'de',
        done: false,
      },
    ];

    t.deepEquals(newTodosList , expectedTodosList,"Todo sorted !");

    t.end();
  });


  // *****************************************************
  // statTodos function

  test('Test statTodos function', function(t) {

      // Test 1
      var newTodosList = logic.addTodo([], 'id_11');
      newTodosList = logic.addTodo(newTodosList, 'id_12');

      var statTodos = logic.statTodos(newTodosList);

      var expectedStat = {
        total: 2,
        done: 0,
        undone: 2,
      };

      t.deepEquals(statTodos , expectedStat, "Stats test1 OK !");

      // Test 2

      var newTodosList = logic.addTodo([], 'id_13');
      newTodosList = logic.addTodo(newTodosList, 'id_14');
      newTodosList = logic.addTodo(newTodosList, 'id_15');
      newTodosList = logic.addTodo(newTodosList, 'id_16');

      newTodosList = logic.markTodo(newTodosList, 16);
      newTodosList = logic.markTodo(newTodosList, 14);

      var statTodos = logic.statTodos(newTodosList);

      var expectedStat = {
        total: 4,
        done: 2,
        undone: 2,
      };

      t.deepEquals(statTodos , expectedStat, "Stats test2 OK !");

      t.end();
    });
