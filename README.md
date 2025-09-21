<!-- 

Mongoose CRUD 

 Description
Node + Express + Mongoose app with Users, Posts, Comments collections. Demonstrates:
- CRUD routes for each resource

- Seed script with sample data

 Install
1. `npm install`
2. Start MongoDB locally or set `MongoURI` in `.env`
3. `npm run seed`
4. `npm start`



// Routes

app.use("/api/Users", usersRoutes);
app.use("/api/Atposts", AtpostsRoutes);
app.use("/api/Comments", commentsRoutes);


 Users
- GET `/api/Users` — list users
- GET `/api/Users/:id` — get user
- POST `/api/Users` — create user (client)
- PATCH `/api/Users/:id` — update
- DELETE `/api/Users/:id` — delete

 AtPosts
- GET `/api/Atposts` — list posts (query `?tag=`, `?author=`)
- GET `/api/Atposts/:id` — get post
- POST `/api/Atposts` — create post
- PATCH `/api/Atposts/:id` — update post
- DELETE `/api/Atposts/:id` — delete post

 Comments
- GET `/api/Comments` — list comments (`?post=`)
- POST `/api/Comments` — create comment
- DELETE `/api/Comments/:id` — delete comment


 -->
