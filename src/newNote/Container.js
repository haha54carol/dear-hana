import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'

import { connect } from 'react-redux';
import { addNote, updateNote } from '../Home/actionsReducers'
import Title from './Compo/Title'
import Content from './Compo/Content'


class NewNote extends Component {
    constructor(props) {
        super(props)
        const { navigation, byId } = props
        const id = navigation.getParam('id', null)

        if (id) {
            const { title, content } = byId[id]

            this.state = {
                id, title, content
            }
        } else {
            this.state = {
                title: '',
                content: ''
            }
        }

        this.onContentChange = this.onContentChange.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
    }

    componentWillUnmount() {
        const { addNote, updateNote } = this.props
        const { title, content, id } = this.state

        const timestamp = new Date()

        if (id) {
            updateNote({
                id,
                title,
                content,
                timestamp
            })
        } else {
            addNote({
                id: timestamp.getTime().toString(),
                title,
                content,
                isPined: false,
                timestamp
            })
        }


    }

    onTitleChange(text) {
        this.setState({
            title: text
        })
    }

    onContentChange(text) {
        this.setState({
            content: text
        })
    }

    render() {
        return (
            <View style={style.container}>
                <Title title={this.state.title} onChange={this.onTitleChange} />
                <Content content={this.state.content} onChange={this.onContentChange} />
            </View>
        )
    }
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
        flexDirection: 'column'
    }
})

const mapStateToProps = (state) => {
    const { noteList: { byId } } = state
    return {
        byId
    }
}

const mapDispatchToProps = {
    addNote, updateNote
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNote)