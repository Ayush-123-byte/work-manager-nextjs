import { getresponceMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { userId } = params;
    const tasks = await Task.find({ userId: userId });
    if (!tasks) {
      return getresponceMessage("Tasks not available", true, 404);
    }
    return NextResponse.json(tasks,{status:200});
  } catch (error) {
    console.log(error.message);
    return getresponceMessage("Internal server erroer", false, 500);
  }
};
 