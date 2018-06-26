import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'

import { connect } from 'react-redux';
import { addNote } from '../Home/actionsReducers'
import Title from './Compo/Title'
import Content from './Compo/Content'


class NewNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }

        this.onContentChange = this.onContentChange.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)

    }

    componentWillUnmount() {
        const { addNote } = this.props
        const { title, content } = this.state

        const t = new Date()
        addNote({
            id: t.getTime().toString(),
            title,
            content,
            isPined: false,
            timestamp: t
        })
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

const mapStateToProps = () => ({})

const mapDispatchToProps = {
    addNote
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNote)