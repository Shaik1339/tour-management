import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import tourRoute from './Routes/tours.js';

import userRoute from './Routes/user.js';

import authRoute from './Routes/auth.js';

import reviewRoute from './Routes/reviews.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions = {
    origin:true,
    credentials:true
}

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

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/user',userRoute);
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/review',reviewRoute)






app.listen(port, () => {
    connect();
    console.log('server is listeneing on port', port)
})