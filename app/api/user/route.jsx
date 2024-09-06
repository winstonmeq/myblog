

import User from "@/models/User";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import { Types } from "mongoose";


export const GET = async () => {

    try{

        await connectToDB();

        const users = await User.find();

        return new NextResponse(JSON.stringify(users), {status: 200})

    }catch(error){

       return new NextResponse('Error in fetching data ' + error.message, {status: 500})

    }

}


//POST api for users

export const POST = async (Request) => {
  try {
    const body = await Request.json();
       await connectToDB();
    const newUser = new User(body);

    await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: "User is created", user: newUser }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse("Error in creating user" + error.message, {
      status: 500,
    });
  }
};


