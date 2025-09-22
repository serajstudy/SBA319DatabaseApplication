  import mongoose from "mongoose";

  const postsSchema= new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName:  { type: String, required: true, trim: true },
    age:       { type: Number, min: 0 },
    email:     { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    phone:     { type: String },
    address:   { type: String }
  });

  // Index: email frequently queried
  postsSchema.index({ email: 1 });





  export default mongoose.model("posts", postsSchema);