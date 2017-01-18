var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo')

var TodoApp =  React.createClass({

    getInitialState: function () {
      return {
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

    render: function () {
        //  todos are in the state and passed through to todos component as props..
        var {todos} = this.state;

        return(
            <div>
                <TodoList todos = {todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;