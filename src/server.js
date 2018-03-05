import express from 'express';

import {handleRender} from './server/controllers/reactController'

const PORT = process.env.PORT || 3001;
const app = express();

app.use('/public', express.static('./public'));
app.use(handleRender);

app.get("/about/getTime", (req, res) =>{
    console.log(new Date());
    res.statusCode(200).send(JSON.stringify({"data": new Date()}));
});

app.listen(PORT, () => console.log('Server listening on port http://localhost:' + PORT));
