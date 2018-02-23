import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { getLoadableState } from 'loadable-components/server';

import App from './components/App';

const PORT = process.env.PORT || 5000

const app = express();
app.use('/assets', express.static('./dist'));

app.get('*', async (req, res) => {

    const context = {};

    const appWithRouter = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    const loadableState = await getLoadableState(appWithRouter);
    const html = ReactDOMServer.renderToString(appWithRouter);

    res.status(200).send(render(html, loadableState));
});

function render(html, loadableState) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Get real playlists to share with Spotify</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        </head>
        <body>
           
            <div id="root">${html}</div>
            <script src="/assets/vendor.js"></script>
            <script src="/assets/client.js"></script>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            ${loadableState.getScriptTag()}
        </body>
    </html>
`
}
app.listen(PORT, () => console.log('Demo app listening on port ${ PORT }'));