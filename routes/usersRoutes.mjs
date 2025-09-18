import express from "express";
import User from "../models/usersSchema.mjs";
import {users} from "../data/data.mjs";


const router = express.Router();



// Create
router
.route("/")
.get(async(req,res)=>{
    let getUsers = await User.find({});
})
.post(async(req,res)=>{
    let postUsers = await User.create(req.body);
    res.json(postUsers);
});


// Read
 router
 .route("/:id")
 .get(async(req,res)=>{
    let user = await User.findById(req.params.id);
    res.json(user);

 })

 // update

 .put(async(req,res)=>{
    let updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    });
    res.json(updateUser);
 })

 // Delete

 .delete(async(req,res)=>{
    let deletedUser = await User.findByIdAndDelete(req.params.id);

    if(!deletedUser)res.json({msg:"err doesnot exit"});
    else res.json(deletedUser);
 
});






export default router;