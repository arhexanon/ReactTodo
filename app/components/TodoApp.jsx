var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp =  React.createClass({

    getInitialState: function () {
      return {
          showCompleted: false,
          searchText : "",
          todos: [
              {
                  id: 1,
                  text: 'Walk the doggie'
              },
              {
                  id: 2,
                  text: 'C888ook the fish'
              },
              {
                  id: 3,
                  text: 'Cccook the fish'
              },
              {
                  id: 4,
                  text: 'qaCook the fish'
              },
              {
                  id: 5,
                  text: 'aCook the fish'
              },
              {
                  id: 6,
                  text: 'mCook the fish'
              },
              {
                  id: 7,
                  text: 'Coomk the fish'
              },
          ]
      };
    },
    handleAddTodo: function (text){
        alert("new todo " + text);
    },
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