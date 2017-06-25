import Actions from '../actions';

export default function mylistReducer(state, action) {
    if (!state) {
        return newState();
    }
    switch(action.type) {
        case Actions.MYLIST_ADD_BOOK: {
            return addBook(state, action);
        } 

        case Actions.MYLIST_VIEW_BOOK: {
            return viewBook(state, action);
        } 

        case Actions.MYLIST_DELETE_BOOK: {
            return deleteBook(state, action);
        } 

        case Actions.MYLIST_MARK_AS_READED: {
            return markBookAsReaded(state, action);
        } 
        
        default : {
            return state;
        }
    }
}

function newState() {
    return restore();
}

function addBook(state, action) {
    let newState = {...state};
    const books = [...newState.books];
    books.unshift(action.book);
    newState.books = books;
    save(newState);
    return newState;
}

function viewBook(state, action) {
    let newState = {...state};
    newState.bookSelected = action.book;
    save(newState);
    return newState;
}

function deleteBook(state, action) {
    let newState = {...state};
    const books = [...newState.books];
    const book = findByKey(books, action.book.key);
    const index = books.indexOf(book);
    books.splice(index, 1);    
    newState.books = books;
    save(newState);
    return newState;
}

function markBookAsReaded(state, action) {
    let newState = {...state};
    const books = [...newState.books];
    const book = findByKey(books, action.book.key);
    book.isReaded = true;    
    book.readedDate = new Date().getTime();   
    newState.bookSelected = {...book};
    newState.books = books;
    save(newState);
    return newState;
}

function save(state) {
    localStorage.setItem('mylist', JSON.stringify(state));
}

function restore() {
    let state = localStorage.getItem('mylist');
    if (state) {
        state = JSON.parse(state);
    } else {
        state = {
            books: [],
            bookSelected: null
        };
    }
    return state;
}

function findByKey(books, key) {
    for (let book of books) {
        if (book.key === key) {
            return book;
        }
    }
    return null;
}
