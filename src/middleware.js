import { NextResponse } from "next/server";
import { rewrites } from "../next.config";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   console.log("middleware executed");
  const authToken = request.cookies.get("authToken")?.value;
  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  )
    return;
  //   console.log(authToken);
  const accessDeniedForLoddedInUser =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (accessDeniedForLoddedInUser) {
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    if (!authToken) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json({
          message: "access Denied !!",
          success: false,
        },
        {status:401});
      }
      return NextResponse.redirect(new URL("/login", request.url));
    }else{
      
    }

    // console.log(authToken);
  }
  //   return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/about-task",
    "/login",
    "/contact",
    "/signup",
    "/add-task",
    "/show-task",
    "/profile/:path*",
    "/api/:path*",
  ],
};
