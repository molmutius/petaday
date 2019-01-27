/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { reducer } from './redux'
import { watcherSaga } from './sagas'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import PictureView from './home-screen/home-screen'
import DetailScreen from './detail-screen/detail-screen'

const sagaMiddleware = createSagaMiddleware()

// Redux store with saga middleware applied
const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware))
)

const MainNavigator = createStackNavigator({
    Home: { screen: PictureView },
    Detail: { screen: DetailScreen }
}, {
    initialRouteName: 'Home'
})

const AppContainer = createAppContainer(MainNavigator)

sagaMiddleware.run(watcherSaga)

export default class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}
