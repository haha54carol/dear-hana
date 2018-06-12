import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { color, fontSize } from '../theme'
import Title from './title'


export default class NewNote extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text> test !</Text>
            </View>
        )
    }
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        color: '#565656',
    }
})
