const express = require('express');
const connectDB = require('./DBConnection');
const app = express();
require('dotenv').config();
const port = process.env.SERVER_PORT;
const bookRouter = require("./Routes/books");
const memberRouter = require("./Routes/member");
var cors = require('cors');
const circulationRouter = require("./Routes/circulation");

app.use(cors())
app.use(express.json());

connectDB();
app.get('/', (req, res) => {
    res.send('Hello world');
});


app.use('/book', bookRouter);

app.use('/member', memberRouter);

app.use('/circulation', circulationRouter);

app.listen(port, () => {
    console.log(`Server started running at ${port}`);
});

