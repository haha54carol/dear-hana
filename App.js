import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/addNote/addBtnContainer'
import NewNoteScreen from './src/newNote/index'
import { Provider } from 'react-redux';
import store from './src/store';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        NewNote: NewNoteScreen,
    },
    {
        initialRouteName: 'Home'
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
