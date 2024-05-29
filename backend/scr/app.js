const express = require("express");
const cors = require("cors");
const postRoute = require('./routers/postRoute');


const app = express();


app.use(express.json());
app.use(cors());
app.use('/posts', postRoute);



app.get('/', (req, res) => {
    res.send();
});
module.exports = app;