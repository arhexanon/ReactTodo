var React =  require('react');

var Todo = React.createClass({
    render: function () {

        // Received props from  Todolist...
        // Using ES6 destructering...
        var {id, text, completed} = this.props;

        // react expression syntax uses {}...
        return (
            <div onClick={() =>{
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed}/>
                {text} {id}
            </div>
        )
    }
});

module.exports = Todo;