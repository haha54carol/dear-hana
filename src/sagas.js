import { takeLatest, call, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import watcherNote from './Home/saga'

function* watcherCallAPI() {
    yield takeLatest('API_CALL_REQUEST', workerCallAPISaga)
}

const fetchDog = () => {
    return axios({
        method: 'get',
        url: "https://dog.ceo/api/breeds/image/random"
    })
}

function* workerCallAPISaga() {
    try {
        const response = yield call(fetchDog)
        const payload = response.data.message

        yield put({ type: 'API_CALL_SUCCESS', payload })
    } catch (error) {
        yield put({ type: 'API_CALL_FAILED', error })
    }
}


const sagas = [
    watcherCallAPI, watcherNote
]



export default function* root() {
    yield sagas.map(saga => fork(saga));
}