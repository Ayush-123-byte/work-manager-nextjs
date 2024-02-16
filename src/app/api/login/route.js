import { getresponceMessage } from "@/helper/responseMessage";
import { User } from "@/models/user";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
export const POST = async (request) => {
  try {
    const { email, password } = await request.json();
    // getting user form database
    const user = await User.findOne({ email: email });
    if (!user) {
      return getresponceMessage("User doesn't exists ", false, 401);
    }
    // console.log(user);
    // checking the user password
    const compPassword = bcrypt.compareSync(password, user.password);
    if (!compPassword) {
      return getresponceMessage("password doesn't matched ", false, 401);
    }
    // generating the authToken
    const authToken = Jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    const response = getresponceMessage({ authToken,user }, true, 200);
    response.cookies.set("authToken", authToken, {
      expiresIn: "1d",
      httpOnly: true,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return getresponceMessage("internal server error ", false, 500);
  }
};
