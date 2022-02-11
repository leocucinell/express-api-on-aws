/*
    This controller is responsible for refreshing a clients access token if the availability of the 
    Refresh token permits it.
*/
const jwt = require('jsonwebtoken');
const models = require('../model');
const User = models.user;

/**
 * Inputs: refreshToken.
 * Returns: new accessToken.
 * Purpose: this function verifys the client is who they say they are and grants them another
 *  access token so they dont need to log in again.
 */
const refreshAccessToken = (req, res) => {
    //grab the refreshToken from the bearer
    //retrieve the stored Refresh Token in mongodb
    //compare them with JWT
    const userRefreshToken = req.body.refreshAccessToken;
    const storedRefreshToken = User.findOne({refreshToken: userRefreshToken}, (err, response) => {
        if(err) return res.status(403).json({'message': 'unavalable token call'});
        //user found with the token sent by client
        jwt.verify(userRefreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            //decoded refresh token. have access to client username
            if(err) return res.status(403).json({'message': 'token past expiration, relogin user'});
            //grant new access to token to user
            const accessToken = jwt.sign(
                {"username": decoded.username}, //payload
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "1d"} //access token lasts one day
            );
            //grant new refresh token to user
            const refreshToken = jwt.sign(
                {"username": decoded.username}, //payload
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: "1w"} //refresh token lasts one week
            );
            const addRefreshToken = User.updateOne(
                {username: decoded.username}, 
                {refreshToken: refreshToken, dateRefreshTokenAccessed: new Date().toLocaleDateString()}, 
                (err, result) => {
                    if(err){
                        console.log(err);
                        return res.json({'message': 'unable to assign jwt'});
                    }
                    res.status(200).json({'accessToken': accessToken});
                }
            );
        });
    });
}

module.exports = {
    refreshAccessToken
}