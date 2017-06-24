import React from 'react';
import '../css/search-bar.css';

class Report extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <input type="text"/>
                <button className="_clear">
                    <i className="material-icons">clear</i>
                </button>
                <button className="_search">
                    <i className="material-icons">search</i>
                </button>
            </div>
        );
    }
}

export default Report;