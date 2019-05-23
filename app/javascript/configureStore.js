import { LOAD_ITEMS, LOAD_POSTS } from "actions.js";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const initialState = {
    items: [
        {
            name: "test",
            guid: "12345"
        }
    ]
};

function rootReducer(state = [], action) {
    console.log(action.type);
    switch (action.type) {
        case LOAD_ITEMS:
            return {items: action.items};
        case LOAD_POSTS:
            return {posts: action.posts};
    }
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

