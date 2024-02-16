"use client";
import UserContext from "@/context/userContext";
import { deleteTask, getalltaskOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

function ShowTask() {
  const { user } = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  const handledelete = async (taskId) => {
    try {
      const deletedTask = await deleteTask(taskId);

      toast.success("deleted task");
      console.log("deleted " + deletedTask);
      const newTask = tasks.filter((item) => item._id != taskId);
      setTasks(newTask);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTask = async (userId) => {
    try {
      const data = await getalltaskOfUser(userId);
      setTasks([...data].reverse());
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchTask(user._id);
    }
  }, [user]);

  return (
    <div className=" grid ">
      <div>
        <h1
          className={`  shadow-blue-400 w-1/4  mx-auto p-5 rounded-md  text-4xl text-center m-3`}
        >
          Your task({tasks.length})
        </h1>
        <div className="user grid gap-10  m-20 ">
          {tasks.map((ele, index) => (
            <div
              key={ele._id}
              className={`${
                ele.status === "completed"
                  ? "shadow-green-400"
                  : "shadow-blue-400"
              } box shadow-inner   rounded-md p-5 w-11/12 mx-auto  `}
            >
              <div className="flex justify-between">
                <div>
                  <div className="tit text-2xl font-semibold capitalize">
                    {ele.title}
                  </div>
                  <div className="cont text-base">{ele.content}</div>
                </div>

                <div className="flex gap-3 ">
                  <button className=" cursor-pointer py-2 px-3 bg-blue-500 h-fit hover:bg-blue-600 rounded-md">
                    edit
                  </button>
                  <button
                    onClick={() => {
                      handledelete(ele._id);
                    }}
                    className=" cursor-pointer py-2 px-3 bg-red-500 h-fit hover:bg-red-600 rounded-md"
                  >
                    delete
                  </button>
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <div className="cont">
                  status :<span className=" font-semibold"> {ele.status}</span>
                </div>
                <div className="aut">
                  Author :<span className=" font-semibold">{user?.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowTask;
