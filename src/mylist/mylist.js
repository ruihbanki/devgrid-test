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
            <li>  
                <BookThumbnail 
                    key={item.key} 
                    book={item}
                    size={'L'}
                    onCheck={this.props.onAddBook} />
            </li>
        ));
    }
}

export default Mylist;