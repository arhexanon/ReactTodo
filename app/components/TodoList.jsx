var React = require('react');
import Todo from 'Todo';

var TodoAPI = require('TodoAPI');

// acces to the dispatch method and state properties...
var {connect} = require('react-redux');

export var TodoList = React.createClass({

    render: function () {

        // Received props from  TodoApp...
        var {todos, showCompleted, searchText} = this.props;

        // Array map function replaces values in the array.
        // So, in this case each array element object is replaced in <Todo/>.
        // Spread operator ... is used to spread out properties on a object in individual props.
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do</p>
                );
            }
            return TodoAPI.filterTodos(todos,showCompleted,searchText).map((todo) => {
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

export default  connect(
    (state) => {
        return  state;

    }
)(TodoList);