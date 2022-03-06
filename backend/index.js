import express from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

//const database = require("./firebase.js");
//const mapview = require("./maps.js");

const PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use("/", router);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/',(req, res) => {
    res.send('hey');
});

router.post('/signup',(req, res) => {
    var username = req.body.name;
    var password = req.body.password;
    res.end("yes");
});

app.listen( PORT, () => {
    console.log('Server listening');
});