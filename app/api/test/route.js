

import User from "@/models/User";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {

    try{

        // await connectToDB();

        // const getdata = await User.find();

        // return new NextResponse(JSON.stringify(getdata), {status: 200})

        return new NextResponse(JSON.stringify('this is my api'))

    }catch(error){

       return new NextResponse('Error in fetching data' + error.message, {status: 500})

    }

}

