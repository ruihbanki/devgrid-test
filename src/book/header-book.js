import React from 'react';
import { Link } from 'react-router-dom';
import BookThumbnail from '../components/book-thumbnail';
import logoSrc from '../images/logo.png';
import '../css/header.css';

class HeaderMain extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        return (
            <div className="Header Header-book">
                <div className="_bar">
                    <div className="_icon">
                        <Link className="material-icons" to="/main/mylist">navigate_before</Link>
                    </div>
                    <div className="_title">
                        <span>{this.props.book.title}</span>                        
                    </div>
                    <div className="_actions">
                        <Link className="material-icons" to="/main/mylist" onClick={this.handleDelete}>delete</Link>
                    </div>
                </div>
                <div className="_content">
                    <div className="_img">
                        <img src={logoSrc} alt="Logo"/>
                    </div>
                    <div className="_thumbnail">
                        <BookThumbnail book={this.props.book} size="L" />
                    </div>
                </div>
            </div>
        );
    }

    handleDelete() {
        this.props.onDeleteBook(this.props.book);
    }
}

export default HeaderMain;