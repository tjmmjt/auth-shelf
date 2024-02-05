import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getEquipment  (action) {
    try {
        const response = yield axios.get('https://www.dnd5eapi.co/api/equipment')
        console.log('response', response);
        yield put({ type: 'SET_EQUIPMENT', payload: response.data });
    }
    catch (error) {
        console.log('error getting equipment', error);
    }
}


function* equipmentSaga() {
    yield takeLatest ('FETCH_EQUIPMENT', getEquipment);
}

export default equipmentSaga;