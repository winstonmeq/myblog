

import User from "@/models/User";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import Category from "@/models/category"
import { Types } from "mongoose";




export const GET = async (request) => {

    try{

        const { searchParams } = new URL(request.url)

        console.log('serpra', searchParams)

        const userId = searchParams.get("userId")

        console.log('userid',userId)
        
        await connectToDB();

        const users = await User.findById(userId);

        if(!users){
        
        return new NextResponse(JSON.stringify(users), {status: 200})

        }

        const categories = await Category.find(
            {users: new Types.ObjectId(userId)}
        );

        return new NextResponse(JSON.stringify(categories))

    }catch(error){

       return new NextResponse('Error in fetching data ' + error.message, {status: 500})

    }

}


//POST api for users




export const POST = async (Request) => {
  try {

    const body = await Request.json();

    console.log(body)

    await connectToDB();

    const newCategory = new Category(body);

    await newCategory.save();

    return new NextResponse(
      JSON.stringify({ message: "Category is created", category: newCategory }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse("Error in creating user" + error.message, {
      status: 500,
    });
  }
};


