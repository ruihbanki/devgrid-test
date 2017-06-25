import { connect } from 'react-redux';
import SearchBooks from './search-books';
import * as mylistActions from '../mylist/mylist-actions';
import * as searchActions from './search-actions';

const mapStateToProps = (state) => {
    return {
        keywords: state.search.keywords,
        books: state.search.books,
        mylistBooks: state.mylist.books
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetKeywords: (keywords) => {
            dispatch(searchActions.setKeywords(keywords))
        },
        onClearBooks: () => {
            dispatch(searchActions.clearBooks())
        },
        onSearchBooks: () => {
            dispatch(searchActions.searchBooks())
        },
        onAddBook: (book) => {
            dispatch(mylistActions.addBook(book));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBooks);
