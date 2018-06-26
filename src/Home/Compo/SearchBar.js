import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { fontSize, color } from '../../theme'
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
                        placeholderTextColor={color.searchText}
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
        margin: 15,
        height: 45
    },
    c2: {
        flex: 6,
        borderRadius: 5,
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: color.searchBorder,
        backgroundColor: color.white
    },
    text: {
        flex: 1,
        textAlign: 'center',
        lineHeight: 40,
        color: color.searchText,
        fontSize: fontSize.h4
    },
    icon: {
        color: '#a7a7a9',
        padding: 13
    },
    input: {
        borderWidth: 0,
        fontSize: fontSize.h4,
        color: color.primary,
        flex: 1,
        paddingTop: 2,
        borderRadius: 5,
        paddingRight: 10,
    }

})