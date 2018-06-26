import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

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
        paddingTop: 15,
        paddingRight: 12,
        paddingLeft: 12,
        paddingBottom: 15,
    },

    text: {
        fontSize: 18
    }

})