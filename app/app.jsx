var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} =  require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var actions  = require('actions');

var TodoAPI = require('TodoAPI');

var store = require('configureStore').configure();
store.subscribe( () =>{
    var state = store.getState();

    console.log("New state: ", state)

    // Bij elke wijziging in de state, de state vastleggen in localstorage...
    TodoAPI.setTodos(state.todos)
});

//Bij starten van  de applicatie, de todos uit localstorage halen en in de state zetten...
var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// Provider gives component (and children) access to the store...

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);
