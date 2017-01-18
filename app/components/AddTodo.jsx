var React = require("react");

var AddTodo = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        // match numbers (starting and ending with digit...
        if (todoText.length > 0) {
            this.refs.todoText.value = '';

            // parent function callback back , as property..
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} >
                    <input type="text" ref="todoText" placeholder="What do you have to do"/>
                    <button >Add todo</button>
                </form>
            </div>
        )
    }
});

module.exports =  AddTodo;