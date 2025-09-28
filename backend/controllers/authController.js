import express from 'express';

import User from '../models/User.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req,res) => {

    try{

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt)
        console.log(req.body)

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            photo:req.body.photo

        })

        await newUser.save();
        res.status(201).json({success:true,message:'Succesfully created user'});

    }catch(err){
        res.status(500).json({success:false,message:'falied to create user'});
        console.log(err)

    }
}


export const login = async (req,res) => {

    const email=req.body.email;

    try{
        const user=await User.findOne({email});

        //if user not exist
        if(!user){
           return res.status(404).json({success:false, message:'User not found'});
        }
        //if user exist then compare passowrd
        const checkCorrectPassword = await bcrypt.compare(req.body.password,user.password);

        //if password is incorrect
        if(!checkCorrectPassword){
           return res.status(401).json({success:false,message:'incorrect email or password'})
        }

        //if passowrd also coreect
        const {password,role,...rest} = user._doc;

        //create jwt token
        const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'15d'});

        //set token in cookies browser and send response to client

         // Set cookie
         res.cookie('token', token, {
            httpOnly: true,      // prevents client-side JS access
            secure: true,        // ensures cookie is sent over HTTPS
            sameSite: 'Strict',  // prevents CSRF
            maxAge: 24 * 60 * 60 * 1000 // 1 day
          });
            res.status(200).json({success:true, message:'successfully login', data:{token,...rest,role}});



    }catch(err){

        res.status(500).json({success:false,message:'falied to login user'});
        
    }
}