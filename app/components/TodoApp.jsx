var React = require('react');
var TodoList = require('TodoList');

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

    render: function () {
        var {todos} = this.state;

        return(
            <div>
                <TodoList todos = {todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;