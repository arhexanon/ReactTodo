var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
   it('should exist', () => {
       expect(TodoApp).toExist();
   });
   it('should add todo to state on handleAddTodo', () => {
     var todoText = "let the dogs out";
     var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

     todoApp.setState({todos:[]});
     todoApp.handleAddTodo(todoText);
     expect(todoApp.state.todos[0].text).toBe(todoText);
   });

    it('should toggle todo when handleToggle is called', () => {
        var todo = {
            id: 11,
            text: 'todotext',
            completed: false
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState(
            {
                todos: [todo]
            }
        );
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
    });
});