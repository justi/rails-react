export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_POSTS = 'LOAD_POSTS';

export function loadItems(items) {
    return { type: LOAD_ITEMS, items: items }
}

export function loadPosts(posts) {
    return { type: LOAD_POSTS, posts: posts }
}