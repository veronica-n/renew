const express = require('express');
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
var firebaseRouter = require('./routers/firebase');
var mapRouter = require('./routers/maps');

const app = express();

app.use("/firebase", firebaseRouter);
app.use("/maps", mapRouter);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// simple route listen on localhost:3001
app.get("/", (req, res) => {
    res.json({ message: "Hello from Renew!" });
  });
app.listen(PORT, () => {
    console.log('Server listening');
});