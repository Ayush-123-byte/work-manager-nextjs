"use client";
import React, { useState } from "react";
import signup from "../../assets/signup.svg";
import Image from "next/image";
import { signUp } from "../../services/userService";
import { toast } from "react-toastify";

const Signup = () => {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      " https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVmYXVsdCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  });
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    setCredential({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL: "",
    });
    try {
      const result = await signUp(credential);
      console.log(result);
      toast.success("You have signedUp successfully !!", {
        autoClose: 1000,
        theme: "dark",
      });
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to signup pease try again !! "+error.response.data.message, {
        autoClose: 2000,
        theme: "dark",
      });
    }
  };
  return (
    <div>
      <div className=" grid grid-cols-12 ">
        <div className="col-span-6  col-start-4 shadow-inner m-6  ">
          <div>
            {" "}
            <Image src={signup} alt="signup" className=" w-full h-52" />
          </div>
          <div className="signup text-center mt-4  text-3xl font-bold  p-3 shadow-inner  shadow-blue-400">
            Signup
          </div>
          <form
            onSubmit={handleSignup}
            className=" mt-4 bg-gray-900 rounded-md p-6"
            action=""
          >
            {/* name */}
            <label htmlFor="name " className="mt-3   block text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={credential.name}
              placeholder="Name"
              onChange={onChange}
              className=" w-full  rounded-md p-3  border-2 border-gray-800 bg-gray-800 focus:ring-red-400"
            />
            {/* Email */}
            <label htmlFor="email " className="mt-3  block text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credential.email}
              placeholder="Email"
              onChange={onChange}
              className=" w-full  rounded-md p-3  border-2 border-gray-800 bg-gray-800 focus:ring-red-400"
            />

            {/* Password */}
            <label htmlFor="password " className="mt-3  block text-sm mb-2">
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credential.password}
              placeholder="password"
              onChange={onChange}
              className=" w-full  rounded-md p-3  border-2 border-gray-800 bg-gray-800 focus:ring-red-400"
            />

            {/* about */}
            <label htmlFor="about " className="mt-3  block text-sm mb-2">
              About
            </label>
            <textarea
              id="about"
              rows={5}
              name="about"
              value={credential.about}
              placeholder="About"
              onChange={onChange}
              className=" w-full  rounded-md p-3  border-2 border-gray-800 bg-gray-800 focus:ring-red-400"
            />

            {/* Profile */}
            {/* <label htmlFor="name " className="mt-3  block text-sm mb-2">
                Profile
              </label>
              <input
                type="text"
                id="profile"
                name="profile"
                value={credential.profileURL}
                placeholder="Profile"
                onChange={onChange}
                className=" w-full  rounded-md p-3  border-2 border-gray-800 bg-gray-800 focus:ring-red-400"
              /> */}

            <div className="flex justify-center flex-wrap  gap-5">
              <button
                type="submit"
                className=" bg bg-blue-600 py-2 px-4 rounded-md  mt-4 text-base  font-bold hover:bg-blue-700 "
              >
                Signup
              </button>
              <button
                type="reset"
                className=" bg bg-red-600 py-2 px-4 rounded-md  mt-4 text-base font-bold hover:bg-red-700 "
              >
                Clear
              </button>
            </div>
            {/* {JSON.stringify(credential)} */}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
