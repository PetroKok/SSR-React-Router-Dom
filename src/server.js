import express from 'express'
// import cors from 'cors'
import bodyParser from 'body-parser';
//-----controller----
import {handleRender} from './server/controllers/reactController'
//-----models--------
import db from './server/models/db'
import Posts from './server/models/Posts'
//---------------------
let urlDB = "mongodb://adminPetro:adminPetro@ds157538.mlab.com:57538/petrobase";
const PORT = process.env.PORT || 3001;
const app = express();
//-------imports-------------


app.use('/public', express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(cors());
app.use(handleRender);


app.post('/req', (req, res) => {
    console.log("BODY: ",req.body);
    Posts.createPost(req.body, (err, post) => {
        if (err) {
            res.sendStatus(500);
            console.log(err);
        } else {
            res.send(post);
            console.log("cLOG: ",post);
        }
    })
});

app.get("/", (req, res) => {
    Posts.all((err, posts) => {
        if (err) {
            res.sendStatus(500);
            console.log(err);
        } else {
            res.send(posts);
            console.log(posts);
        }
    });
});



db.connect(urlDB, err => {
    if (err) return console.log(err);
    console.log(db.getStatus());
    app.listen(PORT, () => console.log('Server listening on port http://localhost:' + PORT));
});