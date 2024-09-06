

import { NextResponse } from "next/server";

export const GET = async () => {

    try{

       
        return new NextResponse(JSON.stringify('this is my api'))

    }catch(error){

       return new NextResponse('Error in fetching data' + error.message, {status: 500})

    }

}

