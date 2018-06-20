import { takeLatest, call, put } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import keys from '../keys'

export default function* watcherNote() {
    yield takeLatest('NOTES_LIST_REQUEST', workerNoteSaga)
}

const getNote = () => {
    try {
        return AsyncStorage.getItem(keys.myNotes)
    } catch (error) {
        return []
    }
}


function* workerNoteSaga() {
    try {
        let payload = yield call(getNote)

        //let payload = AsyncStorage.getItem(keys.myNotes)
        payload = JSON.parse(payload)
        yield put({ type: 'NOTES_LIST_SUCCESS', payload })
    } catch (error) {
        console.log('error')
        yield put({ type: 'NOTES_LIST_SUCCESS', error })
    }
}