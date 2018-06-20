import { connect } from 'react-redux';
import Comp from './index'
import { notesListRequest } from './actionsReducers'


const mapStateToProps = (state) => {
    return {
        noteList: state.noteList
    }
}

const mapDispatchToProps = {
    notesListRequest
}


export default connect(mapStateToProps, mapDispatchToProps)(Comp)
