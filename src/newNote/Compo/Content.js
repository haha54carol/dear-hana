import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

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
        padding: 20,
    },

    text: {
        fontSize: 18
    }

})