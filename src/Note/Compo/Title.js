import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { fontSize, color } from '../../theme'

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
        height: 50,
    },

    prefix: {
        width: 30,
    },

    prefixText: {
        fontSize: fontSize.h4,
        color: color.thirdary,
        height: 30,
        paddingTop: 10,
    },

    titleText: {
        fontSize: fontSize.h1,
        fontWeight: 'bold',
        height: 40,
        flex: 1,
    }
})


