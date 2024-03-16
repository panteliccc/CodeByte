import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

interface Params{
  slug:string;
}
export const GET = async (req: Request, {params}:{params:Params}) => {
  const {slug} = params;
  try{

    const post =await prisma.post.findUnique({
      where: {slug},
      include:{user:true},
    })    
    return NextResponse.json(post, { status: 200 });
  } catch (err) {   
    console.log(err);
    return NextResponse.json(
      { error: "Somthing went wrong!" },
      { status: 500 }
    );
  }
};
