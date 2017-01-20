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

});