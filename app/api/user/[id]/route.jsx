


import User from "@/models/User";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import { Types } from "mongoose";
import { ObjectId } from "mongodb";



export const GET = async (request, {params}) => {

   console.log(params.id)  
  
    try{

        await connectToDB();

        const users = await User.find(new ObjectId(params.id)).exec();

        return new NextResponse(JSON.stringify(users), {status: 200})

    }catch(error){

       return new NextResponse('Error in fetching data ' + error.message, {status: 500})

    }

}




export async function DELETE(request, {params}) {

    try {

      const id = params.id    
       
          await connectToDB();
        
     await User.findByIdAndDelete(id);
       
      return new Response(JSON.stringify('User deleted successfully'))
        
    } catch (error) {
    
     return new Response('POST Error nih pre!');
  
    } 
   
  
  }


  
export const PUT = async (Request, {params}) => {
    try {
      
  
      const {username, password, superAdmin } = await Request.json();

  
      await connectToDB();
  
     
      if (!Types.ObjectId.isValid(params.id)) {
        return new NextResponse(JSON.stringify({ message: "Invalid User id" }), {
          status: 400,
        });
      }
  
      const updatedUser = await User.findOneAndUpdate(
        { _id: params.id },
        { password:password, username:username, superAdmin:superAdmin  },    
        { new: true }
      );
  
      console.log(params.id, username, password)

      if (!updatedUser) {
        return new NextResponse(
          JSON.stringify({ message: "User not found in the database" }),
          { status: 400 }
        );
      }
  
      return new NextResponse(
        JSON.stringify({ message: "User is updated", user: updatedUser }),
        { status: 200 }
      );
    } catch (error) {
  
      return new NextResponse("Error in updating user" + error.message, {
        status: 500,
      });
  
    }
  };
  
  