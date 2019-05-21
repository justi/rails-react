import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore'
import HelloWorld from "./HelloWorld";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const store = configureStore();

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={() => ("Home")}/>
                        <Route path="/hello" render={() => <HelloWorld greeting="Friend"/> } />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    };
};

export default App;