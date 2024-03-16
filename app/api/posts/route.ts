import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const pageString = searchParams.get("page");
  const cat = searchParams.get("cat");
  const POST_PER_PAGE = 6;

  try {
    const page = pageString ? parseInt(pageString,10) : 1 ;
    const [posts,count] = await prisma.$transaction([
      prisma.post.findMany({
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where:{
          ...(cat && {catSlug: cat})
        },
        orderBy:{
          createdAt:'desc'
        }
      }),
      prisma.post.count({
        where:{
          ...(cat && {catSlug: cat})
        }
      }),
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
