import { createReducer } from '../store';

const initialState = {
    map: {},
};

const actions = {
    'ADD_ODD_SUM': addOddSum,
};

function addOddSum(state, action) {
    return {
        map: {...state.map, ...action.payload},
    }
}

export default createReducer(initialState, actions);