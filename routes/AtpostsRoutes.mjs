    // imports
    import express from "express";
    import AtPost from "../models/postsSchema.mjs";
    import { Atposts} from "../data/data.mjs";





    const router = express.Router();

    router.get("/seed",async(req,res)=>{
        try {
            await AtPost.deleteMany({});
            await AtPost.insertMany(Atposts);

            res.send("Sucess : database seeded and updated");

        } catch (err) {
            console.error(err.message);
            
        }
    });






    // Create

    router
    .route("/")
    .get(async(req,res)=>{
        let getAtPosts = await AtPost.find({});
        res.json(getAtPosts);
    })

    .post(async(req,res)=>{
        let newPosts = await AtPost.create(req.body);
        res.json(newPosts);


    })



    // Read

    router
    .route("/:id")
    .get(async(req,res)=>{
        let atpost = await AtPost.findById(req.params.id);
        res.json(atpost);

    })
    // update

    .put(async(req,res)=>{
        let updateAtPost = await AtPost.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
        });
        res.json(updateAtPost);

    })

    // Delete
    .delete(async(req,res)=>{
        let deletedAtPost = await AtPost.findByIdAndDelete(req.params.id);
        if(!deletedAtPost) res.json({msg:"err doennot exit"});
        else res.json(deletedAtPost);

    });


    export default router;