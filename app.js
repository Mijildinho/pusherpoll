const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//DB Config
require('./config/db');

const app = express();

const poll = require('./routes/poll');

//Set public folder
app.use(express.static(path.join(__dirname, 'client')));

//Body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Enable CORS
app.use(cors());

app.use('/poll', poll);

//Port Number
const port = 3000;

//Start Server 
app.listen(port, () => console.log(`Server running on port ${port}`));