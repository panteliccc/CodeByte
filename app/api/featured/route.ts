import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";


export async function GET() {
  try {
    const post = await prisma.post.findFirst({
      take: 1,
      orderBy: {
        createdAt: "desc",
      },
    });

    return new NextResponse(JSON.stringify({ post }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}
