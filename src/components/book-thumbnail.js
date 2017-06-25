import React from 'react';
import { Link } from 'react-router-dom';
import '../css/book-thumbnail.css';

class BookThumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {        
        return (
            <div className="BookThumbnail" onClick={this.handleClick}>                
                {this.renderTitle()}
                <div className="_img" style={this.getStyle()}></div>
                {this.renderReaded()}
            </div>
        );
    }

    renderTitle() {
        let title = null;
        if (this.props.to) {
            title = (
                <Link className="_title" to={this.props.to}>
                    <span>{this.props.book.title}</span>                    
                </Link>
            );
        } else {
            title = (
                <span className="_title">
                    <span>{this.props.book.title}</span>                    
                </span>
            );
        }
        return title;
    }

    renderReaded() {
        let readed = null;
        if (this.props.book.isReaded) {
            readed = (
                <i className="_check material-icons">check</i>
            );
        } 
        return readed;
    }

    handleClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.book);
        }        
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