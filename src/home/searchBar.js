import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { fontSize, color } from '../theme'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { text: null };
    }

    render() {
        return (
            <View style={style.c1}>
                <View style={style.c2}>
                    <Icon name="search" size={15} style={style.icon} />
                    <TextInput
                        style={style.input}
                        underlineColorAndroid="transparent"
                        placeholder="Search Notes"
                        placeholderTextColor="#a7a7a9"
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
                <Text onPress={() => { this.setState({ text: null }) }} style={style.text}>Cancel</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    c1: {
        borderRadius: 5,
        flexDirection: 'row',
        margin: 10,
    },
    c2: {
        flex: 6,
        borderRadius: 5,
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: '#e5e4ea',
        backgroundColor: '#fff'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        lineHeight: 40,
        color: '#a7a7a9',
    },
    icon: {
        color: '#a7a7a9',
        padding: 13
    },
    input: {
        borderWidth: 0,
        fontSize: fontSize.h5,
        color: '#a7a7a9',
        flex: 1,
        paddingTop: 2,
        borderRadius: 5,
        paddingRight: 10,
    }

})