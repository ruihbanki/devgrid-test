import Actions from '../actions';

export function addBook(book) {
    return {
        type: Actions.MYLIST_ADD_BOOK,
        book
    };
}

export function viewBook(book) {
    return {
        type: Actions.MYLIST_VIEW_BOOK,
        book
    };
}

export function deleteBook(book) {
    return {
        type: Actions.MYLIST_DELETE_BOOK,
        book
    };
}

export function markBookAsReaded(book) {
    return {
        type: Actions.MYLIST_MARK_AS_READED,
        book
    };
}


