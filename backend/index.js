import express from 'express'
import dotenv from 'dotenv'
import passport from 'passport';
import cors from 'cors'
import session from "express-session";
import helmet from 'helmet'

//api
import Auth from './api/auth/index'

import privateRoutesConfig from "./config/defalut.config";

//DataBase Connection
import ConnectDb from './dataBase/connection'

dotenv.config();

const app = express();

privateRoutesConfig(passport)

app.use(cors({origin:"http://localhost:3000"}));
app.use(helmet());
app.use(express.json());
app.use(session({secret: "WISDOM"}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/",(req,res)=>{
    res.json({
        message:"server is running",
    })
})

app.use("/auth",Auth)

const PORT = 4000;

app.listen(PORT,() =>{
    ConnectDb()
    .catch((error) =>{
        console.log("Server is running , but dataBase connection failed..");
        console.log(error);
    })
    console.log("server is runnung !!!");
})