import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native'

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
        console.log('c will unmount')
        const { addNote } = this.props
        const { title, content } = this.state

        console.log(`title: ${title}, content: ${content}`)

        addNote({
            title,
            content
        })



        // this.saveNote()
    }

    // async saveNote() {
    //     console.log('saveNote')
    //     const { title, content } = this.state

    //     try {
    //         let data = await AsyncStorage.getItem(keys.myNotes)
    //         data = JSON.parse(data)

    //         let note = {
    //             title, content
    //         }

    //         if (!data)
    //             data = []


    //         data.push(note)

    //         AsyncStorage.setItem(keys.myNotes, JSON.stringify(data))
    //         this.props.notesListRequest()

    //     } catch (error) {
    //         console.log('error: ' + error)
    //     }

    // }


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