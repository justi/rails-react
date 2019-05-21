import React from 'react';
import render from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../configureStore'
import HelloWorld from "./HelloWorld";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => ("Home")}/>
                <Route path="/hello" render={() => <HelloWorld greeting="Friend"/> } />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
