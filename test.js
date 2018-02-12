var test = require('tape');
var logic = require('./logic');

test('add new Todo Test', function(t) {
    var existingTodosList = [
    ];
    var newTodosList = logic.addTodo(existingTodosList, 'call mom');

    var expectedTodosList = [
        {
          id:1,
          description: 'call mom',
          done: false,
          },
    ]
  t.deepEquals(newTodosList , expectedTodosList,"test ok!!");

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
  ]
t.deepEquals(newTodosList , expectedTodosList,"test ok!!");
  t.end();
});
