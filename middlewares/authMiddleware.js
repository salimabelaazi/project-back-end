// import JWT from 'jsonwebtoken'
// import userModel from '../models/userModel.js';
const JWT = require("jsonwebtoken")
const userModel = require("../models/userModel")

const requireSignIn = async (req,res,next) => {
    
    try {
        const decode = JWT.verify(
            req.headers.authorization, 
            process.env.JWT_SECRET);
            req.user= decode;
        next();
    } catch (error) {
        console.log(error)
    }
}

const isAdmin = async(req,res,next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 1){
            return res.status(401).send({
                success:false,
                message:'UnAuthorized Acces'
            }) }
            else {
                next();
            }

    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:'Error in admi middelware',
        })
    }
}

module.exports = {requireSignIn, isAdmin}