import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color, fontSize } from '../../theme'


export default class Greenting extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>Write your first note !</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 15,
    },
    penIcon: {
        color: color.thirdary
    },
    text: {
        fontSize: fontSize.h4,
        color: color.thirdary
    }
})
