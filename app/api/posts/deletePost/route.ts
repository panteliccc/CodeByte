import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

export async function POST(req: Request) {
  try {
    const res = await req.json();

    const deletedPost = await prisma.post.delete({
      where: {
        id: res.id,
      },
    });

    return new NextResponse(JSON.stringify({ deletedPost }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}
