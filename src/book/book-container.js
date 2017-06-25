import { connect } from 'react-redux';
import Book from './book';
import * as mylistActions from '../mylist/mylist-actions';

const mapStateToProps = (state) => {
    return {
        book: state.mylist.bookSelected
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddBook: (book) => {
            dispatch(mylistActions.addBook(book));
        },
        onDeleteBook: (book) => {
            dispatch(mylistActions.deleteBook(book));
        },
        onMarkAsReaded: (book) => {
            dispatch(mylistActions.markBookAsReaded(book));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Book);
