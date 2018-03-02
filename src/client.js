import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {hydrate} from 'react-dom'
//-----Main component
import App from "./client/App";
//--------
import store from './state'
import {Provider} from 'react-redux'


class Main extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>
        );
    }
}

hydrate(<Main/>, document.getElementById('root'));
