import { getresponceMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";

// getting single task by task id
export const GET = async (req, { params }) => {
  try {
    const { taskId } = params;
    const task = await Task.findById({ _id: taskId });
    if (!task) {   
      return getresponceMessage("Task not found ", true, 404);
    }
    return getresponceMessage(task, true, 200);
  } catch (error) {
    console.log(error.message);
    return getresponceMessage("Internal server occure", false, 500);
  }
};

// updating task using put method
export const PUT = async (req, { params }) => {
  try {
    const { taskId } = params;
    let task = await Task.findById({ _id: taskId });
    if (!task) {
      return getresponceMessage("Task not found ", true, 404);
    }
    const { title, content,status } = await req.json();

    task.title = title;
    task.status = status;
    task.content = content;
    await task.save();
    return getresponceMessage(task, true, 200);
  } catch (error) {
    return getresponceMessage("Inetrnal server issue ", false, 500);
  }
};

// deleting the task 
export const DELETE = async (req, { params }) => {
  try {
    const { taskId } = params;
    const task = await Task.findByIdAndDelete({ _id: taskId });
    if (!task) {
      return getresponceMessage("Task not found ", true, 404);
    }
    return getresponceMessage("deleted user", true, 200);
  } catch (error) {
    return getresponceMessage("Internal server issue ", false, 404);
  }
};
