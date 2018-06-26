import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import appStore from './src/store';
import { PersistGate } from 'redux-persist/integration/react'

//import HomeScreen from './src/addNote/addBtnContainer'
import NoteScreen from './src/Note/Container'
//import ListScreen from './src/home/index'
import HomeScreen from './src/Home/Container'

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Note: NoteScreen
    },
    {
        initialRouteName: 'Home'
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
