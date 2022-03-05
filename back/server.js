const express = require('express');
const path =require('path');
const bodyParser = require('body-parser');
const cors= require('cors');
const mongoose = require('mongoose');
const config = require('./db');
const gamingstores = require('./routes/gamingstores');
const usersRoute = require('./routes/usersRoute');
// const users = require('./routes/userregister');
// const usersl = require('./routes/userlogin');

// require signInWithEmailAndPassword  from "firebase/auth";



mongoose.Promise=global.Promise;
mongoose.connect(config.db);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/gamingstores', gamingstores)
app.use('/users', usersRoute)
// app.use('/register', users)
// app.use('/login', usersl)
var bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');
var port = process.env.PORT || 4000;
var User = require('./models/User');

app.post('/register',(req,res,next)=>{
    const newUser=new User({
      email:req.body.email,
      username:req.body.username,
      password:bcrypt.hashSync(req.body.password,10),
      role: req.body.role
    })
     newUser.save(err =>{
         if(err){

             return res.status(400).json({
                 title:'error',
                 error:'Email In Use'
                })
         }
         return res.status(200).json()
     })
  })
app.post('/login',(req,res,next)=>{
    User.findOne({email:req.body.email},(err,user)=>{

        if(err) return res.status(500).json({
            title:'Server error',
            error:err
        })

        if(!user){
            return res.status(401).json({
                title:'User not found',
                error:'Invalid Credentials'
            })
        }
        if(!bcrypt.compareSync(req.body.password,user.password)){
            return res.status(401).json({
                title:'Login failed',
                error:'Invalid Credentials'
            })
        }

        let token=jwt.sign({userId:user._id}, 'SECRETKEY');
        res.json(token);
    })
})

app.listen(port,function(){
    console.log('serveri node ' , port);
});
