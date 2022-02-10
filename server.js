const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const verifyJWT = require('./middleware/verifyJWT');
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

//unprotected routes
app.use('/users', routes.users);

//protected routes
app.use(verifyJWT);
app.use('/products', routes.products);


//server bind
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});