import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const pageString = searchParams.get("page");
  const POST_PER_PAGE = 4;

  try {
    const page = pageString ? parseInt(pageString) : 4;
    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
    }
    console.log(query);
    
    const [posts,count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ])
    return NextResponse.json({posts,count}, { status: 200 });
  } catch (err) {   
    console.log(err);
    return NextResponse.json(
      { error: "Somthing went wrong!" },
      { status: 500 }
    );
  }
};
