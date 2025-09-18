import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  make:   { type: String, required: true, trim: true },  // e.g. "Toyota"
  model:  { type: String, required: true, trim: true },  // e.g. "Camry"
  year:   { type: Number, required: true, min: 1886 },   // first car year
  color:  { type: String },
  mileage:{ type: Number, min: 0 }
});

// Index: we often search by make + model
usersSchema.index({ make: 1, model: 1 });







export default mongoose.model("users", usersSchema);


