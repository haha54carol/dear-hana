import React, { Component } from 'react';
import { View, Text, SectionList, FlatList, AsyncStorage } from 'react-native';
import keys from '../keys'
import Note, { Title } from './note'


//const overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override {item}</Text>

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myNotes: [],
            isLoading: true,
            error: false
        }
    }

    async getMyNotes() {
        try {
            let data = await AsyncStorage.getItem(keys.myNotes)
            this.setState({
                myNotes: JSON.parse(data),
                isLoading: false
            })
        } catch (error) {
            this.setState({
                error: true,
                isLoading: false
            })
        }
    }

    componentDidMount() {
        this.getMyNotes()
    }

    render() {
        const { navigation } = this.props
        const { myNotes, isLoading, error } = this.state
        if (isLoading) {
            return <Text>Loading</Text>
        }

        if (error) {
            return <Text>Error ... (x_x)/ </Text>
        }

        return (
            <FlatList
                data={myNotes}
                renderItem={({ item, index }) => <Note title={item.title} navigation={navigation} content={item.content} index={index} />}
            />
        )
    }
}

// notes = [{key, content}, {key, content}]