import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import mylistReducers from './mylist/mylist-reducers';
import searchReducers from './search/search-reducers';
import searchSaga from './search/search-saga';
import App from './app/app';
import './css/base.css';
import 'roboto-npm-webfont';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

function configureStore() {
    const rootReducers = combineReducers({
        mylist: mylistReducers,
        search: searchReducers
    })

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducers,
        applyMiddleware(sagaMiddleware)
    );

    function* rootSaga() {
        yield all([
            searchSaga()
        ])
    }

    sagaMiddleware.run(rootSaga);
    return store;
}