export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_POSTS = 'LOAD_POSTS';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';


export function loadItems(items) {
    return { type: LOAD_ITEMS, items: items }
}

export function loadPosts(posts) {
    return { type: LOAD_POSTS, posts: posts }
}

export function toggleCheckbox(posts) {
    return { type: TOGGLE_CHECKBOX, posts: posts }
}