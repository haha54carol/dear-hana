import { connect } from 'react-redux'
import Comp from './addBtn'
import { addNote, deleteNote, callRequest } from './actionsReducers'


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = {
    addNote, deleteNote, callRequest
};




// const mapDispatchToProps = dispatch => {
//     return {
//         callRequest: () => {
//             return dispatch(callRequest())
//         },
//         addNote: () => {
//             return dispatch(addNote())
//         },
//         deleteNote: () => {
//             return dispatch(deleteNote())
//         }
//     }
// }



export default connect(mapStateToProps, mapDispatchToProps)(Comp)
