const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {
    functionName,
} = require('./controller')

app.get('url',functionName);







app.filter(4000,console.log("Server running on 4000"));