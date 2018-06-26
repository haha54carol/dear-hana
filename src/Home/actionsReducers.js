import { createAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
export const addNote = createAction('ADD_NOTE')
export const deleteNote = createAction('DELETE_NOTE')
export const resetNoteList = createAction('RESET_NOTELIST')
export const updateNote = createAction('UPDATE_NOTE')
export const pinNote = createAction('PIN_NOTE')
export const unPinNote = createAction('UNPIN_NOTE')


const byId = handleActions({
    [addNote]: (state, action) => {
        return {

            [action.payload.id]: action.payload,
            ...state,
        }
    },
    [deleteNote]: (state, action) => {
        return Object.keys(state).reduce((acc, key) => {
            if (key != action.payload) {
                return { ...acc, [key]: state[key] }
            }

            return acc
        }, {})
    },
    [updateNote]: (state, action) => {
        let { id, content, title, timestamp } = action.payload
        return {
            ...state,
            [id]: {
                ...state[id],
                content,
                title,
                timestamp
            }
        }
    },
    [pinNote]: (state, action) => {
        let id = action.payload
        return {
            ...state,
            [id]: {
                ...state[action.payload],
                isPined: true
            }
        }
    },
    [unPinNote]: (state, action) => {
        return {
            ...state,
            [action.payload]: {
                ...state[action.payload],
                isPined: false
            }
        }
    },
    [resetNoteList]: (state, action) => {
        return {}
    },
}, {})

const pinedIds = handleActions({
    [pinNote]: (state, action) => ([
        action.payload, ...state
    ]),
    [resetNoteList]: () => ([]),
    [unPinNote]: (state, action) => {
        return state.filter(item => item !== action.payload)
    },
    [deleteNote]: (state, action) => {
        return state.filter(item => item !== action.payload)
    }
}, [])

export default combineReducers({
    byId, pinedIds
})