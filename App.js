import React, { Component } from 'react';
import { Provider } from 'react-redux';
import appStore from './src/store';
import { PersistGate } from 'redux-persist/integration/react'
import PrimaryNav from './src/PrimaryNav'

export default class App extends Component {

    render() {

        const { store, persistor } = appStore()

        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <PrimaryNav />
                </PersistGate>
            </Provider>
        )
    }
};
