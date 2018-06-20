import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import appStore from './src/store';
import { PersistGate } from 'redux-persist/integration/react'

import HomeScreen from './src/addNote/addBtnContainer'
import NewNoteScreen from './src/newNote/Container'
//import ListScreen from './src/home/index'
import ListScreen from './src/Home/noteListContainer'

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

        const { store, persistor } = appStore()

        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RootStack />
                </PersistGate>
            </Provider>
        )
    }
};
