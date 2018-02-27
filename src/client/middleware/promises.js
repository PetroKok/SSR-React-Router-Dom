const middleware = store => next => action => {
    if (action.type !== "PROMISE") {
        return next(action)
    }
    const [ISSUES_LOADING, ISSUES_LOADED,ISSUES_FAILURE] = action.actions;
    store.dispatch({
        type: ISSUES_LOADING
    });
    action.promise.then((data) =>

        store.dispatch({
            type: ISSUES_LOADED,
            data,
        }), (error) =>

        store.dispatch({
        type: ISSUES_FAILURE,
        error
        }));
};

export default middleware;