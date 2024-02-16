"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import UserContext from "@/context/userContext";
import { logoutUser } from "@/services/userService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const result = await logoutUser();
      setUser(undefined);
      console.log(result);
      router.push("/login")
    } catch (error) {
      console.log(error);
      toast.error("logout error");
    }
  };

  const menu = [
    {
      to: "/",
      menuName: "Home",
    },
    {
      to: "/add-task",
      menuName: "Add Task",
    },
    {
      to: "/show-task",
      menuName: "Show Task",
    },
    {
      to: "/about-task",
      menuName: "About",
    },
    {
      to: "/contact",
      menuName: "Contact",
    },
  ];
  return (
    <>
      <header className=" sticky bg-gray-800 z-50 top-0">
        <nav className="navbar px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className=" w-16">
              <div>
                <Image src={logo} alt="logo" className="" />
              </div>
            </Link>
            <div className="flex items-center lg:order-2">
              {user && (
                <div>
                  <div className=" flex items-center  ">
                    <Link
                      href="/"
                      className="text-white  hover:bg-blue-500 hover:text-black focus:ring-2 focus:ring-blue-300 font-semibold  rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                      {user.name}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className=" bg-blue-500  hover:bg-blue-600  focus:ring-2 focus:ring-gray-300 font-semibold rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
              {!user && (
                <div className=" flex items-center  ">
                  <Link
                    href="/login"
                    className="text-white  hover:bg-blue-500 hover:text-black focus:ring-2 focus:ring-blue-300 font-semibold  rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className=" bg-blue-500  hover:bg-blue-600  focus:ring-2 focus:ring-gray-300 font-semibold rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  >
                    Get started
                  </Link>
                </div>
              )}
            </div>

            {user && (
              <>
                <div
                  className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                  id="mobile-menu-2"
                >
                  <div className=" nav-item flex flex-col mt-4 font-semibold lg:flex-row  text-base lg:space-x-8 lg:mt-0">
                    {menu.map((ele,index) => (
                      <Link href={ele.to} key={ele.to}>
                        <div
                          className="cla active:text-blue-400 hover:text-blue-500"
                        >
                          {ele.menuName}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
