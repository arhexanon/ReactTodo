var $ = require('jquery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        filteredTodos = filteredTodos.filter( (todo) => {
            return (!todo.completed  || showCompleted ) &&
                   (searchText.length === 0 || todo.text.toLowerCase().includes(searchText));
        })

        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                  // a before b...
                return -1;
            } else if (a.completed && !b.completed) {
                 // a after b...
                return 1;
            } else {
                 // do not alter sort for a and b...
                return 0;
            }
        });
        return filteredTodos;
    }
};