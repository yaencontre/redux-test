import { createStore } from 'redux';

const initialState = [
    { title: 'Black in black' },
    { title: 'For those about to rock' },
    { title: 'Thunderstruck' }
];

const reducer = function (state, action) {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, action.payload];
        default:
            return state
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
