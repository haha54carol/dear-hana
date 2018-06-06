import { ADD_NOTE } from '../types'

const initState = {
    count:0
}

const note = (state = initState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {...state, count: state.count+1}

        default:
            return state
    }
}

export const addNote = () => {
    return {
        type: ADD_NOTE
    }
}


export default note