import React from 'react';
import { Link } from 'react-router-dom';
import '../css/book-thumbnail.css';

class BookThumbnail extends React.Component {
    render() {
        return (
            <div className="BookThumbnail">                
                <Link className="_title" to="/">
                    <span>{this.props.book.title}</span>                    
                </Link>
                <div className="_img" style={this.getStyle()}></div>
            </div>
        );
    }

    getStyle() {
        const coverI = this.props.book.cover_i;
        const style = {};        
        if (coverI) {
            const size = this.props.size ? this.props.size : 'S';
            style.backgroundImage = `url(https://covers.openlibrary.org/b/id/${coverI}-${size}.jpg)`;
        }        
        return style;
    }
}

export default BookThumbnail;