import { LOAD_ITEMS, LOAD_POSTS, TOGGLE_CHECKBOX } from "actions.js";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const initialState = {
    items: [
        {
            name: "test",
            guid: "12345"
        }
    ],
    posts: {
        posts: [],
        searchBoth: true
    }
};

function rootReducer(state = [], action) {
    switch (action.type) {
        case LOAD_ITEMS:
            return Object.assign({}, state, {items: action.items});
        case LOAD_POSTS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    posts: action.posts
                }
            }
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    searchBoth: !state.posts.searchBoth
                }
            }
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

