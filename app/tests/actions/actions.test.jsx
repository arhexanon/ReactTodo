var expect  = require('expect');
var actions = require('actions');



describe('Actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some text to search'
        }
        expect(actions.setSearchText(action.searchText)).toEqual(action);
    });
    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Walk the dog'
        }
        expect(actions.addTodo("Walk the dog")).toEqual(action);
    });
    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        expect(actions.toggleShowCompleted()).toEqual(action);
    });
    it('should generate toggle todo action', () => {
       var action = {
           type: 'TOGGLE_TODO',
           id: 1
       }
       expect(actions.toggleTodo(action.id)).toEqual(action);
    });
});