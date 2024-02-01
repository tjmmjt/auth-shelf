import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getItems (action) {
    try {
        const response = yield axios.get('/api/shelf')
        yield put({ type: 'SET_ITEM', payload: response.data });
    }
    catch (error) {
        console.log('error getting shelf', error);
    }
}

function* deleteItems (action) {
    try {
        yield axios.delete('/api/shelf')
    }
    catch (error) {
    }
}

function* postItem (action) {
    try {
        yield axios.post('/api/shelf', action.payload);
    }
    catch (error) {
        console.log('error posting item', error)     
    }


}

function* shelfSaga() {
    yield takeLatest ('FETCH_ITEMS', getItems)
    yield takeLatest ('DELETE_ITEM', deleteItems)
    yield takeLatest ('POST_ITEM', postItem)
}

export default shelfSaga