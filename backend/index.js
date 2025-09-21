import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import tourRoute from './Routes/tours.js';

import userRoute from './Routes/user.js';

import authRoute from './Routes/auth.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 8000

//database connection
const connect = async () => {
    try{

        await mongoose.connect(process.env.MONGO)

        console.log('mongodb connected')
    }catch(err){

        console.log('connection failed for mongodb',err)

    }
}


// //for testing
// app.get('/', (req,res) => {
//     res.send({message:'welcome to mern stack'})
// })

//middleware

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/tours',tourRoute);
app.use('/user',userRoute);
app.use('/auth',authRoute);






app.listen(port, () => {
    connect();
    console.log('server is listeneing on port', port)
})