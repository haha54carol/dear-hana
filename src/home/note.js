import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import moment from 'moment'
import Swipeout from 'react-native-swipeout'

import { color } from '../theme'


const Date = ({ dateTime }) => (
    <Text style={style.dateTimeText}>
        {dateTime}
    </Text>
)

moment.locale('en', {
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'seconds',
        ss: '%ss',
        m: 'a min',
        mm: '%dm',
        h: 'an Hr',
        hh: '%dhr',
        d: 'a day',
        dd: '%dd',
        M: 'a month',
        MM: '%dM',
        y: 'a year',
        yy: '%dY'
    }
});


export default class Note extends Component {

    render() {
        const { index, note: { title, content, timestamp }, navigation, deleteNote } = this.props

        let dt = moment(timestamp).fromNow(true)

        const swipeoutBtns = [{
            text: 'Delete',
            backgroundColor: color.primary,
            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            onPress: () => { deleteNote(timestamp) }
        }]

        return (

            <Swipeout right={swipeoutBtns}
                autoClose={true}
                backgroundColor='transparent'>
                <TouchableHighlight underlayColor='white' key={index} onPress={() => navigation.navigate('Home')}>
                    <View style={style.noteContainer}>
                        <View style={style.dateTimeContainer}>
                            <Text style={style.dateTimeText}>
                                {dt}
                            </Text>
                        </View>
                        <View style={style.contentContainer}>
                            <Text style={style.titleText}>{title}</Text>
                            <Text style={style.contentText} numberOfLines={2} ellipsizeMode={'tail'}>{content}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </Swipeout>
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
        marginRight: 0,
    },
    noteContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 106
    },
    dateTimeContainer: {
        width: 60
    },

    dateTimeText: {
        color: '#a1a1a1',
        padding: 10,
        textAlign: 'center',
    },
})
