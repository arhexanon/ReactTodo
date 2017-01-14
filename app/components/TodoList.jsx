var React = require('react');
var Todo = require('Todo');

var Todolist = React.createClass({

    render: function () {

        // Received props from  TodoApp...
        var {todos} = this.props;

        // Array map function replaces values in the array.
        // So, in this case each array element object is replaced in <Todo/>.
        // Spread operator ... is used to spread out properties on a object in individual props.
        var renderTodos = () => {
            return todos.map((todo) => {
                    return (
                        <Todo key={todo.id} {...todo}/>
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

module.exports = Todolist;