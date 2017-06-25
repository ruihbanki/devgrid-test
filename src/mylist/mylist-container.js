import { connect } from 'react-redux';
import Mylist from './mylist';
import * as mylistActions from '../mylist/mylist-actions';

const mapStateToProps = (state) => {
    return {
        books: state.mylist.books
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddBook: (book) => {
            dispatch(mylistActions.addBook(book));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mylist);
