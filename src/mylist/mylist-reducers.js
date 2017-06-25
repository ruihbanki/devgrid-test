import Actions from '../actions';

export default function mylistReducer(state, action) {
    if (!state) {
        return newState();
    }
    switch(action.type) {
        case Actions.MYLIST_ADD_BOOK: {
            return addBook(state, action);
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
    const books = [...state.books];
    books.unshift(action.book);
    save(state);
    return {
        ...state,
        books
    }
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
            books: []
        };
    }
    return state;
}
