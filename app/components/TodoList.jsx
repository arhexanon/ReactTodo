var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

    render: function () {

        // Received props from  TodoApp...
        var {todos} = this.props;

        // Array map function replaces values in the array.
        // So, in this case each array element object is replaced in <Todo/>.
        // Spread operator ... is used to spread out properties on a object in individual props.
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do</p>
                );
            }
            return todos.map((todo) => {
                    return (
                        <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                    );
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;