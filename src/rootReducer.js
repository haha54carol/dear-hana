import { combineReducers } from 'redux'

import note from './addNote/actionsReducers'
import noteList from './Home/actionsReducers'


export default combineReducers({
    note, noteList
})