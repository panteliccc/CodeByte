import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: { 
        ...(postSlug && {postSlug}),
       },
       include:{user:true},
       orderBy:{
        createdAt:'desc'
       }
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Somthing went wrong!" },
      { status: 500 }
    );
  }
};
