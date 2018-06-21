import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import keys from '../keys'
import Note from './note'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myNotes: [],
            isLoading: true,
            error: false
        }
    }


    render() {
        const { navigation, noteList, deleteNote } = this.props

        if (noteList.length == 0)
            return (<View><Text>Write Something....</Text></View>)

        return (
            <FlatList
                data={noteList}
                renderItem={({ item, index }) =>
                    <Note
                        note={item}
                        navigation={navigation}
                        index={index}
                        deleteNote={deleteNote}
                    />}
            />
        )
    }
}
