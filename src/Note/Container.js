import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation'

import { addNote, updateNote } from '../Home/actionsReducers'
import Title from './Compo/Title'
import Content from './Compo/Content'
import { color } from '../theme'
import HeaderFnBar from './Compo/HeaderFnBar'

class Note extends Component {

    static navigationOptions = {
        headerBackImage: <Icon name="angle-left" size={35} style={{
            color: color.thirdary,
            paddingLeft: 15
        }} />,
        headerRight: <HeaderFnBar />,
    }

    constructor(props) {
        super(props)
        const { navigation, byId } = props
        const id = navigation.getParam('id', null)

        if (id) {
            const { title, content } = byId[id]

            this.state = {
                id, title, content, edit: false
            }
        } else {
            this.state = {
                title: '',
                content: '',
                edit: false
            }
        }

        this.onContentChange = this.onContentChange.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
    }

    componentWillUnmount() {
        const { addNote, updateNote } = this.props
        const { title, content, id, edit } = this.state

        const timestamp = new Date()

        if (id && edit) {
            updateNote({
                id,
                title,
                content,
                timestamp
            })
        } else if (edit) {
            addNote({
                id: timestamp.getTime().toString(),
                title,
                content,
                isPined: false,
                timestamp
            })
        }

    }

    onTitleChange(text) {
        if (text !== '' || text !== null) {
            this.setState({
                title: text,
                edit: true
            })
        }

    }

    onContentChange(text) {
        if (text !== '' || text !== null) {
            this.setState({
                content: text,
                edit: true
            })
        }

    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={style.c1}>

                <HeaderFnBar navigation={navigation} />
                <View style={style.c2}>
                    <Title title={this.state.title} onChange={this.onTitleChange} />
                    <Content content={this.state.content} onChange={this.onContentChange} />
                </View>
            </SafeAreaView>
        )
    }
};

const style = StyleSheet.create({
    c1: {
        backgroundColor: color.white,
        flex: 1,
        paddingTop: 30,
        flexDirection: 'column'
    },
    c2: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    }
})

const mapStateToProps = (state) => {
    const { noteList: { byId } } = state
    return {
        byId
    }
}

const mapDispatchToProps = {
    addNote, updateNote
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)

// const Container = connect(mapStateToProps, mapDispatchToProps)(Note)

// export default createStackNavigator(
//     {
//         Note: Container
//     }
// )