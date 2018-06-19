import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class NoteInput extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         text: null
    //     }
    // }

    // onTextChange(text) {
    //     this.setState({
    //         text: text
    //     })
    // }

    render() {
        const { onContentChange, content } = this.props
        return (
            <View style={style.container}>
                <TextInput
                    style={style.contentText}
                    editable={true}
                    multiline={true}
                    underlineColorAndroid="transparent"
                    onChangeText={onContentChange}
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

    contentText: {
        fontSize: 18
    }
})