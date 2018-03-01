import express from 'express';
import React from 'react';
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderToString} from 'react-dom/server'
import store from './state'
import App from './client/App'

const PORT = process.env.PORT || 3001;
const app = express();

app.use('/assets', express.static('./dist'));
app.use('/public', express.static('./public'));

app.use((req, res) => {

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
});

function renderFullHTML(html, loadedState) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>NODE REACT REDUX</title>
            <link rel="stylesheet" href="/public/css/bootstrap.min.css">
        </head>
        <body>
            <div id="root">${ html }</div>
            
            <script src="/assets/vendor.js"></script>
            <script src="/assets/client.js"></script>
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


app.listen(PORT, () => console.log('Server listening on port http://localhost:' + PORT));
