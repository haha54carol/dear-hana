import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, TouchableHighlight } from 'react-native';
import timeago from 'timeago.js'
import moment from 'moment'

const Date = ({ dateTime }) => (
    <Text style={style.dateTimeText}>
        {dateTime}
    </Text>
)

export default class Note extends Component {
    render() {
        const { content, index, title, navigation } = this.props
        const dateTime = moment().format('MMM DD')
        return (
            <TouchableHighlight underlayColor={'white'} key={index} onPress={() => navigation.navigate('Home')}>
                <View style={style.noteContainer}>
                    <View style={style.dateTimeContainer}>
                        <Date dateTime={dateTime} />
                    </View>
                    <View style={style.contentContainer}>
                        <Text style={style.titleText}>{title}</Text>
                        <Text style={style.contentText} numberOfLines={2} ellipsizeMode={'tail'}>{content}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const style = StyleSheet.create({
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#4a4a4a',
        height: 40,
        lineHeight: 40,
    },
    contentText: {
        color: '#b5bdc6',
        height: 65,
        fontSize: 15,
        paddingBottom: 5,
        lineHeight: 23
    },
    contentContainer: {
        flex: 1,
        borderBottomColor: '#b5bdc6',
        borderBottomWidth: 0.5,
        flexDirection: 'column',
        marginRight: 10,

    },
    noteContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 106
    },
    dateTimeContainer: {
        width: 50
    },

    dateTimeText: {
        color: '#a1a1a1',
        padding: 10,
        textAlign: 'center',
    },
})
