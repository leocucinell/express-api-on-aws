/*
    This file contains the methods relating to users
*/

const models = require('../model');
const User = models.user;

const bcrypt = require('bcrypt');
//controller methods:

//POST route: /new
const createUser = (req, res) =>  {
    //check if the user exists
    const userExists = User.exists({username: req.body.username}, async function (err, result){
        if(err){
            console.log('ERROR: ' + err);
            return res.json({'message': 'Error creating user.'})
        } 
        if(result){
            return res.json({'message': "User already exists"});
        } else {
            //user does not exist, continue with function 
            try{
                const hashedPswd = await bcrypt.hash(req.body.password, 10);
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPswd
                });
                newUser.save();
                res.json({'message': 'user successfully created!'});
            } catch (err) {   
                console.log(err)
                res.json({'message': 'error creating user'});
            }
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

//Sign a user in
//POST route: /signin
const logUserIn = (req, res) => {
    const passedUsername = req.body.username;
    const passedPassword = req.body.password; //already hashed

    //find the user by username
    //bcrypt.compare the passwords
    const dbResponse = User.findOne({username: passedUsername}, (err, result) => {
        if(err){
            console.log(err);
            return res.json({'message': 'error logging in'});
        } else {
            const comparison = bcrypt.compare(passedPassword, result.password, (err, result) => {
                if(err){
                    console.log(err);
                    return res.json({'message': 'error logging in'});
                }
                if(result){
                    //result is true, log the user in / send JWT
                    res.json({'message': 'User credentials correct!'});
                } else {
                    res.json({'message': 'Incorrect user credentials'});
                }
            });
        }
    });
}

//export methods
module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    logUserIn
}