import { NextResponse } from "next/server";

export const getresponceMessage = (message, successStatus, statusCode) => {
  return NextResponse.json(
    { message, success: successStatus },
    { status: statusCode }
  );
};
