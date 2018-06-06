import { connect } from 'react-redux'
import Comp from './addBtn'
import { addNote } from './reducers'

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = {
    addNote
};

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
