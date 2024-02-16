"use client";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="">
      <div className="footer text-center bg-gray-800 text-white py-3 flex justify-around items-center ">
        <div className=" w-1/2">
          <p>Welcome to Work-Manager</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium pariatur deserunt temporibus debitis sequi lor
            lo lo
          </p>
        </div>
        <div>
          <p>Important Links</p>
          <ul className="text-white gap-3 flex justify-center flex-col items-center p-2">
            <li>
              <Link href="/">Facebook</Link>
            </li>
            <li>
              <Link href="/">Tweeter</Link>
            </li>
            <li>
              <Link href="/">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
