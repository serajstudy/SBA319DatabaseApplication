import express from "express";
import User from "../models/usersSchema.mjs";
import {users} from "../data/data.mjs";


const router = express.Router();


router.get("/seed", async (req, res) => {
    try {
        await User.deleteMany({});
        await User.insertMany(users);
        res.send("Success: database seeded and updated");
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

// Create & Read All
router
.route("/")
.get(async (req, res) => {
    const getUsers = await User.find({});
    res.json(getUsers);
})
.post(async (req, res) => {
    const postUsers = await User.create(req.body);
    res.json(postUsers);
});

// Read, Update, Delete by ID
router
.route("/:id")
.get(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
})
.put(async (req, res) => {
    const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updateUser);
})
.delete(async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
        res.json({ msg: "Error: does not exist" });
    } else {
        res.json(deletedUser);
    }
});

export default router;

// router.get("/seed",async(req,res)=>{
//     try {
//         await User.deleteMany({});
//         await User.insertMany(users);

//         res.send("Sucess : database seeded and updated");

//     } catch (err) {
//         console.error(err.message);
        
//     }
// });




// // Create
// router
// .route("/")
// .get(async(req, res)=>{
//     let getUsers = await User.find({});
//     res.json(getUsers);
// })
// .post(async(req,res)=>{
//     let postUsers = await User.create(req.body);
//     res.json(postUsers);
// });


// // Read
//  router
//  .route("/:id")
//  .get(async(req,res)=>{
//     let user = await User.findById(req.params.id);
//     res.json(user);

//  })

//  // update

//  .put(async(req,res)=>{
//     let updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{
//         new:true,
//     });
//     res.json(updateUser);
//  })

//  // Delete

//  .delete(async(req,res)=>{
//     let deletedUser = await User.findByIdAndDelete(req.params.id);

//     if(!deletedUser)res.json({msg:"err doesnot exit"});
//     else res.json(deletedUser);
 
// });






// export default router;