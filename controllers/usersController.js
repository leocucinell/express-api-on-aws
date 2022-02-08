/*
    This file contains the methods relating to users
*/

const models = require('../model');

const User = models.user;
//controller methods:

//POST route: /new
const createUser = (req, res) => {
    const newUser = User({
        ...req.body
    })
    newUser.save((err) => {
        if(err){
            console.log(err);
        } else {
            res.send('User successfully created');
        }
    });
}

//GET route: /:id
const getUser = (req, res) => {
    const dbResponse = User.findOne({_id: req.params.id}, (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
}

//PUT route: /update/:id
const updateUser = (req, res) => {
    const dbResponse = User.updateOne({_id: req.params.id}, {...req.body}, (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
}

//DELETE route: /delete/:id
const deleteUser = (req, res) => {
    const dbResponse = User.deleteOne({_id: req.params.id}, (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
}

//export methods
module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
}