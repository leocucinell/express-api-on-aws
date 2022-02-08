const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();
require('./config/db.connection');

const app = express();
const PORT = process.env.PORT || 3500;
//express middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

//self-made middleware

//routes
app.use('/products', routes.products);
app.use('/users', routes.users)

//server bind
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});