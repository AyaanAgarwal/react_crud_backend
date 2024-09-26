const express = require("express");
const Srouter = express.Router();

const studentSchema = require('../models/studentschema.js');
const mongoose = require('mongoose');


// to get user details
Srouter.get('/' , (req ,res)=>{
    studentSchema.find((err , data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})


// post user (create user)
Srouter.post('/create-student' , (req,res)=>{
    studentSchema.create(req.body , (err , data)=>{
        if(err)
            return data
        else
            res.json(data);
    })
})


// to update user details -> we neet get & put both 
Srouter.route('/update-student/:id')
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id), (err , data)=>{
        if(err)
            return err
        else
            res.json(data);
    })
}).put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id) , {$set : req.body} ,(err , data)=>{
        if(err)
            return err 
        else
            res.json(data);
    })
})


 // delete a recore
 Srouter.delete('/delete-student/:id' , (req ,res)=>{
    studentSchema.findByIdAndRemove( mongoose.Types.ObjectId(req.params.id) ,(err , data)=>{
        if(err)
            return err
        else
            res.json(data);

    })
 })

 
module.exports = Srouter