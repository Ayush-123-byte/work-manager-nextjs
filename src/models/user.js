import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  profileURL: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
