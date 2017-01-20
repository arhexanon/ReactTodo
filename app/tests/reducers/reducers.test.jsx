var expect  = require('expect');
var reducers = require('reducers');

//df is used test the 'pure' reducers!
var  df = require('deep-freeze-strict');


describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            expect(reducers.searchTextReducer(df(''), df(action))).toEqual(action.searchText);
        });
    });
    describe('showCompletedReducer', () => {
        it('should toggle show completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            expect(reducers.showCompletedReducer(df(false), df(action))).toEqual(true);
        });
    });
    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
              type: 'ADD_TODO',
              text: 'walk the dog'
            };
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual('walk the dog');
        });
        it('should toggle todo', () => {
            var todos = [{
                id: '123',
                text: 'Something',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];
            var action = {
                type: 'TOGGLE_TODO',
                id: '123'
            };
            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        })
    });

});