import React from 'react';
import SearchBar from './search-bar';
import '../css/search-books.css';
import '../css/list.css';
import '../css/media.css';

class SearchBooks extends React.Component {
    render() {
        return (
            <div className="SearchBooks">
                <div className="_search">
                    <SearchBar />
                </div>
                <div className="_result">
                    <div className="List">
                        <ul>
                            <BookItem />
                            <BookItem />
                            <BookItem />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

class BookItem extends React.Component {
    render() {
        return (
            <li>
                <label className="Media Media-check">
                    <div className="_check">
                        <input type="checkbox"/>
                    </div>
                    <div className="_obj">
                        <img src="" alt=""/>
                    </div>
                    <div className="_body">
                        <strong className="_title">Title</strong>
                        <span className="_detail">Detail</span>
                    </div>
                </label>
            </li>
        );
    }
}

export default SearchBooks;