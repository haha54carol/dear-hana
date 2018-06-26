import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class Title extends Component {
    render() {
        const { onChange, title } = this.props
        return (
            <View style={style.container}>
                <View style={style.prefix}>
                    <Text style={style.prefixText}>H1</Text>
                </View>
                <TextInput
                    style={style.titleText}
                    underlineColorAndroid="transparent"
                    onChangeText={onChange}
                    value={title}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 30,
    },

    prefix: {
        width: 30,
    },

    prefixText: {
        fontSize: 16,
        color: '#b5bdc6',
        height: 30,
        paddingTop: 10,
    },

    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        height: 40,
        flex: 1,
    }
})


