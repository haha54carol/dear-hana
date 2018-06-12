import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/home'
import { Provider } from 'react-redux';
import store from './src/store';

const RootStack = createStackNavigator({
    Home: HomeScreen
})

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        )
    }
};
