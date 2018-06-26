import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { color, fontSize } from '../../theme'

export default class Content extends Component {
    render() {
        const { onChange, content } = this.props
        return (
            <View style={style.container}>
                <TextInput
                    style={style.text}
                    editable={true}
                    multiline={true}
                    underlineColorAndroid="transparent"
                    onChangeText={onChange}
                    value={content}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingRight: 13,
        paddingLeft: 13,
        paddingBottom: 15,
    },

    text: {
        fontSize: fontSize.h3,
        color: color.secondary
    }

})