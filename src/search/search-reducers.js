import Actions from '../actions';

export default function searchReducer(state, action) {
    if (!state) {
        return newState();
    }
    switch(action.type) {
        case Actions.SEARCH_SET_KEYWORDS: {
            return setKeywords(state, action);
        } 

        case Actions.SEARCH_CLEAR_BOOKS: {
            return clearBooks(state, action);
        }

        case Actions.SEARCH_SEARCH_BOOKS: {
            return searchBooks(state, action);
        }

        case Actions.SEARCH_SEARCH_BOOKS + '_SUCCESS': {
            return searchBooksSuccess(state, action);
        }

        case Actions.SEARCH_ADD_BOOK + '_SUCCESS': {
            return addBookSuccess(state, action);
        }
        
        default : {
            return state;
        }
    }
}

function newState() {
    return {
        keywords: '',
        books: [],
    };
}

function setKeywords(state, action) {
    return {
        ...state,
        keywords: action.keywords
    }
}

function clearBooks(state, action) {
    return {
        ...state,
        keywords: '',
        books: []
    }
}

function searchBooks(state, action) {
    return {
        ...state
    }
}

function searchBooksSuccess(state, action) {
    const books = prepareBooks(action.data.docs);    
    return {
        ...state,
        books
    }
}

function addBookSuccess(state, action) {
    return {
        ...state,
        books: action.data.docs
    }
}

function prepareBooks(books) {
    return books.map(item => {
        item.thumbnail_small = getBookSrcImage(item.cover_i, 'S');
        return item;
    });
}

function getBookSrcImage(coverI, size) {
    return `https://covers.openlibrary.org/b/id/${coverI}-${size}.jpg`;
}


