import React from 'react';
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderToString} from 'react-dom/server'
import store from '../../state'
import App from '../../client/App'

exports.handleRender = (req, res) =>{
    const context = {};

// SERVER SIDE RENDERING WITH ROUTES V4 AND REDUX
    const appWithRouter = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        </Provider>
    );
//----------------------------------------------------
    if (context.url) {
        res.redirect(context.url);
        return;
    }
    const loadedState = store.getState();// STATE OF STORE (redux)

    res.status(200).send(renderFullHTML(appWithRouter, loadedState));
};

function renderFullHTML(html, loadedState) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <title>NODE REACT REDUX</title>
            <link rel="stylesheet" href="/public/bundle/stylesheets/myStyles.css">
        </head>
        <body>
        
        <div class="bg"></div>
            <div id="root">${ html }</div>
            
            <script src="/public/bundle/main.js"></script>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
       
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(loadedState).replace(/</g, '\\u003c')}
            </script>
        </body>     
    </html>
`
}