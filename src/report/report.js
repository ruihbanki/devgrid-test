import React from 'react';
import BookThumbnail from '../components/book-thumbnail';
import '../css/report.css';

class Report extends React.Component {
    render() {
        return (
            <div className="Report">
                {this.renderYears()}
            </div>
        );
    }

    renderYears() {
        const years = [];
        let curYear = null;
        this.props.books.forEach(item => {
            let readedDate = new Date(item.readedDate);
            if (item.isReaded && readedDate.getFullYear() !== curYear) {
                let year = (
                    <section key={readedDate.getFullYear()}>
                        <h1>{readedDate.getFullYear()}</h1>
                        <ul>                    
                            {this.renderItems(readedDate.getFullYear())}
                        </ul>                        
                    </section>
                );
                years.push(year);
                curYear = readedDate.getFullYear();
            }

        });
        return years;
    }

    renderItems(year) {
        const books = [];
        this.props.books.forEach(item => {
            let readedDate = new Date(item.readedDate);
            if (item.isReaded && readedDate.getFullYear() === year) {
                let book = (
                    <li key={item.key}>  
                        <BookThumbnail                     
                            book={item}
                            size="M"/>
                    </li>
                );
                books.push(book);
            }

        });
        return books;
    }    
}

export default Report;