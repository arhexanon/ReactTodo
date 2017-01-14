var React =  require('react');

var Todo = React.createClass({
    render: function () {

        // Received props from  Todolist...
        // Using ES6 destructering...
        var {id, text} = this.props;

        // react expression syntax uses {}...
        return (
            <div>
                {id} {text}
            </div>
        )
    }
});

module.exports = Todo;