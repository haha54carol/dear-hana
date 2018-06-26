import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { color } from '../theme'
import SearchBar from './Compo/SearchBar'
import Btn from '../Home/Compo/AddBtn'
import Note from './Compo/Note'
import Greenting from './Compo/Greeting'
import { connect } from 'react-redux';
import { deleteNote, pinNote, unPinNote, resetNoteList } from './actionsReducers'

class Compo extends Component {

    render() {
        const { deleteNote, pinNote, unPinNote, noteList: { byId, pinedIds }, navigation } = this.props
        const notes = Object.keys(byId).reduce((acc, key) => {
            if (!byId[key].isPined) acc.push({ ...byId[key] })

            return acc
        }, [])

        const pinedNotes = Object.keys(byId).reduce((acc, key) => {
            if (pinedIds.indexOf(key) !== -1) acc.push({ ...byId[key] })

            return acc
        }, [])

        const notesSortByTime = notes.sort((n1, n2) => {
            let m1 = new Date(n1)
            let m2 = new Date(n2)

            return m1.getTime() - m2.getTime()
        })

        return (
            <View style={style.container}>
                <SearchBar />
                {Object.keys(byId).length == 0 ? <Greenting /> : null}
                <View>
                    {
                        pinedNotes.length == 0 ? null :

                            <FlatList
                                data={pinedNotes}
                                renderItem={({ item, index }) =>
                                    <Note
                                        note={item}
                                        pinNote={pinNote}
                                        navigation={navigation}
                                        index={index}
                                        deleteNote={deleteNote}
                                        isPined={true}
                                        unPinNote={unPinNote}
                                    />}
                                keyExtractor={(item, index) => index.toString()}
                            />
                    }
                </View>
                <View>
                    {
                        notes.length == 0 ?
                            null
                            : <FlatList
                                data={notesSortByTime}
                                renderItem={({ item, index }) =>
                                    <Note
                                        note={item}
                                        pinNote={pinNote}
                                        navigation={navigation}
                                        index={index}
                                        deleteNote={deleteNote}
                                        isPined={false}
                                    />}
                                keyExtractor={(item, index) => index.toString()}
                            />
                    }
                </View>
                <Btn navigation={this.props.navigation} />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: color.background,
        flex: 1
    },

})



const mapStateToProps = (state) => {
    const { noteList } = state
    return {
        noteList
    }
}

const mapDispatchToProps = {
    deleteNote, pinNote, unPinNote, resetNoteList
}


export default connect(mapStateToProps, mapDispatchToProps)(Compo)
