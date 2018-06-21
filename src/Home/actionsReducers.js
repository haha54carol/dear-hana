import { createAction, handleActions } from 'redux-actions'

export const addNote = createAction('ADD_NOTE')
export const deleteNote = createAction('DELETE_NOTE')

const defaultState = []

//reducer
export default handleActions({
    [addNote]: (state, action) => ([
        action.payload, ...state
    ]),
    [deleteNote]: (state, action) => {

        return state.filter(item => item.timestamp != action.payload)
    }

}, defaultState)