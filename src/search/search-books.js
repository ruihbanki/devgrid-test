import React from 'react';
import SearchBar from './search-bar';
import BookThumbnail from '../components/book-thumbnail';
import '../css/search-books.css';
import '../css/list.css';
import '../css/media.css';

class SearchBooks extends React.Component {
    render() {
        return (
            <div className="SearchBooks">
                <div className="_search">
                    <SearchBar 
                        keywords={this.props.keywords}
                        onSetKeywords={this.props.onSetKeywords}
                        onClear={this.props.onClearBooks}
                        onSearch={this.props.onSearchBooks}/>
                </div>
                <div className="_result">
                    <div className="List">
                        <ul>
                            {this.renderItems()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    renderItems() {
        return this.props.books.map(item => (
            <BookItem 
                key={item.key} 
                book={item}
                onCheck={this.props.onAddBook} />
        ));
    }
}

class BookItem extends React.Component {
    render() {
        return (
            <li>
                <label 
                    className="Media Media-check" 
                    onClick={(event) => {
                        this.props.onCheck(this.props.book);
                    }}>
                    <div className="_check">
                        <input type="checkbox"/>
                    </div>
                    <div className="_obj">
                        <BookThumbnail book={this.props.book} size={'S'}/>
                    </div>
                    <div className="_body">
                        <strong className="_title">
                            {this.props.book.title}
                        </strong>
                        <span className="_detail">
                            {this.props.book.author_name}
                        </span>
                    </div>
                </label>
            </li>
        );
    }
}

export default SearchBooks;