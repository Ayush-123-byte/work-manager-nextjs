import { User } from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  // getting user id from url by destructuring

  try {
    const { userId } = params;
    const user = await User.findById({ _id: userId }).select("-password");
    if (!user) {
      return NextResponse.json(
        { error: "user doesn't exists" },
        { status: 404 }
      );
    }
    return NextResponse.json({ user, success: true }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "Internal server issue" },
      { status: 500 }
    );
  }
};

export const PUT = async (req, { params }) => {
  // getting user id from url by destructuring

  try {
    const { userId } = params;
    const { name, password, about, profile } = await req.json();
    const user = await User.findById({ _id: userId });
    if (!user) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    user.name = name;
    user.password = password;
    user.about = about;
    user.profile = profile;
    const updatedUser = await user.save();

    return NextResponse.json({ updatedUser, success: true }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "Internal server issue" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { userId } = params;
    const user = await User.findByIdAndDelete({ _id: userId });
    if (!user) {
      return NextResponse.json(
        { error: "user doesn't exists" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "user deleted successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "internal error occure", success: false },
      { status: 500 }
    );
  }
};
