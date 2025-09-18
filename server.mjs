//  Imports
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/conn.mjs";





// Setup
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Data Base Connection
 connectDB();


// Middleware
app.use(express.json());
app.use((req,res,next)=>{
    console.log(`{req.method} -${req.path}`);
    next();

});




// Routes

// app.use("/api/users", usersRoutes);
// app.use("/api/posts", postsRoutes);
// app.use("/api/comments", commentsRoutes);




// app.get("/",(req,res)=>{
//     res.send("I name  is Seraj ,Testing Home Path");

// }); 


// Err.Handling Middleware

app.use((err,req,res,next)=>{
    res.status(500).json({msg: `Error-${err.message}`});
    
})



// Listener
app.listen(PORT,()=>{
    console.log(`Servermjs Runninng on Port: ${PORT}`);

})
