import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';

import HomeScreen from './src/addNote/addBtnContainer'
import NewNoteScreen from './src/newNote/index'
import ListScreen from './src/home/index'

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        NewNote: NewNoteScreen,
        List: ListScreen
    },
    {
        initialRouteName: 'List'
    }
)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        )
    }
};
