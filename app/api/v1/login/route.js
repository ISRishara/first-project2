import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
  const request = await req.json();
  console.log(request);


  //Bind database
  //Find the user in database
  //check the password validity
  //Return the response with the token
  //if password invalid return error response

  return NextResponse.json({ success: true, username: "ishara" });
};
