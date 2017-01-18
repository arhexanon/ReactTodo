var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');


describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    describe('render', () => {
        it('should call onTodoSearch if valid text is entered', () => {

            //The TodoApp component renders the TodoSearch compontent.
            // The function TodoSearch.handleSearchTodo is simulated with the spy...
            var spy =  expect.createSpy();

            var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearchTodo={spy}/>);
            todoSearch.refs.showCompleted.valuemail = false;
            todoSearch.refs.searchText.value = "Check mail";

            TestUtils.Simulate.change(todoSearch.refs.searchText);

            expect(spy).toHaveBeenCalledWith(false, "Check mail");
            expect(spy).toHaveBeen
        });
        it('should call onTodoSearch if checkbox is set', () => {
            var spy =  expect.createSpy();

            var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearchTodo={spy}/>);
            todoSearch.refs.showCompleted.checked = true;
            todoSearch.refs.searchText.value = "Check mail";

            TestUtils.Simulate.change(todoSearch.refs.showCompleted);

            expect(spy).toHaveBeenCalledWith(true, "Check mail");
        });
    });


});