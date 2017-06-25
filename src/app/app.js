import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../login/login';
import Main from '../main/main';
import BookContainer from '../book/book-container';
import '../css/app.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/main' component={Main}/>
                    <Route path='/book' component={BookContainer}/>
                </Switch>
            </div>
        );
    }
}

export default App;