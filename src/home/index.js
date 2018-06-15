import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';


import { color } from '../theme'
import SearchBar from './searchBar'
import List from './noteList'
import Btn from '../newNote/addBtn'

export default class componentName extends Component {

    render() {
        return (
            <View style={style.container}>
                <SearchBar />
                <List navigation={this.props.navigation} />
                <Btn navigation={this.props.navigation} />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: color.background,
        flex: 1
    }
})
