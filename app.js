const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const animalRoutes = require('./routes/animal');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/animal', animalRoutes);

module.exports = app;