import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {getLoadableState} from 'loadable-components/server';
import { Provider } from 'react-redux'
import store from './state'

import App from './components/App'

const PORT = process.env.PORT || 3001;

const app = express();
app.use('/assets', express.static('./dist'));
app.use('/public', express.static('./public'));

app.use(handleRender);

function handleRender(req, res) {

    const context = {};


    const appWithRouter = (

            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App/>
                </StaticRouter>
            </Provider>

    );

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    const preloadedState = store.getState();

    res.status(200).send(renderFullHTML(appWithRouter, preloadedState));
}

function renderFullHTML(html, preloadedState) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Get real playlists to share with Spotify</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="/assets/vendor.js"></script>
            <script src="/assets/client.js"></script>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
        </body>
    </html>
`
}

app.listen(PORT, () => console.log('Demo app listening on port ${ PORT }'));
