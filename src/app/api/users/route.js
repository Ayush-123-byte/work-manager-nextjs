import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
connectDb();

export const GET = async (request) => {
  try {
    const user = await User.find({}).select("-password");
    if (!user) {
      return getresponceMessage("User not found ", true, 404);
    }
    return NextResponse.json({ user, success: true }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "Internal server issue", success: false },
      { status: 500 }
    );
  }
};

// creation user using post method
export const POST = async (request) => {
  try {
    const { name, email, password, about, profileURL } = await request.json();

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    // creating user from user modules
    const user = new User({
      name,
      email,
      password: secPass,
      about,
      profileURL,
    });

    // saving the user to database
    await user.save();
    return NextResponse.json(
      {
        success: true,
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
    return Response.json(
      {
        message: "fail to create user",
        success: false,
      },
      { status: 500 }
    );
  }
};
