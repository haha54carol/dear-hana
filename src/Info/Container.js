import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { color } from '../theme'


export default class InfoDrawer extends Component {
    static navigationOptions = {
        drawerLabel: 'Information',
        drawerIcon: <Icon name="info-circle" size={20} style={{
            color: color.thirdary,
            paddingTop: 10,
            paddingRight: 20
        }} />
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        );
    }
}
