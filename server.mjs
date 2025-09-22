    //  Imports
    import express from "express";
    import dotenv from "dotenv";
    import connectDB from "./db/conn.mjs";
    import usersRoutes from "./routes/usersRoutes.mjs";
    import AtpostsRoutes from "./routes/AtpostsRoutes.mjs";
    import commentsRoutes from "./routes/commentsRoutes.mjs";
    import global from "./middleware/globalErr.mjs";
    import log from "./middleware/loggingMiddleware.mjs";












    // Setup
    dotenv.config();
    const app = express();
    const PORT = process.env.PORT || 3001;

    // Data Base Connection
    connectDB();


    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(log);




    // Routes

    app.use("/api/Users", usersRoutes);
    app.use("/api/Atposts", AtpostsRoutes);
    app.use("/api/Comments", commentsRoutes);



    // Err.Handling Middleware

    app.use(global);


    // Listener
    app.listen(PORT,()=>{
        console.log(`Servermjs Runninng on Port: ${PORT}`);

    })
