import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import { color } from '../../theme'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HeaderFnBar extends Component {
    render() {
        const { goBack } = this.props.navigation
        return (
            <View style={style.container}>
                <Icon name="angle-left" size={35}
                    onPress={() => goBack(null)}
                    style={{
                        color: color.thirdary,
                        top: 10,
                        left: 25,
                        position: 'absolute',
                        width: 150
                    }} />
                <Icon name="share-square-o" size={21} style={{
                    color: color.thirdary,
                    top: 20,
                    right: 55,
                    position: 'absolute',
                    width: 40,
                    textAlign: 'center'
                }} />
                <Icon name="info-circle" size={21} style={{
                    color: color.thirdary,
                    top: 20,
                    right: 10,
                    position: 'absolute',
                    width: 45,
                    textAlign: 'center'
                }} />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: color.white,

    },
    backIcon: {
        width: 150,
        top: 10

    }
})

