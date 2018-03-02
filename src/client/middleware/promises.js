const middleware = store => next => action => {
    if (action.type !== "REPOS_PROMISE" && action.type !== "USER_PROMISE") {
        return next(action)
    }

    const [LOADING, LOADED, FAILURE] = action.actions;
    store.dispatch({        //---------LOADING
        type: LOADING
    });
    action.promise.then((data) =>
        store.dispatch({        //---------COMPLETE
            type: LOADED,
            data,
        }), (error) =>
        store.dispatch({        //---------FAILURE
            type: FAILURE,
            error
        }));
};


export default middleware;