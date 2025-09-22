    // imports
    import express from "express";
    import Comment from "../models/commentsSchema.mjs";
    import {comments} from "../data/data.mjs";

    const router = express.Router();

    router.get("/seed",async(req,res)=>{
        try {
            await comments.deleteMany({});
            await comments.insertMany(comments);

            res.send("Sucess : database seeded and updated");

        } catch (err) {
            console.error(err.message);
            
        }
    });



    // Create

    router
    .route("/")
    .get(async(req, res)=>{
        let getComments = await Comment.find({});
        res.json(getComments);

    })

    .post(async(req,res)=>{
        let newComments = await Comment.create(req.body);
        res.json(newComments);

    });

    // Read
    router
    .route("/:id")
    .get(async(res,req)=>{
        let comment = await Comment.findById(req.params.id);
        res.json(comment);
    })
    // update
    .put(async(res,req)=>{
        let updateComment = await Comment.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        });
        res.json(updateComment);
    })

    // Delete
    .delete(async(req,res)=>{
        let deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if(!deletedComment) res.json({msg: " err doesnot exist"});
        else res.json(deletedComment);
    });







    export default router;