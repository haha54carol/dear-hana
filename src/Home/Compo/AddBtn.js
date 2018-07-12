import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { color } from '../../theme'

export default class AddBtn extends Component {
    render() {
        const { push } = this.props.navigation
        return (
            <TouchableOpacity style={style.btn} activeOpacity={.5} onPress={() => this.props.navigation.push('Note')} >
                <Icon name="pencil" size={25} style={style.icon} />
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
        bottom: 20,
        right: 20,
        borderRadius: 50,

    },
    icon: {
        color: '#fff',
        paddingTop: 12,
        paddingLeft: 14,
    }
})

