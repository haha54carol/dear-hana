import React, { Component } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';

import { color } from '../theme'
import SearchBar from './Compo/SearchBar'
import AddBtn from '../Home/Compo/AddBtn'
import NoteBar from './Compo/NoteBar'
import Greenting from './Compo/Greeting'
import { connect } from 'react-redux';
import { deleteNote, pinNote, unPinNote, resetNoteList } from './actionsReducers'

class Compo extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#fff',
        }
    }

    render() {
        const { deleteNote, pinNote, unPinNote, noteList: { byId }, navigation } = this.props
        const notes = Object.keys(byId).reduce((acc, key) => {
            acc.push({ ...byId[key] })
            return acc
        }, [])

        const notesSortByTime = notes.sort((n1, n2) => {
            let m1 = new Date(n1.timestamp)
            let m2 = new Date(n2.timestamp)

            return m2.getTime() - m1.getTime()
        })

        const pinedNotes = notesSortByTime.filter(item => item.isPined == true)
        const unPinedNotes = notesSortByTime.filter(item => item.isPined == false)

        return (
            <SafeAreaView style={style.container}>
                <SearchBar />
                {Object.keys(byId).length == 0 ? <Greenting /> : null}
                <View>
                    {
                        pinedNotes.length == 0 ? null :
                            <FlatList
                                data={pinedNotes}
                                renderItem={({ item, index }) =>
                                    <NoteBar
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
                        unPinedNotes.length == 0 ? null :
                            <FlatList
                                data={unPinedNotes}
                                renderItem={({ item, index }) =>
                                    <NoteBar
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
                <AddBtn navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: color.background,
        flex: 1,
        paddingTop: 30,
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
// const Container = connect(mapStateToProps, mapDispatchToProps)(Compo)

// export default Home = createDrawerNavigator(
//     {
//         Home: Container
//     }, {
//         contentComponent: Drawer,
//         drawerWidth: 300
//     }
// )