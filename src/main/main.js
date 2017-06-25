import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderMain from './header-main';
import MyListContainer from '../mylist/mylist-container';
import SearchBooksContainer from '../search/search-books-container';
import ReportContainer from '../report/report-container';
import '../css/main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="Main Main--headerLarge">
                <div className="_header">
                    <HeaderMain />
                </div>
                <div className="_content">
                    <Switch>
                        <Route path={this.props.match.path + '/mylist'} component={MyListContainer}/>
                        <Route path={this.props.match.path + '/search-books'} component={SearchBooksContainer}/>
                        <Route path={this.props.match.path + '/report'} component={ReportContainer}/>
                    </Switch>
                </div>
                <div className="_footer">
                    Created by Rui Hiroshi Banki
                </div>
            </div>
        );
    }
}

export default Main;