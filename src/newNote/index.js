import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, AsyncStorage } from 'react-native'
import { color, fontSize } from '../theme'
import Note from './noteInput'

export default class NewNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: null,
            content: null
        }
        this.onContentChange = this.onContentChange.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
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
                <View style={style.titleContainer}>
                    <View style={style.titlePrefixContainer}>
                        <Text style={style.titlePrefix}>H1</Text>
                    </View>
                    <TextInput
                        style={style.title}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.onTitleChange(text)}
                        value={this.state.title}
                    />
                </View>
                <Note content={this.state.content} onContentChange={this.onContentChange} />
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
    },
    titleContainer: {
        flexDirection: 'row',
        height: 30,
    },
    contentContainer: {
        padding: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        height: 40,
        flex: 1,
    },
    titlePrefixContainer: {
        width: 30,

    },
    titlePrefix: {
        fontSize: 16,
        color: '#b5bdc6',
        height: 30,
        paddingTop: 10,
    }
})
