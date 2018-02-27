import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {hydrate} from 'react-dom'
//-----Main component
import App from "./client/App";
//--------
import store from './state'
import {Provider} from 'react-redux'
import {getIssues} from './api/githubApi'

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


store.subscribe(() => console.log(" NEW STATE: ", store.getState()));

store.dispatch({
    type: "INCREASE_COUNTER"
});
store.dispatch({
    type: "RESET_COUNTER"
});

store.dispatch({
    type: "LOAD_ISSUES",
    payload: [{id: 1, name: 'FIRST NAME'}, {id: 2, name: "SECOND NAME"}]
});


// store.dispatch({     FROM THIS DISPATCH
//     type: "PROMISE",
//     actions: ["ISSUES_LOADING", "ISSUES_LOADED","ISSUES_FAILURE"],
//     promise: getIssues()
// });
//          TO MIDDLEWARE
// const middleware = store => next => action => {
//     if (action.type !== "PROMISE") {
//         return next(action)
//     }
//     const [ISSUES_LOADING, ISSUES_LOADED,ISSUES_FAILURE] = action.actions;
//     store.dispatch({
//         type: ISSUES_LOADING
//     });
//     action.promise.then((data) => store.dispatch({
//         type: ISSUES_LOADED,
//         data,
//     }), (error) => store.dispatch({
//         type: ISSUES_FAILURE,
//         error
//     }));
// };
//
// export default middleware;