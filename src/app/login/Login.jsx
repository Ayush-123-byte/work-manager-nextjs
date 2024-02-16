"use client";
import React, { useContext, useState } from "react";
import signup from "../../assets/figLogin.svg";
import Image from "next/image";
import { LoginUser } from "@/services/userService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";

const Login = () => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await LoginUser(credential);
      console.log(user);
      setCredential({
        email: "",
        password: "",
      });
      router.push("/");
      setUser(user.user);
      toast.success("logedin  successfully !!", {
        autoClose: 1000,
        theme: "dark",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(
        "Failed to signup pease try again !! " + error.response.data.message,
        {
          autoClose: 2000,
          theme: "dark",
        }
      );
    }
  };
  return (
    <div>
      <div className=" grid grid-cols-12 ">
        <div className="col-span-6  col-start-4 shadow-inner m-6  ">
          <div>
            <Image src={signup} alt="signup" className=" w-full h-52" />
          </div>
          <div className="signup text-center mt-4  text-3xl font-bold  p-3 shadow-inner  shadow-blue-400">
            Login
          </div>
          <form
            onSubmit={handleLogin}
            className=" mt-4 bg-gray-900 rounded-md p-6"
            action=""
          >
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
              required
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
              required
              value={credential.password}
              placeholder="password"
              onChange={onChange}
              className=" w-full  rounded-md p-3  border-2 border-gray-800 bg-gray-800 focus:ring-red-400"
            />
            <div className="flex justify-center flex-wrap  gap-5">
              <button
                type="submit"
                className=" bg bg-blue-600 py-2 px-4 rounded-md  mt-4 text-base  font-bold hover:bg-blue-700 "
              >
                Login
              </button>
              <button
                type="reset"
                className=" bg bg-red-600 py-2 px-4 rounded-md  mt-4 text-base font-bold hover:bg-red-700 "
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
