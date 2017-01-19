var React = require('react');

var TodoSearch = React.createClass({
    handleSearch: function (e) {
        var searchText = this.refs.searchText.value;
        var showCompleted = this.refs.showCompleted.checked;

        // parent function callback back , as property..
        this.props.onSearchTodo(showCompleted, searchText);
    },
    render: function () {
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>
            </div>
       )
    }
});

module.exports = TodoSearch;