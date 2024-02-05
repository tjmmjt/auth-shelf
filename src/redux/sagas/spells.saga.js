import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getSpells  (action) {
    try {
        const response = yield axios.get('/api/spells')
        console.log('response', response);
        yield put({ type: 'SET_SPELLS', payload: response.data });
    }
    catch (error) {
        console.log('error getting shelf', error);
    }
}





function* spellsSaga() {
    yield takeLatest ('FETCH_SPELLS', getSpells)

}

export default spellsSaga