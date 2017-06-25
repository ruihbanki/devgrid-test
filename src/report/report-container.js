import { connect } from 'react-redux';
import Report from './report';

const mapStateToProps = (state) => {
    return {
        books: state.mylist.books
    };
};

export default connect(
    mapStateToProps
)(Report);
