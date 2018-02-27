import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {hydrate} from 'react-dom'

//-----Main component
import App from "./components/App";

//--------
import store from './state'
import { Provider } from 'react-redux'

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


store.subscribe( () => console.log(" NEW STATE: ", store.getState()) );


console.log("_______________________________________");
store.dispatch({
    type: "INCREASE_COUNTER"
});

console.log("_______________________________________");
store.dispatch({
    type: "INCREASE_COUNTER"
});

console.log("_______________________________________");
store.dispatch({
    type: "RESET_COUNTER"
});

console.log("_______________________________________");
store.dispatch({
    type: "UNKNOWN",
});

console.log("____________________LOAD_ISSUES___________________");
store.dispatch({
    type: "LOAD_ISSUES",
    payload: [{id: 1, name: 'FIRST NAME'},{id: 2, name: "SECOND NAME"}]
});


console.log("______________UNKNOWN_______________");
store.dispatch({
    type: "UNKNOWN",
});



