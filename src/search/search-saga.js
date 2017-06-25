import { call, put, takeEvery, select } from 'redux-saga/effects';
import Actions from '../actions';
import * as openLibraryService from '../services/open-library-service';

export default function* searchSaga() {
    yield takeEvery(Actions.SEARCH_SEARCH_BOOKS, searchBooks);
}

function* searchBooks(action) {
    try {
        const store = yield select();
        const keywords = store.search.keywords;
        const data = yield call(openLibraryService.search, keywords); 
        yield put({
            type: Actions.SEARCH_SEARCH_BOOKS + '_SUCCESS', 
            data
        });     
    } catch (error) {
        yield put({
            type: Actions.SEARCH_SEARCH_BOOKS + '_ERROR', 
            error
        });
    }
}