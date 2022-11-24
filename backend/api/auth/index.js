import express from "express";
const jwt = require("jsonwebtoken");
// const mailgun = require("mailgun-js");
// const DOMAIN = 'sandboxcd3946e3176548f1967dc6abb4501be9.mailgun.org';
// const mg = mailgun({apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN});

var nodemailer = require('nodemailer');
const _ = require('lodash');

import { UserModel } from "../../dataBase/user";
// import { ValidationSignin, ValidationSignup } from "../../dataBase/user/index";

const Router = express.Router();
/**
 * Route : /signup
 * Des :   Create Account
 * Param : none
 * Access: Public
 * Method: post
 */

Router.post('/signup', async (req, res) => {
    try {
        // await ValidationSignup(req.body.credentials);
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        // console.log(newUser);
        const token = newUser.generateJwtToken();
        return res.status(200).json({ token, status: "Success" });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/**
 * Route : /forgot
 * Des :   forgot password
 * Param : none
 * Access: Public
 * Method: put
 */

Router.put("/forgotpassword", async (req, res) => {
    try {
        // await ValidationSignin(req.body.credentials)
        const { email } = req.body.credentials;
        UserModel.findOne({ email }, (err, user) => {
            if (err || !user) {
                return res.status(400).json({ error: "User with this email does not Exit" })
            }

            const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEY, { expiresIn: '20m' });
            // const data ={
            //     from:'noreply@hello.com',
            //     to:email,
            //     subject:'Acount Activation Link',
            //     html:`
            //        <h2>Please Click on given link to reset your password</h2>,
            //        <p><a>${process.env.CLIENT_URL}/resetpassword/${token}</a></p>
            //     `
            // };
            // return UserModel.updateOne({resetLink:token},(err,success)=>{
            //     if(err){
            //         return res.status(400).json({error:"Reset password link error"})
            //     }
            //     else{
            //         mg.messages().send(data, function (error,body){
            //             if(error){
            //                 return res.json({error:error.message})
            //             }
            //             return res.json({message:"Email has been Sent, Kindly follow instruction"})
            //         })

            //     }
            // })
        
            console.log(process.env.MY_EMAIL,process.env.MY_PASS, process.env.MAILGUN_APIKEY);
            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                service: 'gmail',
                auth: {
                    user: process.env.MY_EMAIL,
                    pass: process.env.MY_PASS
                }
            });

            var mailOptions = {
                from: process.envMY_EMAIL,
                to: email,
                subject: 'Sending Email using Node.js',
                text: 'That was easy!'
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return res.status(401).json({error:error.message})
                } else {
                    return res.status(200).json({message:'Email sent: ' + info.response})
                }
            });
        })

    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
});


/**
 * Route : /reset-password
 * Des :   Reset the password
 * Param : none
 * Access: Public
 * Method: put
 */

Router.put("/reset-password", async (req, res) => {
    try {
        const { resetLink, newPass } = req.body
        if (resetLink) {
            jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY, function (error, decodeData) {
                if (error) {
                    return res.status(401).json({ error: "Incorrect Token or It is Expired" })
                }
                UserModel.findOne({ resetLink }, (err, user) => {
                    if (err || !user) {
                        return res.status(400).json({ error: "user with this token does not exist" })
                    }
                    const obj = {
                        password: newPass,
                        resetLink: '',
                    }
                    user = _.extend(user, obj);
                    user.save((err, result) => {
                        if (err) {
                            return res.status(400).json({ error: "Reset password error" })
                        }
                        else {
                            return res.status(200).json({ message: "your password has been changes" })
                        }
                    })
                })
            })
        }
        else {
            return res.status(401).json({ error: "Authenticate error !!" })
        }

    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
});


/**
 * Route : /signin
 * Des :   Login the user
 * Param : none
 * Access: Public
 * Method: post
 */

Router.post("/signin", async (req, res) => {
    try {
        // await ValidationSignin(req.body.credentials)
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
        return res.status(200).json({ succes: true, token })

    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
});


export default Router;