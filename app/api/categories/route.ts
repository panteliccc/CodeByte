import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";
export const GET = async() => {
    try{

        const categories = await prisma.category.findMany();
        return NextResponse.json(categories, { status:200 })

    }catch(err){
        console.log(err);
        return NextResponse.json({ error: 'Somthing went wrong!' }, { status: 500 })
        
    }
}