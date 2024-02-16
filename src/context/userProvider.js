"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { currentUser } from "@/services/userService";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    async function load() {
      try {
        const currUser = await currentUser();
        // console.log(currUser);
        setUser({ ...currUser });
      } catch (error) {
        console.log(error);
        // toast.error("Error while loading the user");
        setUser(undefined);
      }
    }
    load();
  },[]);

  return (
    <UserContext.Provider value={{user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
