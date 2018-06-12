import { createAction, handleActions } from 'redux-actions'


export const deleteNote = createAction('DELETE_NOTE');
export const addNote = createAction('ADD_NOTE');

export const callRequest = createAction('API_CALL_REQUEST')
export const callSuccess = createAction('API_CALL_SUCCESS')
export const callFailed = createAction('API_CALL_FAILED')


//reducer
const defaultState = { count: 0, url: '', error: null }

export default handleActions({
    [deleteNote](state) {
        return { ...state, count: state.count - 1 }
    },
    [addNote](state) {
        return { ...state, count: state.count + 1 }
    },
    [callSuccess](state, action) {
        return { ...state, url: action.payload, error: null }
    },
    [callFailed](state, action) {
        return { ...state, error: action.error }
    }

}, defaultState)

