import { getresponceMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import jwt from "jsonwebtoken"

export const GET = async () => {
  try {
    const tasks = await Task.find({});
    if (!tasks) {
      return getresponceMessage("Task not found ", true, 404);
    }
    return getresponceMessage(tasks, true, 200);
  } catch (error) {
    console.log(error.message);
    return getresponceMessage("Internal server error !!", false, 400);
  }
};

export const POST = async (req) => {
  try {
    const { title, content ,userId,status} = await req.json();

    const authToken = req.cookies.get("authToken")?.value;
    const data = jwt.verify(authToken, process.env.JWT_SECRET);

    let task = new Task({ title, content, userId:data.id,status });
    if (!task) {
      return getresponceMessage("Task not found ", true, 404);
    }
    task = await task.save();
    return getresponceMessage(task, true, 200);
  } catch (error) {
    console.log(error.message);
    return getresponceMessage("Internal server error !!", false, 400);
  }
};
