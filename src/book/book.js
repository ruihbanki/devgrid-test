import React from 'react';
import HeaderBook from './header-book';
import '../css/main.css';
import '../css/button.css';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.handleMarkAsReaded = this.handleMarkAsReaded.bind(this);
    }

    render() {
        let button = null;
        if (this.props.book.isReaded) {
            button = <button className="Button" onClick={this.handleMarkAsReaded}>Readed</button>;
        } else {
            button = <button className="Button" onClick={this.handleMarkAsReaded}>Mark as readed</button>;
        }

        return (
            <div className="Main Main-book Main--headerLarge">
                <div className="_header">
                    <HeaderBook book={this.props.book} onDeleteBook={this.props.onDeleteBook}/>
                </div>
                <div className="_content">
                    {button}
                </div>
                <div className="_footer">
                    Created by Rui Hiroshi Banki
                </div>
            </div>
        );
    }

    handleMarkAsReaded() {
        this.props.onMarkAsReaded(this.props.book);
    }
}

export default Book;