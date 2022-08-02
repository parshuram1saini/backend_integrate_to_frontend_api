import mongoose from "mongoose";
// const uniqueValidator = require("mongoose-unique-validator");
import uniqueValidator from "mongoose-unique-validator";

//defining schema //
const empSchema = new mongoose.Schema({
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: Number, required: true, trim: true },
  role: { type: String, required: true, trim: true, unique: true },
});
empSchema.plugin(uniqueValidator);
const EmpModal = mongoose.model("employee", empSchema);
export default EmpModal;
