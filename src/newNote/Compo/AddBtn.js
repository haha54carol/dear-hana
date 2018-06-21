import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { color } from '../../theme'

export default class AddBtn extends Component {
    render() {
        const { navigation } = this.props
        return (
            <TouchableOpacity style={style.btn} activeOpacity={.5} onPress={() => navigation.navigate('NewNote')} >
                <Icon name="file" size={30} style={style.icon} />
            </TouchableOpacity>
        );
    }
}

const style = StyleSheet.create({
    btn: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: color.primary,
        bottom: 120,
        right: 20,
        borderRadius: 50,
    },
    icon: {
        color: '#fff',
        paddingTop: 10,
        paddingLeft: 13,
    }
})