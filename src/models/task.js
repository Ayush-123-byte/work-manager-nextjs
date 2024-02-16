import mongoose, { Schema } from "mongoose";
const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema);
