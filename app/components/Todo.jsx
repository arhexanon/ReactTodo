var React =  require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {

        // Received props from  Todolist...
        // Using ES6 destructering...
        var {id, text, completed, createdAt, completedAt} = this.props;

        var messageCompleted = "";
        if (completed){
            var messageCompleted = ", completed at: " + moment.unix(completedAt).format('MMMM Do, YYYY @ h:mm A');
        }


        // react expression syntax uses {}...
        return (
            <div onClick={() =>{
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed}/>
                {text},  {id}, created at: {moment.unix(createdAt).format('MMMM Do, YYYY @ h:mm A')} {messageCompleted}
            </div>
        )
    }
});

module.exports = Todo;