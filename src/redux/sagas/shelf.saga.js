import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getItems (action) {
    try {
        const response = yield axios.get('/api/shelf')
        console.log('response', response);
        yield put({ type: 'SET_ITEM', payload: response.data });
    }
    catch (error) {
        console.log('error getting shelf', error);
    }
}

function* deleteItems (action) {
    try {
        yield axios.delete(`/api/shelf/${action.payload}`)
        yield put({ type: 'FETCH_ITEMS'});
    }
    catch (error) {
        console.log('error deleting item:', error)
    }
}

function* postItem (action) {
    const item = {
        description: action.payload.description,
        user_id: action.payload.user_id
    }
    try {
        yield axios.post('/api/shelf', item);

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