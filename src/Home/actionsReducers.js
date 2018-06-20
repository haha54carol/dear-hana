import { createAction, handleActions } from 'redux-actions'

export const notesListRequest = createAction('NOTES_LIST_REQUEST')
export const notesListSuccess = createAction('NOTES_LIST_SUCCESS')
export const addNote = createAction('ADD_NOTE')
export const notesListError = createAction('NOTES_LIST_ERROR')

const defaultState = []

//reducer
export default handleActions({
    [addNote]: (state, action) => ([
        ...state, action.payload
    ]),

}, defaultState)