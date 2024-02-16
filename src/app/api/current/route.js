import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const authToken = req.cookies.get("authToken")?.value;
  // console.log(authToken);
  const data = jwt.verify(authToken, process.env.JWT_SECRET);
  // console.log(data);
  const user = await User.findById(data.id).select("-password");

  return NextResponse.json(user);
};
