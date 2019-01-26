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

import PictureView from './pictureview/pictureview'

const sagaMiddleware = createSagaMiddleware()

// Redux store with saga middleware applied
const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(watcherSaga)

export default class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <PictureView />
            </Provider>
        )
    }
}
