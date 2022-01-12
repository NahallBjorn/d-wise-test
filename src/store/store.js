import { createStore, combineReducers } from 'redux';

import oddsReducer from './reducers/odds';

export const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        return (handlers[action.type] && handlers[action.type](state, action)) || state;
    };
};

const rootReducer = combineReducers({
    odds: oddsReducer,
});

export default createStore(rootReducer, {});
