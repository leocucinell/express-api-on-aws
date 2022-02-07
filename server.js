const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();
require('./config/db.connection');

//TODO: DB Connection

const app = express();
const PORT = process.env.PORT || 3500;
//express middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

//presonal middleware

//routes
app.use('/products', routes.products);

//server bind
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});