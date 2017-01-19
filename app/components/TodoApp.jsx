var React = require('react');

var uuid = require("node-uuid");

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI')

var TodoApp =  React.createClass({

    getInitialState: function () {
      return {
          showCompleted: false,
          searchText : "",
          todos: TodoAPI.getTodos()
      };
    },

    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },

    //passed to component AddTodo
    handleAddTodo: function (text) {
        //add todo to array using spread operator ...
        this.setState({
            todos : [
                ...this.state.todos,
                {
                    id:  uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
                if( todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo
            }
        );
        this.setState({todos: updatedTodos});
    },

    //passed to component TodoSearch..
    handleSearchTodo: function (showcompleted, searchText){
        this.setState({
            showCompleted : showcompleted,
            searchText : searchText.toLowerCase()
        });
    },

    render: function () {
        //  todos are in the state and passed through to todos component as props..
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos( todos, showCompleted, searchText);

        return(
            <div>
                <TodoSearch onSearchTodo={this.handleSearchTodo}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;