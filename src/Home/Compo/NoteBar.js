import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import Swipeout from 'react-native-swipeout'
import { color, fontSize } from '../../theme'


moment.locale('en', {
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'seconds',
        ss: '%ss',
        m: 'a min',
        mm: '%dm',
        h: '1h',
        hh: '%dh',
        d: 'a day',
        dd: '%dd',
        M: 'a month',
        MM: '%dM',
        y: 'a year',
        yy: '%dY'
    }
});


export default class NoteBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pressStatus: false
        }
    }

    _onHideUnderlay() {
        this.setState({
            pressStatus: false
        })
    }

    _onShowUnderlay() {
        this.setState({
            pressStatus: true
        })
    }

    render() {
        const { index, note: { title, content, timestamp, id }, navigation, deleteNote, pinNote, unPinNote, isPined } = this.props

        let dt = moment(timestamp).fromNow(true)

        const swipeoutBtns = [{
            component: (
                <View style={style.iconContainer}>
                    <Icon name="thumb-tack" size={30} style={style.icon} />
                    <Text style={style.iconText}>{isPined ? `Unpin` : `Pin to top`}</Text>
                </View>
            ),
            backgroundColor: color.secondary,
            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            onPress: () => {
                isPined ?
                    unPinNote(id) :
                    pinNote(id)
            }
        }, {
            component: (
                <View style={style.iconContainer}>
                    <Icon name="trash-o" size={30} style={style.icon} />
                    <Text style={style.iconText}>Delete</Text>
                </View>
            ),
            backgroundColor: color.primary,
            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            onPress: () => { deleteNote(id) }
        }]

        return (
            <Swipeout right={swipeoutBtns}
                autoClose={true}
                backgroundColor='transparent' >
                <TouchableHighlight
                    underlayColor='white'
                    key={index}
                    onPress={() => navigation.navigate('Note', { id })}
                    style={this.state.pressStatus ? style.borderActive : null}
                    onShowUnderlay={this._onShowUnderlay.bind(this)}
                    onHideUnderlay={this._onHideUnderlay.bind(this)}
                >
                    <View style={style.noteContainer} key={`view_${index}`}>
                        <View style={style.dateTimeContainer}>
                            <Text style={style.dateTimeText}>
                                {dt}
                            </Text>
                            {isPined ? <Icon name="thumb-tack" size={15} style={style.pinIcon} /> : null}
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
        fontSize: fontSize.h2,
        color: color.secondary,
        height: 40,
        lineHeight: 40,
    },
    contentText: {
        color: color.thirdary,
        height: 65,
        fontSize: fontSize.h4,
        paddingBottom: 5,
        lineHeight: 23,
    },
    contentContainer: {
        flex: 1,
        borderBottomColor: color.thirdary,
        borderBottomWidth: 0.5,
        flexDirection: 'column',
        marginRight: 0,
    },
    noteContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    dateTimeContainer: {
        width: 60
    },

    dateTimeText: {
        color: color.thirdary,
        padding: 10,
        textAlign: 'center',
        fontSize: fontSize.h4
    },

    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    icon: {
        color: color.white
    },

    iconText: {
        color: color.white,
        fontSize: 15
    },

    borderActive: {
        borderLeftColor: color.primary,
        borderLeftWidth: 2.5

    },

    pinIcon: {
        color: color.primary,
        textAlign: 'center',
        paddingTop: 14
    }
})
