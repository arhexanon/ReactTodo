var React = require('react');

var uuid = require("node-uuid");

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp =  React.createClass({

    getInitialState: function () {
      return {
          showCompleted: false,
          searchText : "",
          todos: []
      };
    },
    //passed to component AddTodo
    handleAddTodo: function (text) {
        //add todo to array using spread operator ...
        this.setState({
            todos : [...this.state.todos, {id:  uuid(), text: text}]
        });
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
        var {todos} = this.state;

        return(
            <div>
                <TodoSearch onSearchTodo={this.handleSearchTodo}/>
                <TodoList todos = {todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;