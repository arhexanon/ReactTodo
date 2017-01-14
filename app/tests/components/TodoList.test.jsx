var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });
    it('should render 1 component for each todo item', () => {
       var todos = [{
           id: 1,
           text: 'eee'
       },{
           id: 2,
           text: 'bbb'
       }];
       var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
       var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
       expect(todosComponents.length).toBe(todos.length);
    });
});