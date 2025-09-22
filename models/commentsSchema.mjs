  import mongoose from "mongoose";

  const commentsSchema = new mongoose.Schema({
    name:       { type: String, required: true, trim: true },  // e.g. "Lion"
    species:    { type: String, required: true, trim: true },  // e.g. "Panthera leo"
    age:        { type: Number, min: 0 },
    habitat:    { type: String },                              // e.g. "Savannah"
    endangered: { type: Boolean, default: false }
  });

  // Index: species often queried
  commentsSchema.index({ species: 1 });







  export default mongoose.model("comments", commentsSchema);