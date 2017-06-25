import Actions from '../actions';

export function addBook(book) {
    return {
        type: Actions.MYLIST_ADD_BOOK,
        book
    };
}
