import LOAD_ITEMS from '../actions/actionTypes'

export default function loadItems(items) {
    return { type: LOAD_ITEMS, items: items }
}