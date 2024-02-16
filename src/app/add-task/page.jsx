"use client";
import React, { useState } from "react";
import loginSvg from "../../assets/login.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";
// export const metadata = {
//   title: "AddTask : Work Manager",
// };

function AddTask() {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added !!", {
        autoClose: 1000,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
      toast.error("Your task is not added  !!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
    setTask({
      title: "",
      content: "",
      status: "none",
      userId: "",
    });
    console.log(task);
  };

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className=" grid grid-cols-12 p-10">
        <div className=" col-span-6  col-start-4 ">
          <div className=" flex justify-center mb-5">
            <Image src={loginSvg} alt="logo" className=" w-80" />
          </div>
          <h1 className=" break-words text-4xl flex justify-center shadow-inner  shadow-blue-400 p-4">
            Add task Component
          </h1>
          <form
            onSubmit={handlesubmit}
            action="#"
            className=" bg-gray-900  shadow-inner rounded-md p-8 mt-4"
          >
            {/* task title */}
            <div className="mt-4">
              <label
                htmlFor="title "
                className=" block text-sm mb-3
              "
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={task.title}
                placeholder=" Title "
                onChange={onChange}
                className=" w-full capitalize  rounded-md p-3  border-2 border-gray-800 bg-gray-800 focus:ring-red-400"
              />
            </div>
            {/* task c */}
            <div className="mt-4">
              <label
                htmlFor="content "
                className=" block text-sm mb-3
              "
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={task.content}
                placeholder=" Content "
                onChange={onChange}
                rows={5}
                className=" w-full capitalize  rounded-md p-3  border-2 border-gray-800  bg-gray-800 focus:ring-red-400"
              />
            </div>
            {/* task status */}
            <div className="mt-4">
              <label htmlFor="status " className=" block text-sm mb-3 ">
                Status
              </label>
              <select
                name="status"
                className=" w-full capitalize  rounded-md p-3  border-2 border-gray-800  bg-gray-800 focus:ring-red-400"
                id="status"
                onChange={onChange}
                value={task.status}
              >
                <option value="none" disabled>
                  Select Status..
                </option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="flex justify-center flex-wrap gap-5">
              <button className=" bg bg-blue-600 py-2 px-4 rounded-md  mt-4 text-base  font-bold hover:bg-blue-700 ">
                Add Todo
              </button>
              <button
                type="reset"
                className=" bg bg-red-600 py-2 px-4 rounded-md  mt-4 text-base font-bold hover:bg-red-700 "
              >
                Clear
              </button>
            </div>
            {/* {JSON.stringify(task)} */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
