import Actions from '../actions';

export function setKeywords(keywords) {
    return {
        type: Actions.SEARCH_SET_KEYWORDS,
        keywords
    };
}

export function clearBooks() {
    return {
        type: Actions.SEARCH_CLEAR_BOOKS
    };
}

export function searchBooks() {
    return {
        type: Actions.SEARCH_SEARCH_BOOKS
    };
}

export function addBook(isbn) {
    return {
        type: Actions.SEARCH_ADD_BOOK,
        isbn
    };
}
