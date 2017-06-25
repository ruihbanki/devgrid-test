import React from 'react';
import '../css/search-bar.css';

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.onKeyup = this.onKeyup.bind(this);
        this.handleChangeKeywords = this.handleChangeKeywords.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.elemInput = null;
    }

    render() {
        return (
            <div className="SearchBar">
                <form>
                    <input 
                        type="text" 
                        placeholder="Search by title"
                        ref={elem => this.elemInput = elem} 
                        value={this.props.keywords}
                        onChange={this.handleChangeKeywords}/>
                    <button type="button" className="_clear" onClick={this.handleClear}>
                        <i className="material-icons">clear</i>
                    </button>
                    <button type="submit" className="_search" onClick={this.handleSearch}>
                        <i className="material-icons">search</i>
                    </button>
                </form>
            </div>
        );
    }

    componentDidMount() {
        this.elemInput.focus();
        document.addEventListener('keyup', this.onKeyup);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.onKeyup);
    }

    onKeyup(event) {
        if (event.code === 'Escape') {
            this.handleClear(event);
        }
    }

    handleChangeKeywords(event) {
        const keywords = event.currentTarget.value;
        this.props.onSetKeywords(keywords);
    }

    handleClear(event) {
        event.preventDefault();
        this.elemInput.focus();
        this.props.onClear();
    }

    handleSearch(event) {
        event.preventDefault();
        this.props.onSearch();
    }
}

export default Report;