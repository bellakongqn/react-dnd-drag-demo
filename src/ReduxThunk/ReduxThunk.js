import React, { Component } from 'react';
import {Provider} from 'react-redux'
import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './Reducer';
import AsyncApp from './Index'

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
    )

class ReduxThunk extends Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        );
    }
}

export default ReduxThunk;