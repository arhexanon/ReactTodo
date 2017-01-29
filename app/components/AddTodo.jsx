var React = require("react");
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;

        // match numbers (starting and ending with digit...
        if (todoText.length > 0) {
            this.refs.todoText.value = '';

            // parent function callback back , as property..
            dispatch(actions.addTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} >
                    <input type="text" ref="todoText" placeholder="What do you have to do"/>
                    <button >Add todo</button>
                </form>
            </div>
        )
    }
});

export default connect()(AddTodo);