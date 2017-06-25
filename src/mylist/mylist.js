import React from 'react';
import BookThumbnail from '../components/book-thumbnail';
import '../css/mylist.css';

class Mylist extends React.Component {
    render() {
        return (
            <div className="Mylist">
                <ul>                    
                    {this.renderItems()}
                </ul>
            </div>
        );
    }

    renderItems() {
        return this.props.books.map(item => (
            <li key={item.key}>  
                <BookThumbnail                     
                    book={item}
                    size="M"
                    onClick={this.props.onViewBook}
                    to={this.getLink(item)} />
            </li>
        ));
    }

    getLink(book) {
        return '/book/' + book.key.split('/')[2]
    }
}

export default Mylist;