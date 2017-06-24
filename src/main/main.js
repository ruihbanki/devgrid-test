import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderMain from './header-main';
import MyList from './my-list';
import SearchBooks from './search-books';
import Report from './report';
import '../css/main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="Main Main--headerSmall">
                <div className="_header">
                    <HeaderMain />
                </div>
                <div className="_content">
                    <Switch>
                        <Route path={this.props.match.path + '/my-list'} component={MyList}/>
                        <Route path={this.props.match.path + '/search-books'} component={SearchBooks}/>
                        <Route path={this.props.match.path + '/report'} component={Report}/>
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