import { connect } from 'react-redux';
import Comp from './index'
import { deleteNote } from './actionsReducers'

const mapStateToProps = (state) => {
    return {
        noteList: state.noteList
    }
}

const mapDispatchToProps = {
    deleteNote
}


export default connect(mapStateToProps, mapDispatchToProps)(Comp)
