import LOAD_ITEMS from 'actions/actionTypes'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    items: [
        {
            name: "test",
            guid: "12345"
        }
    ]
};

function rootReducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        case LOAD_ITEMS:
            return {items: action.items};
    }
    debugger;
    return state;
}

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );

    return store;
}
